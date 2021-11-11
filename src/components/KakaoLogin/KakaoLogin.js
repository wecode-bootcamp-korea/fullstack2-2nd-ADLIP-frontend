import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../../contexts';
import { API_ENDPOINT } from '../../api';

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
        fetch(`${API_ENDPOINT}/user/kakao`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: authObj.access_token,
          },
          body: JSON.stringify(isHost ? hostBody : userBody),
        })
          .then(res => res.json())
          .then(res => {
            const { token: adlipToken, socialPlatform: userSocialPlatform } =
              res;
            if (adlipToken) {
              setToken(adlipToken);
              localStorage.setItem('token', adlipToken);
              localStorage.setItem('socialPlatform', userSocialPlatform);
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
