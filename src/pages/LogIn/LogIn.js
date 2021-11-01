import React from 'react';
import styled from 'styled-components';
import AdlipLogIn from '../../components/KakaoLogin/AdlipLogin';
import KakaoLogin from '../../components/KakaoLogin/KakaoLogin';
import theme from '../../styles/theme';

function LogIn() {
  return (
    <LoginWrapper>
      <LoginBox>
        <LoginTitle>Welcome!</LoginTitle>
        <LoginDetail>지금 로그인하고 애드립을 즐기세요.</LoginDetail>
        <AdlipLogIn />
        <KakaoLogin />
      </LoginBox>
    </LoginWrapper>
  );
}

export default LogIn;

const LoginWrapper = styled.div`
  width: ${theme.width};
  height: 600px;
  margin: auto;
  font-family: ${theme.font};
`;

const LoginBox = styled.div`
  width: 360px;
  height: 305px;
  margin: 50px auto;
  text-align: center;
`;

const LoginTitle = styled.h3`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  font-style: ${theme.font};
`;

const LoginDetail = styled.p`
  margin: 20px 0;
  font-size: 35x;
  text-align: center;
`;
