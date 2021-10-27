/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import theme from '../../styles/theme';
import Card from './Card.js';
import axios from 'axios';

function List() {
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
    <Page>
      <MainCategory>{main[id]?.category_name}</MainCategory>

      <SubCategory>
        <SubName to='/main[id]/:id' key={id} color={theme.blackColor}>
          {sub[id]?.sub_category_name_1}
        </SubName>
        <SubName to='#!' key={id} color={theme.blackColor}>
          {sub[id]?.sub_category_name_2}
        </SubName>
        <SubName to='#!' key={id} color={theme.blackColor}>
          {sub[id]?.sub_category_name_3}
        </SubName>
      </SubCategory>

      <BtnWrap>
        <Button>언제</Button>
        <Button>어디서</Button>
        <Button>필터</Button>
      </BtnWrap>

      <ProductSection>인기 {main[id]?.category_name}</ProductSection>
      <ProductWrap>
        {product.map((a, i) => {
          return <CardWrap>{i < 4 ? <Card data={a} i={i} /> : null}</CardWrap>;
        })}
      </ProductWrap>
      <ProductSection>금주의 {main[id]?.category_name}</ProductSection>
      <ProductWrap>
        {product.map((a, i) => {
          return (
            <CardWrap>
              {i > 3 && i < 8 ? <Card data={a} i={i} /> : null}
            </CardWrap>
          );
        })}
      </ProductWrap>
      <ProductSection>신규 {main[id]?.category_name}</ProductSection>
      <ProductWrap>
        {product.map((a, i) => {
          return <CardWrap>{i > 7 ? <Card data={a} i={i} /> : null}</CardWrap>;
        })}
      </ProductWrap>
      <All> 00개의 {main[id]?.category_name} 전체보기 </All>
    </Page>
  );
}

export default List;

const Page = styled.div`
  width: 808px;
  margin: auto;
  font-style: ${theme.fontStyle};
  color: ${theme.blackColor};
`;

const MainCategory = styled.div`
  padding: 20px;
  height: 60px;
  font-size: 20px;
  font-weight: 700;
`;

const SubCategory = styled.div`
  padding: 0 0 20px 20px;
  height: 28px;
`;

const SubName = styled(Link)`
  padding-right: 20px;
  text-decoration: none;
  font-size: 12px;
  color: ${props => props.color};
`;

const BtnWrap = styled.div`
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

const ProductSection = styled.div`
  padding-left: 20px;
  font-size: 18px;
  font-weight: 700;
`;

const ProductWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 808px;
`;

const CardWrap = styled.div`
  width: 808px;
  height: 415px;
  padding-top: 20px;
`;

const All = styled(Button.withComponent('a'))`
  margin: 159px 280px;
  padding: 12px 80px;
  font-size: 13px;
  font-weight: 400;
`;
