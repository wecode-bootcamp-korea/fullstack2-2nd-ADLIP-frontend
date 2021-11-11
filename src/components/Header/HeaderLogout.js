import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mixinStyle from '../../styles/mixins';

export default function HeaderLogout() {
  const [headerMenus] = useState({
    host: '호스트지원',
    signup: '회원가입',
    logout: '로그아웃',
    login: '로그인',
    amswer: '자주묻는질문',
    notice: '공지사항',
  });

  return (
    <HeaderUserMenuFlex>
      <HeaderUserMenuStyle to='/signup'>
        {headerMenus.signup}
      </HeaderUserMenuStyle>
      <HeaderUserMenuStyle to='/login'>{headerMenus.login}</HeaderUserMenuStyle>
    </HeaderUserMenuFlex>
  );
}

const {
  flexStyleGroup,
  fontStyleGroup,
  marginStyleGroup,
  colorStyleGroup,
  commonHoverStyle,
} = mixinStyle;

const HeaderUserMenuFlex = styled.ul`
  ${flexStyleGroup('', 'center')}
`;

const HeaderUserMenuStyle = styled(Link)`
  ${marginStyleGroup('0 0 0 12px')}
  text-decoration: none;
  ${fontStyleGroup('10px', colorStyleGroup.headerColor)}
  ${commonHoverStyle('10px', 'bold')}
`;
