import React, { useState } from 'react';
import styled from 'styled-components';
import KakaoLogin from '../../components/KakaoLogin/KakaoLogin';
import AdlipSignUp from '../../components/KakaoLogin/AdlipSignup';
import theme from '../../styles/theme';

function SignUp() {
  const [isHost, setIsHost] = useState(false);
  const handleIsHost = () => {
    setIsHost(!isHost);
  };

  return (
    <SignupWrapper>
      <SignupBox>
        <SignupTitle>반가워요!</SignupTitle>
        <SignupDetail>지금 애드립 가입하고 쿠폰 받으세요.</SignupDetail>
        <SignupDetail>#오늘부터 #애드립하자</SignupDetail>
        <IsHostCheck
          type='checkbox'
          name='sort'
          value='host'
          onChange={handleIsHost}
        />
        호스트라면 체크!
        <AdlipSignUp isHost={isHost} />
        <KakaoLogin isHost={isHost} />
      </SignupBox>
    </SignupWrapper>
  );
}

export default SignUp;

const SignupWrapper = styled.div`
  width: ${theme.width};
  height: 600px;
  margin: auto;
  font-family: ${theme.font};
`;

const SignupBox = styled.div`
  width: 360px;
  height: 305px;
  margin: 50px auto;
  text-align: center;
`;

const SignupTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`;

const SignupDetail = styled.p`
  margin: 5px 0;
  font-size: 35x;
  text-align: center;
`;

const IsHostCheck = styled.input`
  margin: 10px auto;
`;
