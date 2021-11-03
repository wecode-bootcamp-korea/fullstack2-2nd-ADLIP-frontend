<<<<<<< HEAD
//Header.js
=======
>>>>>>> ca5d05c (Fix: 로그인 기능 구현 및  상태 관리 추가)
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mixinStyle from '../../styles/mixins';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../Routes';

export default function Header() {
  const history = useHistory();

  const [headerMenus] = useState({
    host: '호스트지원',
    signup: '회원가입',
    logout: '로그아웃',
    login: '로그인',
    amswer: '자주묻는질문',
    notice: '공지사항',
  });

  const { token, setToken } = useContext(UserContext);

  const LogoutUser = () => {
    const { Kakao } = window;
    if (Kakao.Auth.getAccessToken()) {
      Kakao.API.request({
        url: '/v1/user/unlink',
        success: function (response) {
          console.log(response);
        },
        fail: function (error) {
          console.log(error);
        },
      });
      Kakao.Auth.logout(() => {
        setToken('');
        localStorage.clear();
        history.push('/');
      });
    } else {
      console.log('Not logged in.');
    }
  };

  return (
    <HeaderStyle>
      <HeaderFlexCenter>
        <LinkToTegStyle to='/'>{headerMenus.host}</LinkToTegStyle>
        <HeaderUserMenuFlex>
          {token ? (
            <HeaderUserMenuFlex>
              <WelcomeUserStyle>WELCOME</WelcomeUserStyle>
              <UserIdStyle>{' wecode! '}</UserIdStyle>
              <AdlipIconStyle />
              <LogoutButtonStyle onClick={LogoutUser}>
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
