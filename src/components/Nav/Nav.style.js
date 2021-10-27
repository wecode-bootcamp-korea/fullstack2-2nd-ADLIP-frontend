import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 88px;
  padding: 22px 0 8px 0;
  border-bottom: 1.5px #eeeeee solid;
`;

const NavFlexCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ theme }) => theme.width};
`;

const SectionStyle = styled.div`
  display: flex;
  align-items: center;
`;

const CategoriesMenuStyle = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 58px;
  cursor: pointer;
  text-decoration: none;
  & .hambergerIcon {
    color: ${({ theme }) => theme.navColor};
    width: 12px;
  }
  &:hover {
    transform: scale(1.1);
    font-weight: bold;
    & .isHover {
      color: ${({ theme }) => theme.AdipColor};
    }
  }
`;

const CategoryTilteStyle = styled.div`
  margin: 5px 0 0 0;
  font-size: 10px;
  color: ${({ theme }) => theme.navColor};
`;

const BoundaryCategoryLogo = styled.div`
  border-right: 1.5px #eeeeee solid;
  width: 1px;
  height: 37px;
  margin: 0 20px 0 20px;
`;

const AdipLogoLinkto = styled(Link)`
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const AdipLogoImgStyle = styled.img.attrs({
  alt: 'AdipLogo',
  src: '/images/AdipLogo.png',
})``;

const SearchBoxStyle = styled.main`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.headerBgColor};
  border: 1px #eeeeee solid;
  border-radius: 19px;
  height: 35px;
  width: 400px;
  margin: 0 19px 0 19px;
  & .searchIconStyle {
    color: ${({ theme }) => theme.navColor};
    margin: 0 12px 0 12px;
  }
`;

const SearchInputStyle = styled.input.attrs({
  type: 'text',
})`
  color: ${({ theme }) => theme.navColor};
  background-color: ${({ theme }) => theme.headerBgColor};
  border-style: none;
  width: 330px;
  &:focus {
    outline: none;
  }
`;

const LiStyle = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 0 10px;
  width: 48px;
  cursor: pointer;
  & .leftTopIconStyle {
    font-size: 19px;
    color: ${({ theme }) => theme.navColor};
  }
  &:hover {
    transform: scale(1.1);
    font-weight: bold;
    & .isHover {
      color: ${({ theme }) => theme.AdipColor};
    }
  }
`;

const LiTextStyle = styled.p`
  margin: 5px 0 0 0;
  font-size: 10px;
  color: ${({ theme }) => theme.navColor};
`;

export {
  NavFlexCenter,
  NavStyle,
  SectionStyle,
  CategoriesMenuStyle,
  CategoryTilteStyle,
  BoundaryCategoryLogo,
  SearchBoxStyle,
  SearchInputStyle,
  LiStyle,
  LiTextStyle,
  AdipLogoImgStyle,
  AdipLogoLinkto,
};
