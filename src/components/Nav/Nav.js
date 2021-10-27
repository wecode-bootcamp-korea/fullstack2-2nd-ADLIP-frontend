import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCommentAlt,
  faBookmark,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import {
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
} from './Nav.style';

export default function Nav() {
  const navIconImg = [
    { name: '피드', img: faCommentAlt },
    { name: '저장', img: faBookmark },
    { name: '마이', img: faUser },
  ];

  return (
    <NavStyle>
      <NavFlexCenter>
        <SectionStyle>
          <CategoriesMenuStyle to='/category'>
            <FontAwesomeIcon className='hambergerIcon isHover' icon={faBars} />
            <CategoryTilteStyle className='isHover'>
              카테고리
            </CategoryTilteStyle>
          </CategoriesMenuStyle>
          <BoundaryCategoryLogo />
          <AdipLogoLinkto to='/'>
            <AdipLogoImgStyle />
          </AdipLogoLinkto>
          <SearchBoxStyle>
            <FontAwesomeIcon className='searchIconStyle' icon={faSearch} />
            <SearchInputStyle />
          </SearchBoxStyle>
        </SectionStyle>
        <SectionStyle>
          {navIconImg.map(icon => {
            return (
              <LiStyle>
                <FontAwesomeIcon
                  className='leftTopIconStyle isHover'
                  icon={icon.img}
                />
                <LiTextStyle className='isHover'>{icon.name}</LiTextStyle>
              </LiStyle>
            );
          })}
        </SectionStyle>
      </NavFlexCenter>
    </NavStyle>
  );
}
