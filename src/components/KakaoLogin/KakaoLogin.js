import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import dotenv from 'dotenv';
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
            localStorage.setItem('token', res.token);
            if (res.token) {
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

    const kakaoLogout = () => {
      if (Kakao.Auth.getAccessToken()) {
        Kakao.Auth.logout(() => {
          localStorage.clear();
          history.push('/');
        });
      } else {
        console.log('Not logged in.');
      }
    };
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
