import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import mixinStyle from '../../styles/mixins';
import { UserContext } from '../../contexts';
import { useHistory } from 'react-router-dom';

export default function HeaderLogin() {
  const history = useHistory();

  const [headerMenus] = useState({
    host: '호스트지원',
    signup: '회원가입',
    logout: '로그아웃',
    login: '로그인',
    amswer: '자주묻는질문',
    notice: '공지사항',
  });

  const { setToken } = useContext(UserContext);

  const logout = () => {
    setToken('');
    localStorage.removeItem('token');
    window.location.reload();
    history.push('/');
  };

  const LogoutUser = () => {
    if (localStorage.getItem('socialPlatform') === 'kakao') {
      const { Kakao } = window;
      if (Kakao.Auth.getAccessToken()) {
        Kakao.Auth.logout(() => {
          logout();
        });
      } else {
        console.log('Not logged in.');
      }
    } else {
      logout();
    }
  };

  return (
    <HeaderUserMenuFlex>
      <WelcomeUserStyle>WELCOME</WelcomeUserStyle>
      <UserIdStyle>{' wecode! '}</UserIdStyle>
      <AdlipIconStyle />
      <LogoutButtonStyle onClick={LogoutUser}>
        {headerMenus.logout}
      </LogoutButtonStyle>
    </HeaderUserMenuFlex>
  );
}

const {
  flexStyleGroup,
  fontStyleGroup,
  widthHeightStyleGroup,
  marginStyleGroup,
  colorStyleGroup,
  commonHoverStyle,
} = mixinStyle;

const HeaderUserMenuFlex = styled.ul`
  ${flexStyleGroup('', 'center')}
`;

const LogoutButtonStyle = styled.p`
  ${marginStyleGroup('0 0 0 10px')}
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
