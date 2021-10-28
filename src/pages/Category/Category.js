import React, { useEffect, useState } from 'react';
import {
  CategoryFlexCenter,
  CategoryStyle,
  CategoryListStyle,
  PageTitleStyle,
  CategoryImgStyle,
  CategoryTitleStyle,
  CatrgoryGroupStyle,
} from './Category.style';

export default function Category() {
  const [mainCategoryData, setMainCategoryData] = useState([]);

  useEffect(() => {
    fetch('/data/Main/mainCategory.json')
      .then(res => res.json())
      .then(data => setMainCategoryData(data.category))
      .catch(console.log);
  }, []);

  return (
    <CategoryStyle>
      <CategoryFlexCenter>
        <PageTitleStyle>카테고리</PageTitleStyle>
        <CatrgoryGroupStyle>
          {mainCategoryData.map(category => {
            return (
              <CategoryListStyle to='./category' key={category.id}>
                <CategoryImgStyle url={category.url} name={category.name} />
                <CategoryTitleStyle>{category.name}</CategoryTitleStyle>
              </CategoryListStyle>
            );
          })}
        </CatrgoryGroupStyle>
      </CategoryFlexCenter>
    </CategoryStyle>
  );
}
