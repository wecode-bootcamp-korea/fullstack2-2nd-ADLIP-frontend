import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CategoryStyle = styled.div`
  display: flex;
  justify-content: center;
  border: 1px red solid;
  width: 100vw;
`;

const CategoryFlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
`;

const PageTitleStyle = styled.p`
  margin: 50px 0 50px 0;
  font-size: 20px;
  font-weight: bold;
`;

const CatrgoryGroupStyle = styled.div`
  display: flex;
`;

const CategoryListStyle = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 20px 325px 0;
  height: 77px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
const CategoryImgStyle = styled.img.attrs(({ url, name }) => {
  return {
    src: url,
    name: name,
  };
})`
  width: 160px;
  height: 77px;
  border-radius: 5px;
`;

const CategoryTitleStyle = styled.p`
  font-size: 16px;
  color: #ffffff;
  position: relative;
  bottom: 25px;
  right: 40px;
  font-weight: bold;
`;

export {
  CategoryStyle,
  CategoryFlexCenter,
  PageTitleStyle,
  CategoryListStyle,
  CategoryImgStyle,
  CategoryTitleStyle,
  CatrgoryGroupStyle,
};
