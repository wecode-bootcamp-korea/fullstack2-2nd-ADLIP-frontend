import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  NavLink,
  BrowserRouter,
  Route,
  Switch,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import ListAll from './ListAll.js';
import ListPage from './ListPage.js';
import axios from 'axios';
import ListModal from './ListModal.js';
import ListFilterWhere from './ListFilterWhere';
import ListFilter from './ListFilter.js';
import SubList from './SubList.js';
import { API } from '../../API/api';

function List({ match }) {
  const { id: newId } = useParams();
  const [main, setMain] = useState([]);
  const [sub, setSub] = useState([]);
  const [product, setProduct] = useState([]);
  const [subProduct, setSubProduct] = useState([]);
  const [productAll, setProductAll] = useState([]);
  const [searchAll, setSearchAll] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get(`${API}/category/${newId}`),
        axios.get(`${API}/category/${Number(match.params.id) + 1}`),
        axios.get(`${API}/product/${Number(match.params.id) + 1}/all`),
        axios.get('/data/List/title.json'),
        axios.get('/data/List/sub.json'),
      ])
      .then(
        axios.spread((res1, res2, res3, res4, res5) => {
          setSubProduct(res1.data.data);
          setProduct(res2.data.data);
          setProductAll(res3.data.data);
          setMain([...res4.data]);
          setSub([...res5.data]);
        })
      )
      .catch(() => {
        console.log('FAIL!!');
      });
  }, []);

  useEffect(() => {
    fetch(`${API}/search/${match.params.id}/all`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        res.data === [] ? setSearchAll([]) : setSearchAll(res.data);
      });
  }, [setSearchAll]);

  let { path, url } = useRouteMatch();

  const { id } = match.params;

  const test = event => {
    setTitle(event.target.innerText);
  };

  return (
    <BrowserRouter>
      <Page>
        <MainCategory>
          {main[id]?.category_name}
          <ListModal main={main} id={id} />
        </MainCategory>

        <SubCategory>
          <SubName to={`${url}`} key={id}>
            전체
          </SubName>
          {sub[newId]?.subs.map(s => (
            <SubName to={`${url}/${s.id}`} key={s.id} onClick={test}>
              {s.name}
            </SubName>
          ))}
        </SubCategory>

        <Wrap>
          <ListFilterWhere />
          <ListFilter product={product} />
        </Wrap>
        <Switch>
          <Route
            path={`${path}/searchAll`}
            render={() => (
              <ListAll productAll={searchAll} main={main} sub={sub} id={id} />
            )}
          />
          <Route
            path={`${path}/all`}
            render={() => (
              <ListAll productAll={productAll} main={main} sub={sub} id={id} />
            )}
          />

          <Route
            path={`${path}/:sub`}
            render={() => (
              <SubList
                subProduct={subProduct}
                main={main}
                sub={sub}
                id={id}
                title={title}
              />
            )}
          />

          <Route
            exact
            path={`${path}`}
            render={() => (
              <ListPage
                product={product}
                productAll={productAll}
                main={main}
                sub={sub}
                id={id}
              />
            )}
          />
        </Switch>
      </Page>
    </BrowserRouter>
  );
}

export default List;

const MainCategory = styled.div`
  display: flex;
  margin-top: 10px;
  padding: 20px;
  height: 65px;
  font-size: 20px;
  font-weight: 700;
`;

const Page = styled.div`
  width: 808px;
  margin: auto;
  font-style: 'Noto Sans KR', Helvetica, Arial, sans-serif;
  color: #000000;
`;

const SubCategory = styled.div`
  padding: 0 0 10px 20px;
  height: 10px;
`;

const SubName = styled(NavLink)`
  padding-right: 20px;
  text-decoration: none;
  font-size: 13px;
  color: #000000;
  &.active {
    font-weight: bold;
    color: #1187cf;
  }
`;

const Wrap = styled.div`
  display: flex;
  padding: 0 0 100px 10px;
  height: 81px;
`;
