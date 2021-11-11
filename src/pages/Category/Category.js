import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mixinStyle from '../../styles/mixins';
import { API_ENDPOINT } from '../../api';

export default function Category() {
  const [mainCategoryData, setMainCategoryData] = useState([]);

  useEffect(() => {
    fetch(`${API_ENDPOINT}/category`)
      .then(res => res.json())
      .then(res => setMainCategoryData(res.data))
      .catch(console.log);
  }, []);

  console.log(mainCategoryData);
  return (
    <CategoryStyle>
      <CategoryFlexCenter>
        <PageTitleStyle>카테고리</PageTitleStyle>
        <div className='categoryListFlex'>
          {mainCategoryData?.map(category => {
            return (
              <CategoryLinkStyle
                to={`./category/${category.id - 1}`}
                key={category.id}
              >
                <CategoryImgStyle
                  url={category.mainCategoryImageUrl}
                  name={category.mainCategoryName}
                />
                <CategoryTitleStyle>
                  {category.mainCategoryName}
                </CategoryTitleStyle>
              </CategoryLinkStyle>
            );
          })}
        </div>
      </CategoryFlexCenter>
    </CategoryStyle>
  );
}

const {
  flexStyleGroup,
  fontStyleGroup,
  widthHeightStyleGroup,
  marginStyleGroup,
  widthStyleGroup,
  firstTopTagStyle,
  commonHoverStyle,
} = mixinStyle;

const CategoryStyle = styled.div`
  ${firstTopTagStyle()}
`;

const CategoryFlexCenter = styled.div`
  ${flexStyleGroup('', '', 'column')}
  width: ${widthStyleGroup.secondTopWidth};

  & .categoryListFlex {
    ${flexStyleGroup()}
  }
`;

const PageTitleStyle = styled.p`
  ${marginStyleGroup('50px 0 50px 0')}
  ${fontStyleGroup('20px', '', 'bold')}
`;

const CategoryLinkStyle = styled(Link)`
  ${flexStyleGroup('', '', 'column')}
  ${widthHeightStyleGroup('', '77px')}
  ${marginStyleGroup('0 20px 325px 0')}
  text-decoration: none;
  ${commonHoverStyle()}
`;

const CategoryImgStyle = styled.img.attrs(({ url, name }) => {
  return {
    src: url,
    name: name,
  };
})`
  ${widthHeightStyleGroup('160px', '77px')}
  border-radius: 5px;
`;

const CategoryTitleStyle = styled.p`
  ${fontStyleGroup('16px', 'white', 'bold')}
  position: relative;
  bottom: 25px;
  left: 10px;
`;
