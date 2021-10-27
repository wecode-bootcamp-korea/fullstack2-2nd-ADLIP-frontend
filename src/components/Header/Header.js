//Header.js
import React, { useState } from 'react';
import {
  HeaderFlexCenter,
  HeaderStyle,
  LinkToTegStyle,
  HeaderUserMenuFlex,
  HeaderUserMenuStyle,
  WelcomeUserStyle,
  LogoutButtonStyle,
  UserIdStyle,
  AdlipIconStyle,
} from './Header.style';

export default function Header() {
  const [headerMenus] = useState({
    host: '호스트지원',
    signup: '회원가입',
    logout: '로그아웃',
    login: '로그인',
    amswer: '자주묻는질문',
    notice: '공지사항',
  });

  const [sucessLogin, setSucessLogin] = useState(false);

  return (
    <HeaderStyle>
      <HeaderFlexCenter>
        <LinkToTegStyle to='/'>{headerMenus.host}</LinkToTegStyle>
        <HeaderUserMenuFlex>
          <LogoutButtonStyle
            onClick={() => {
              setSucessLogin(!sucessLogin);
            }}
          >
            쿠키발행
          </LogoutButtonStyle>
          {sucessLogin ? (
            <HeaderUserMenuFlex>
              <WelcomeUserStyle>WELCOME</WelcomeUserStyle>
              <UserIdStyle>{' wecode! '}</UserIdStyle>
              <AdlipIconStyle />

              <LogoutButtonStyle
                onClick={() => {
                  setSucessLogin(!sucessLogin);
                }}
              >
                {headerMenus.logout}
              </LogoutButtonStyle>
            </HeaderUserMenuFlex>
          ) : (
            <HeaderUserMenuFlex>
              <HeaderUserMenuStyle to='/signup'>
                {headerMenus.signup}
              </HeaderUserMenuStyle>
              <HeaderUserMenuStyle to='/login'>
                {headerMenus.login}
              </HeaderUserMenuStyle>
            </HeaderUserMenuFlex>
          )}

          <HeaderUserMenuStyle to='/'>{headerMenus.amswer}</HeaderUserMenuStyle>
          <HeaderUserMenuStyle to='/'>{headerMenus.notice}</HeaderUserMenuStyle>
        </HeaderUserMenuFlex>
      </HeaderFlexCenter>
    </HeaderStyle>
  );
}
