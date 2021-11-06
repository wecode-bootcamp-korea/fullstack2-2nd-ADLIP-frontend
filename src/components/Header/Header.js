import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mixinStyle from '../../styles/mixins';
import { UserContext } from '../../contexts';
import HeaderLogout from './HeaderLogout';
import HeaderLogin from './HeaderLogin';

export default function Header() {
  const [headerMenus] = useState({
    host: '호스트지원',
    signup: '회원가입',
    logout: '로그아웃',
    login: '로그인',
    amswer: '자주묻는질문',
    notice: '공지사항',
  });

  const { token } = useContext(UserContext);

  return (
    <HeaderStyle>
      <HeaderFlexCenter>
        <LinkToTegStyle to='/'>{headerMenus.host}</LinkToTegStyle>
        <HeaderUserMenuFlex>
          {!token && !localStorage.getItem('token') ? (
            <HeaderLogout />
          ) : (
            <HeaderLogin />
          )}
          <HeaderUserMenuStyle to='/'>{headerMenus.amswer}</HeaderUserMenuStyle>
          <HeaderUserMenuStyle to='/'>{headerMenus.notice}</HeaderUserMenuStyle>
        </HeaderUserMenuFlex>
      </HeaderFlexCenter>
    </HeaderStyle>
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

const HeaderStyle = styled.div`
  ${firstTopTagStyle()}
  background-color: ${colorStyleGroup.headerBgColor};
`;

const HeaderFlexCenter = styled.div`
  ${flexStyleGroup('space-between', 'center')}
  ${widthHeightStyleGroup(widthStyleGroup.secondTopWidth, '32px')}
  ${paddingStyleGroup('6px 20px 6px 20px')}
`;

const HeaderUserMenuFlex = styled.ul`
  ${flexStyleGroup('', 'center')}
`;

const HeaderUserMenuStyle = styled(Link)`
  ${marginStyleGroup('0 0 0 12px')}
  text-decoration: none;
  ${fontStyleGroup('10px', colorStyleGroup.headerColor)}
  ${commonHoverStyle('10px', 'bold')}
`;

const LinkToTegStyle = styled(Link)`
  text-decoration: none;
  ${fontStyleGroup('10px', colorStyleGroup.headerColor)}
  ${commonHoverStyle('10px', 'bold')}
`;
