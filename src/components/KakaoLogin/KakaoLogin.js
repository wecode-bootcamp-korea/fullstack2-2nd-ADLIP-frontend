import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import dotenv from 'dotenv';
<<<<<<< HEAD
import jwt_decode from 'jwt-decode';
=======
import { UserContext } from '../../Routes';
>>>>>>> ca5d05c (Fix: 로그인 기능 구현 및  상태 관리 추가)

dotenv.config();

window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);

function Kakao({ isHost }) {
  const { Kakao } = window;
  const history = useHistory();

  const hostBody = {
    status: 'host',
    socialPlatform: 'kakao',
  };

  const userBody = {
    status: 'user',
    socialPlatform: 'kakao',
  };

  const { setToken } = useContext(UserContext);

  const kakaoLogin = () => {
    Kakao.Auth.login({
      scope: 'account_email, profile_image, profile_nickname',
      success: function (authObj) {
        fetch('http://localhost:8080/user/kakao', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: authObj.access_token,
          },
          body: JSON.stringify(isHost ? hostBody : userBody),
        })
          .then(res => res.json())
          .then(res => {
<<<<<<< HEAD
            const token = res.token;
            localStorage.setItem('token', JSON.stringify(token));
            let decoded = jwt_decode(token);
            localStorage.setItem('user', JSON.stringify(decoded));
            JSON.parse(localStorage.getItem('user'));
            if (res.token) {
=======
            const adlipToken = res.token;
            if (adlipToken) {
              setToken(adlipToken);
>>>>>>> ca5d05c (Fix: 로그인 기능 구현 및  상태 관리 추가)
              alert(res.message);
              history.push('/');
            } else {
              alert(res.message);
            }
          });
      },
      fail: function (error) {
        alert(JSON.stringify(error));
      },
    });
  };

  return (
    <LoginImg
      onClick={kakaoLogin}
      src='/images/kakaoLogo.png'
      alt='kakaoLoginButton'
    />
  );
}

export default Kakao;

const LoginImg = styled.img`
  display: block;
  margin: 5px 0;
  height: 50px;
  width: 360px;

  :hover {
    filter: brightness(70%);
  }
`;
