/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  NavLink,
  useParams,
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import theme from '../../styles/theme';
import Card from './Card.js';
import ListAll from './ListAll.js';
import ListPage from './ListPage.js';
import axios from 'axios';
import ListModal from './ListModal.js';

function List({ match }) {
  useEffect(() => {
    axios
      .all([
        axios.get('/data/List/title.json'),
        axios.get('/data/List/sub.json'),
        axios.get('/data/List/card.json'),
      ])
      .then(
        axios.spread((res1, res2, res3) => {
          setMain([...res1.data]);
          setSub([...res2.data]);
          setProduct([...res3.data]);
        })
      )
      .catch(() => {
        console.log('FAIL!!');
      });
  }, []);

  const [main, setMain] = useState([]);
  const [sub, setSub] = useState([]);
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  return (
    <BrowserRouter>
      <Page>
        <MainCategory>
          {main[id]?.category_name}
          <ListModal main={main} id={id} />
        </MainCategory>

        <SubCategory>
          <SubName to={`${match.url}`} key={id}>
            전체
          </SubName>
          <SubName to={`${match.url}/1`} key={id}>
            {sub[id]?.sub_category_name_1}
          </SubName>
          <SubName to={`${match.url}/2`} key={id}>
            {sub[id]?.sub_category_name_2}
          </SubName>
          <SubName to={`${match.url}/3`} key={id}>
            {sub[id]?.sub_category_name_3}
          </SubName>
        </SubCategory>
        <Wrap>
          <Button>언제</Button>
          <Button>어디서</Button>
          <Button>필터</Button>
        </Wrap>
        <Switch>
          <Route
            exact
            path='/category/:id'
            render={() => <ListPage product={product} main={main} id={id} />}
          />
          <Route path='/category/:id/all' component={ListAll} />
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
  font-style: ${theme.fontStyle};
  color: ${theme.blackColor};
`;

const SubCategory = styled.div`
  padding: 0 0 20px 20px;
  height: 30px;
`;

const SubName = styled(NavLink)`
  padding-right: 20px;
  text-decoration: none;
  font-size: 13px;
  color: ${theme.blackColor};
  &.selected {
    font-weight: 700;
    color: #3397ff;
  }
`;

const Wrap = styled.div`
  padding: 10px 0 80px 20px;
  height: 81px;
`;

const Button = styled.button`
  height: 38px;
  margin-right: 20px;
  padding: 11px 18px;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  background-color: ${theme.whiteColor};
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
`;
