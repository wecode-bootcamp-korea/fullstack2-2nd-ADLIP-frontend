/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from './Card.js';

function SubList(props, match) {
  const id = props.id;
  const sub = props.sub;
  const subProduct = props.subProduct;
  const productAll = props.productAll;

  const categoryfirst = subProduct.subCategoriesProductsByRating;
  const categorytwo = subProduct.subCategoriesProductsByNew;
  const category = subProduct.subCategoriesProductsByOnly;
  const categorydiscount = subProduct.subCategoriesProductsByDiscount;
  useEffect(() => {}, [props.subProduct]);
  useEffect(() => {}, [subProduct[id]?.subCategoryName]);
  useEffect(() => {}, [subProduct[id]?.subCategoriesProductsByDiscount]);
  useEffect(() => {}, [subProduct[id]?.subCategoriesProductsByNew]);
  useEffect(() => {}, [subProduct[id]?.subCategoriesProductsByOnly]);

  return (
    <div>
      <ProductSection>인기 {props.title}</ProductSection>
      <ProductWrap>
        {categoryfirst?.map((a, i) => {
          return (
            <CardWrap key={a.sub}>
              <Card data={a} i={i} />
            </CardWrap>
          );
        })}
      </ProductWrap>
      <ProductSection>금주의 {props.title}</ProductSection>
      <ProductWrap>
        {categorytwo?.map((a, i) => {
          return (
            <CardWrap key={a.sub}>
              <Card data={a} i={i} />
            </CardWrap>
          );
        })}
      </ProductWrap>
      <ProductSection>신규 {props.title}</ProductSection>
      <ProductWrap>
        {categorydiscount?.map((a, i) => {
          return (
            <CardWrap key={a.sub}>
              <Card data={a} i={i} />
            </CardWrap>
          );
        })}
      </ProductWrap>
    </div>
  );
}
export default SubList;

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
