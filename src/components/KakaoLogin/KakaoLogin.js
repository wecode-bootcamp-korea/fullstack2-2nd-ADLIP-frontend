import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

function Kakao({ isHost }) {
  const { Kakao } = window;
  const history = useHistory();

  const kakaoLogin = () => {
    Kakao.Auth.login({
      scope: 'account_email, profile_image, profile_nickname',
      success: function (authObj) {
        if (isHost) {
          fetch('user/signup', {
            method: 'POST',
            headers: {
              Authorization: authObj.access_token,
            },
            body: {
              status: 'host',
              socialPlatform: 'kakao',
            },
          })
            .then(res => console.log(res))
            .then(res => {
              localStorage.setItem('token', res.access_token);
              if (res.access_token) {
                alert('안녕하세요.');
                history.push('/');
              } else {
                alert('다시 확인해주세요.');
              }
            });
        } else {
          fetch('user/signup', {
            method: 'POST',
            headers: {
              Authorization: authObj.access_token,
            },
            body: {
              status: 'user',
              socialPlatform: 'kakao',
            },
          })
            .then(res => console.log(res))
            .then(res => {
              localStorage.setItem('adlip_token', res.access_token);
              if (res.access_token) {
                alert('안녕하세요.');
                history.push('/');
              } else {
                alert('다시 확인해주세요.');
              }
            });
        }
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
