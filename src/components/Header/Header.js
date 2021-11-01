import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mixinStyle from '../../styles/mixins';

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

const LogoutButtonStyle = styled.p`
  ${marginStyleGroup('0 0 0 10px')}
  text-decoration: none;
  ${fontStyleGroup('10px', colorStyleGroup.headerColor)}
  ${commonHoverStyle('10px', 'bold')}
`;

const HeaderUserMenuStyle = styled(Link)`
  ${marginStyleGroup('0 0 0 12px')}
  text-decoration: none;
  ${fontStyleGroup('10px', colorStyleGroup.headerColor)}
  ${commonHoverStyle('10px', 'bold')}
`;

const WelcomeUserStyle = styled.p`
  ${marginStyleGroup('0 0 0 5px')}
  ${fontStyleGroup('10px', colorStyleGroup.AdlipColor, 'bold')}
`;

const UserIdStyle = styled(WelcomeUserStyle)`
  color: ${colorStyleGroup.AdlipColorBold};
`;

const AdlipIconStyle = styled.img.attrs({
  alt: 'AdlipLogo',
  src: '/images/KaKaoEnimate.gif',
})`
  ${widthHeightStyleGroup('', '35px')}
`;

const LinkToTegStyle = styled(Link)`
  text-decoration: none;
  ${fontStyleGroup('10px', colorStyleGroup.headerColor)}
  ${commonHoverStyle('10px', 'bold')}
`;
