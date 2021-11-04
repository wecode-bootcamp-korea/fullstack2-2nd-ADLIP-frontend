import React from 'react';
import styled from 'styled-components';
import Card from './Card.js';
import mixinStyle from '../../styles/mixins';

export default function CommonCardList(props) {
  const { productsData, title } = props;

  return (
    <ProductGroup>
      <ProductSection>{title}</ProductSection>
      <ProductWrap>
        {productsData?.map(product => {
          return (
            <CardWrap key={product.id}>
              <Card data={product} />
            </CardWrap>
          );
        })}
      </ProductWrap>
    </ProductGroup>
  );
}

const {
  flexStyleGroup,
  fontStyleGroup,
  widthHeightStyleGroup,
  marginStyleGroup,
  paddingStyleGroup,
} = mixinStyle;

const ProductGroup = styled.div`
  ${marginStyleGroup('50px 0 50px 0 ')}
`;
const ProductSection = styled.div`
  ${paddingStyleGroup('0 0 0 20px')}
  ${fontStyleGroup('18px', '', '700')}
`;

const ProductWrap = styled.div`
  ${flexStyleGroup('space-between')}
  ${widthHeightStyleGroup('808px')}
`;

const CardWrap = styled.div`
  ${widthHeightStyleGroup('808px', '340px')}
  ${paddingStyleGroup('20px 0 0 0')}
`;
