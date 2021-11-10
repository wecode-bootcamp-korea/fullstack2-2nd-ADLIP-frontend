import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mixinStyle from '../../styles/mixins';

export default function MainMiddleCategory(props) {
  const { mainPageCategoryData } = props;

  return (
    <MainPageCategoryStyle>
      <MainPageCategoryFlexCenter
        justify='center'
        align='center'
        width='768px'
        height='83px'
      >
        {mainPageCategoryData?.map(category => {
          return (
            <MainPageCategoryLinkStyle
              to={`/category/${category.mainId}/${category.subId || ''}`}
              key={category.id}
              align='center'
              direction='column'
              textDecoration='none'
            >
              <CategoryImgStyle
                url={category.url}
                name={category.name}
                borderRadius='50px'
                width='50px'
                height='50px'
              />
              <CategoryTitleStyle
                fontSize='10px'
                fontWeight='bold'
                fontColor={colorStyleGroup.middleCategoryTextColor}
              >
                {category.name}
              </CategoryTitleStyle>
            </MainPageCategoryLinkStyle>
          );
        })}
      </MainPageCategoryFlexCenter>
    </MainPageCategoryStyle>
  );
}

const {
  flexStyleGroup,
  fontStyleGroup,
  widthHeightStyleGroup,
  marginStyleGroup,
  colorStyleGroup,
  firstTopTagStyle,
  commonHoverStyle,
} = mixinStyle;

const propsStyle = {
  justify: props => props.justify,
  align: props => props.align,
  direction: props => props.direction,
  width: props => props.width,
  height: props => props.height,
  textDecoration: props => props.textDecoration,
  borderRadius: props => props.borderRadius,
  fontSize: props => props.fontSize,
  fontColor: props => props.fontColor,
  fontWeight: props => props.fontWeight,
};

const MainPageCategoryStyle = styled.div`
  ${firstTopTagStyle()}
`;

const MainPageCategoryFlexCenter = styled.div`
  ${flexStyleGroup(propsStyle.justify, propsStyle.align, propsStyle.direction)}
  ${widthHeightStyleGroup(propsStyle.width, propsStyle.height)}
  ${marginStyleGroup('40px 0 0 0')}
`;

const MainPageCategoryLinkStyle = styled(Link)`
  ${flexStyleGroup(propsStyle.justify, propsStyle.align, propsStyle.direction)}
  text-decoration: ${propsStyle.textDecoration};
  ${commonHoverStyle()}
  ${marginStyleGroup('0 30px 0 30px')}
`;
const CategoryImgStyle = styled.img.attrs(({ url, name }) => {
  return {
    src: url,
    alt: name,
  };
})`
  ${widthHeightStyleGroup(propsStyle.width, propsStyle.height)}
  border-radius: ${propsStyle.borderRadius};
`;

const CategoryTitleStyle = styled.p`
  ${fontStyleGroup(
    propsStyle.fontSize,
    propsStyle.fontColor,
    propsStyle.fontWeight
  )}
  ${marginStyleGroup('10px 0 0 0')}
`;
