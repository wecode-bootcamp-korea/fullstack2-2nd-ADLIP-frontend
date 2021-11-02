import React, { useEffect, useRef, useState } from 'react';
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
import SearchModal from './SearchModal';

export default function Nav() {
  const localValue = localStorage.getItem('search');
  const [searchValueArray, setSearchValueArray] = useState(
    JSON.parse(localValue) || []
  );
  const [searchContent, setSearchContent] = useState('');
  const [isSearchBoolean, setSearchBoolean] = useState(false);
  const history = useHistory();

  const listPageMove = deliverData => {
    history.push({
      pathname: `/category/1`,
      state: deliverData,
    });
  };

  const searchOnchange = e => {
    setSearchContent(e.target.value);
  };

  const searchEnterEvent = e => {
    e.preventDefault();
    setSearchBoolean(false);
    listPageMove(searchContent);
    setSearchValueArray([...searchValueArray, searchContent]);
    localStorage.setItem(
      'search',
      JSON.stringify([...searchValueArray, searchContent])
    );
  };

  const DeleteSearchData = searchData => {
    const dataIndex = searchValueArray.indexOf(searchData);
    searchValueArray.splice(dataIndex, 1);
    setSearchValueArray(searchValueArray);
    localStorage.setItem('search', JSON.stringify(searchValueArray));
  };

  const pushInputValueAtMotal = e => {
    listPageMove(searchContent);
    setSearchContent(e.target.innerText);
    setSearchBoolean(false);
  };

  const changeSearchBoxBoderColor = isFocus => {
    setSearchBoolean(isFocus);
  };

  const navIconImg = [
    { id: 1, name: '피드', img: faCommentAlt },
    { id: 2, name: '저장', img: faBookmark },
    { id: 3, name: '마이', img: faUser },
  ];

  return (
    <NavStyle onSubmit={searchEnterEvent}>
      <NavFlexCenter>
        <NavSectionFlexStyle>
          <CategoryMenuStyle to='/category'>
            <FontAwesomeIcon className='hambergerIcon isHover' icon={faBars} />
            <CategoryTilteStyle
              className='isHover'
              onFocus={() => {
                console.log('asdasd');
              }}
            >
              카테고리
            </CategoryTilteStyle>
          </CategoryMenuStyle>
          <BoundaryCategoryLogo />
          <AdlipLogoLinkto to='/'>
            <AdlipLogoImgStyle />
          </AdlipLogoLinkto>
          <SearchBoxStyle
            borderColor={
              isSearchBoolean ? colorStyleGroup.AdlipColor : '#eeeeee'
            }
          >
            <FontAwesomeIcon className='searchIconStyle' icon={faSearch} />
            <SearchInputStyle
              placeholder='검색어를 입력해주세요!'
              value={searchContent}
              onChange={searchOnchange}
              onClick={() => changeSearchBoxBoderColor(true)}
            />
            <FontAwesomeIcon
              className='cancelIconStyle'
              icon={faBan}
              onClick={() => {
                setSearchContent('');
              }}
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
      {isSearchBoolean && (
        <SearchModal
          searchValueArray={searchValueArray}
          setSearchValueArray={setSearchValueArray}
          pushInputValueAtMotal={pushInputValueAtMotal}
          setSearchBoolean={setSearchBoolean}
          DeleteSearchData={DeleteSearchData}
        />
      )}
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
  commonHoverStyle,
} = mixinStyle;

const NavStyle = styled.form`
  ${flexStyleGroup('', 'center', 'column')}
  ${widthHeightStyleGroup(widthStyleGroup.topHorizontalWidth, '80px')}
`;

const NavFlexCenter = styled.div`
  ${flexStyleGroup('space-between', 'center')}
  width: ${widthStyleGroup.secondTopWidth};
  ${paddingStyleGroup('22px 0 20px 0')}
  border-bottom: 1.5px #eeeeee solid;
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
  src: '/images/AdlipLogo-v2.png',
})`
  height: 45px;
`;

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
