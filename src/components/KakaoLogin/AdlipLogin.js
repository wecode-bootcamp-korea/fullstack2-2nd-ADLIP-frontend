import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

function AdlipLogIn() {
  const history = useHistory();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const validEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  const isValidEmail = user.email.match(validEmail) || user.email === '';

  function login(e) {
    e.preventDefault();
    fetch('user/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        localStorage.setItem('accessToken', res.access_token);
        if (res.access_token) {
          alert('안녕하세요.');
          history.push('/');
        } else {
          alert('다시 확인해주세요.');
        }
      });
  }
  return (
    <AdlipLogInWrapper>
      <IdInput
        id='email'
        name='email'
        type='text'
        placeholder='아이디 (이메일)'
        onChange={handleChange}
        valid={isValidEmail}
      />
      <IdCondition valid={isValidEmail} className='toggleIdCondition'>
        올바른 이메일 형식이 아닙니다.
      </IdCondition>
      <PasswordInput
        id='password'
        name='password'
        type='password'
        placeholder='비밀번호'
        onChange={handleChange}
      />
      <LoginBtn
        onClick={login}
        disabled={!(isValidEmail && user.password.length >= 10)}
      >
        로그인
      </LoginBtn>
    </AdlipLogInWrapper>
  );
}

export default AdlipLogIn;

const AdlipLogInWrapper = styled.div``;

const IdInput = styled.input`
  width: 360px;
  height: 50px;
  margin: 5px 0;
  background-color: #fafafa;
  padding: 0 0 0 10px;
  border: ${props =>
    props.valid ? '1px solid #fafafa' : '1px solid rgb(222, 28, 34)'};
`;

const IdCondition = styled.p`
  display: none;
  display: ${props => (props.valid ? 'none' : 'block')};
  color: rgb(222, 28, 34);
  font-size: 7px;
  text-align: left;
`;

const PasswordInput = styled.input`
  width: 360px;
  height: 50px;
  margin: 5px 0;
  background-color: #fafafa;
  border: 1px solid #fafafa;
  padding: 0 0 0 10px;
`;

const LoginBtn = styled.button`
  width: 360px;
  height: 50px;
  margin: 5px 0;
  border: none;
  border-radius: 12px;
  color: rgb(244, 244, 244);
  background-color: #0175ef;
  font-size: 17px;

  :disabled {
    background-color: #b5c5d6;
  }

  :hover {
    filter: brightness(70%);
  }
`;
