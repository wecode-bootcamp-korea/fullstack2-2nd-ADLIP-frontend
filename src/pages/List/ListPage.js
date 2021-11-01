/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../styles/theme';
import Card from './Card.js';

function ListPage(props, match) {
  const id = props.id;
  const product = props.product;
  const mainTitle = props.main[id]?.category_name;

  return (
    <div>
      <ProductSection>인기 {mainTitle}</ProductSection>
      <ProductWrap>
        {product.map((a, i) => {
          return (
            <CardWrap key={a.id}>
              {i < 4 ? <Card data={a} i={i} /> : null}
            </CardWrap>
          );
        })}
      </ProductWrap>
      <ProductSection>금주의 {mainTitle}</ProductSection>
      <ProductWrap>
        {product.map((a, i) => {
          return (
            <CardWrap key={a.id}>
              {i > 3 && i < 8 ? <Card data={a} i={i} /> : null}
            </CardWrap>
          );
        })}
      </ProductWrap>
      <ProductSection>신규 {mainTitle}</ProductSection>
      <ProductWrap>
        {product.map((a, i) => {
          return (
            <CardWrap key={a.id}>
              {i > 7 && i < 12 ? <Card data={a} i={i} /> : null}
            </CardWrap>
          );
        })}
      </ProductWrap>

      {/* <AllBtn onClick={() => (location.href = '/category/:id/all')} key={id}> */}
      <AllBtn to={`/category/${id}/all`} key={id} target='_top'>
        {product.length}개의 {mainTitle} 전체보기
      </AllBtn>
    </div>
  );
}
export default ListPage;

const ProductSection = styled.div`
  padding-left: 20px;
  font-size: 18px;
  font-weight: 700;
`;

const ProductWrap = styled.div`
  display: flex;
  width: 788px;
`;

const CardWrap = styled.div`
  height: 415px;
  padding-top: 20px;
`;

const AllBtn = styled(Link)`
  display: inline-block;
  padding: 13px 70px;
  margin: 0 0 50px 280px;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  background-color: ${theme.whiteColor};
  color: ${theme.blackColor};
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
`;
