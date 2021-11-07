/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from './Card.js';

function ListPage(props, match) {
  let id = props.id;

  const product = props.product;

  const productAll = props.productAll;
  const mainTitle = props.main[id]?.category_name;

  const categoryfirst = product?.mainCategoriesProductsByRating;

  const categorytwo = product.mainCategoriesProductsByNew;
  const category = product.mainCategoriesProductsByOnly;
  const categorydiscount = product.mainCategoriesProductsByDiscount;
  useEffect(() => {}, [props.product]);
  useEffect(() => {}, [product[id]?.mainCategoryName]);
  useEffect(() => {}, [product[id]?.mainCategoriesProductsByDiscount]);
  useEffect(() => {}, [product[id]?.mainCategoriesProductsByNew]);
  useEffect(() => {}, [product[id]?.mainCategoriesProductsByOnly]);
  useEffect(() => {}, [product[id]?.mainCategoriesProductsByRating]);

  return (
    <div>
      <ProductSection>인기 {mainTitle}</ProductSection>
      <ProductWrap>
        {categoryfirst?.map((a, i) => {
          return (
            <CardWrap key={a.id}>
              <Card data={a} i={i} />
            </CardWrap>
          );
        })}
      </ProductWrap>
      <ProductSection>금주의 {mainTitle}</ProductSection>
      <ProductWrap>
        {category?.map((a, i) => {
          return (
            <CardWrap key={a.id}>
              <Card data={a} i={i} />
            </CardWrap>
          );
        })}
      </ProductWrap>
      <ProductSection>신규 {mainTitle}</ProductSection>
      <ProductWrap>
        {categorydiscount?.map((a, i) => {
          return (
            <CardWrap key={a.id}>
              <Card data={a} i={i} />
            </CardWrap>
          );
        })}
      </ProductWrap>

      {/* <AllBtn onClick={() => (location.href = '/category/:id/all')} key={id}> */}
      <AllBtn to={`/category/${id}/all`} key={id} target='_top'>
        {productAll?.length}개의 {mainTitle} 전체보기
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

export const ProductWrap = styled.div`
  display: flex;
  width: 788px;
`;

export const CardWrap = styled.div`
  height: 415px;
  padding-top: 20px;
`;

const AllBtn = styled(Link)`
  display: inline-block;
  padding: 13px 70px;
  margin: 0 0 50px 280px;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  background-color: #ffffff;
  color: #000000;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
`;
