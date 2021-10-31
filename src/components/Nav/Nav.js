import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faBan } from '@fortawesome/free-solid-svg-icons';
import {
  faCommentAlt,
  faBookmark,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import mixinStyle from '../../styles/mixins';

export default function Nav() {
  const [searchValueArray, setSearchValueArray] = useState(
    localStorage.getItem('search') || ''
  );
  const [searchContent, setSearchContent] = useState('');
  const [inputBorderColor, setinputBorderColor] = useState('#eeeeee');
  const history = useHistory();

  const searchOnchange = e => {
    setSearchContent(e.target.value);
  };

  const searchEnterEvent = e => {
    e.preventDefault();
    setSearchValueArray(`${searchValueArray},${searchContent}`);
    localStorage.setItem('search', searchValueArray);
    console.log(searchValueArray);
    setSearchContent('');
    history.push({
      pathname: '/',
      state: searchContent,
    });
  };

  const cancelStorageValue = () => {
    localStorage.clear();
    setSearchContent('');
  };

  const changeSearchBoxBoderColor = isFocus => {
    setinputBorderColor(isFocus ? colorStyleGroup.AdlipColorBold : '#eeeeee');
  };

  const navIconImg = [
    { id: 1, name: '피드', img: faCommentAlt },
    { id: 2, name: '저장', img: faBookmark },
    { id: 3, name: '마이', img: faUser },
  ];

  return (
    <NavStyle onSubmit={searchEnterEvent} height='80px'>
      <NavFlexCenter>
        <NavSectionFlexStyle>
          <CategoryMenuStyle to='/category'>
            <FontAwesomeIcon className='hambergerIcon isHover' icon={faBars} />
            <CategoryTilteStyle className='isHover'>
              카테고리
            </CategoryTilteStyle>
          </CategoryMenuStyle>
          <BoundaryCategoryLogo />
          <AdlipLogoLinkto to='/'>
            <AdlipLogoImgStyle />
          </AdlipLogoLinkto>
          <SearchBoxStyle borderColor={inputBorderColor}>
            <FontAwesomeIcon className='searchIconStyle' icon={faSearch} />
            <SearchInputStyle
              placeholder='검색어를 입력해주세요!'
              value={searchContent}
              onChange={searchOnchange}
              onFocus={() => changeSearchBoxBoderColor(true)}
              onBlur={() => changeSearchBoxBoderColor(false)}
            />
            <FontAwesomeIcon
              className='cancelIconStyle'
              icon={faBan}
              onClick={cancelStorageValue}
            />
          </SearchBoxStyle>
        </NavSectionFlexStyle>
        <NavSectionFlexStyle>
          {navIconImg.map(icon => {
            return (
              <NavLeftIconStyle key={icon.id}>
                <FontAwesomeIcon
                  className='leftTopIconStyle isHover'
                  icon={icon.img}
                />
                <NavLeftIconTextStyle className='isHover'>
                  {icon.name}
                </NavLeftIconTextStyle>
              </NavLeftIconStyle>
            );
          })}
        </NavSectionFlexStyle>
      </NavFlexCenter>
    </NavStyle>
  );
}

const {
  flexStyleGroup,
  fontStyleGroup,
  widthHeightStyleGroup,
  marginStyleGroup,
  paddingStyleGroup,
  colorStyleGroup,
  widthStyleGroup,
  firstTopTagStyle,
  commonHoverStyle,
} = mixinStyle;

const NavStyle = styled.form`
  ${firstTopTagStyle(props => props.height)}
  ${paddingStyleGroup('22px 0 8px 0')}
  border-bottom: 1.5px #eeeeee solid;
`;

const NavFlexCenter = styled.div`
  ${flexStyleGroup('space-between', 'center')}
  width: ${widthStyleGroup.secondTopWidth};
`;

const NavSectionFlexStyle = styled.div`
  ${flexStyleGroup('', 'center')}
`;

const CategoryMenuStyle = styled(Link)`
  ${flexStyleGroup('', 'center', 'column')}
  ${widthHeightStyleGroup('58px')}
  text-decoration: none;
  ${commonHoverStyle()}

  & .hambergerIcon {
    width: 12px;
    color: ${colorStyleGroup.navColor};
  }

  &:hover {
    & .isHover {
      color: ${colorStyleGroup.AdlipColor};
    }
  }
`;

const CategoryTilteStyle = styled.div`
  ${marginStyleGroup('5px 0 0 0')}
  ${fontStyleGroup('10px', colorStyleGroup.navColor)}
`;

const BoundaryCategoryLogo = styled.div`
  ${widthHeightStyleGroup('1px', '37px')}
  ${marginStyleGroup('0 20px 0 20px', '0')}
  border-right: 1.5px #eeeeee solid;
`;

const AdlipLogoLinkto = styled(Link)`
  ${commonHoverStyle()}
`;

const AdlipLogoImgStyle = styled.img.attrs({
  alt: 'AdlipLogo',
  src: '/images/AdlipLogo.png',
})``;

const SearchBoxStyle = styled.main`
  ${flexStyleGroup('', 'center')}
  ${widthHeightStyleGroup('400px', '35px')}
  ${marginStyleGroup('0 19px 0 19px')}
  background-color: ${colorStyleGroup.headerBgColor};
  border: 1px #eeeeee solid;
  border-radius: 19px;
  border-color: ${props => props.borderColor};

  & .searchIconStyle {
    ${marginStyleGroup('0 12px 0 12px')}
    color: ${colorStyleGroup.navColor};
  }

  & .cancelIconStyle {
    color: ${colorStyleGroup.navColor};
    ${commonHoverStyle()}
  }
`;

const SearchInputStyle = styled.input.attrs({
  type: 'text',
})`
  ${widthHeightStyleGroup('330px')}
  background-color: ${colorStyleGroup.headerBgColor};
  border-style: none;
  color: ${colorStyleGroup.navColor};

  &:focus {
    outline: none;
  }
`;

const NavLeftIconStyle = styled.div`
  ${flexStyleGroup('', 'center', 'column')}
  ${widthHeightStyleGroup('48px')}
  ${marginStyleGroup('0 0 0 10px')}
  ${commonHoverStyle()}

  & .leftTopIconStyle {
    ${fontStyleGroup('19px', colorStyleGroup.navColor)}
  }

  &:hover {
    & .isHover {
      color: ${colorStyleGroup.AdlipColor};
    }
  }
`;

const NavLeftIconTextStyle = styled.p`
  ${marginStyleGroup('5px 0 0 0')}
  ${fontStyleGroup('10px', colorStyleGroup.navColor)}
`;
