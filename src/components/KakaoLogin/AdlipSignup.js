import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

function AdlipSignUp({ isHost }) {
  const history = useHistory();
  const [user, setUser] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    nickname: '',
  });

  const hostBody = {
    email: user.email,
    password: user.password,
    nickname: user.nickname,
    status: 'host',
    socialPlatform: 'local',
  };

  const userBody = {
    email: user.email,
    password: user.password,
    nickname: user.nickname,
    status: 'user',
    socialPlatform: 'local',
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const validation = {
    email:
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
    password:
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#\$%\^&\*]).{10,}$/,
  };

  const isValidEmail = user.email.match(validation.email) || user.email === '';
  const isValidPw =
    user.password.match(validation.password) || user.password === '';
  const isValidPwCheck =
    user.passwordCheck === user.password || user.passwordCheck === '';
  const isValidNickname = user.nickname.length <= 20 || user.nickname === '';

  function signup(e) {
    e.preventDefault();
    fetch('user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(isHost ? hostBody : userBody),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'CREATED') {
          alert('회원가입을 성공했습니다.');
          history.push('/login');
        } else {
          alert(res.message);
        }
      });
  }

  return (
    <form>
      <IdInput
        id='email'
        name='email'
        type='text'
        placeholder='아이디 (이메일)'
        onChange={handleChange}
        valid={isValidEmail}
      />
      {!isValidEmail && (
        <IdCondition>올바른 이메일 형식이 아닙니다.</IdCondition>
      )}
      <PasswordInput
        id='password'
        name='password'
        type='password'
        placeholder='비밀번호'
        onChange={handleChange}
        valid={isValidPw}
      />
      <PasswordCondition valid={isValidPw}>
        최소 하나의 대/소문자, 특수문자, 숫자를 포함하여 10자 이상
      </PasswordCondition>
      <PasswordCheckInput
        id='passwordCheck'
        name='passwordCheck'
        type='password'
        placeholder='비밀번호 한 번 더'
        onChange={handleChange}
        valid={isValidPwCheck}
      />
      {!isValidPwCheck && (
        <PwCheckCondition>
          먼저 입력하신 비밀번호와 일치하지 않습니다.
        </PwCheckCondition>
      )}
      <NicknameInput
        id='nickname'
        name='nickname'
        type='text'
        placeholder='닉네임'
        onChange={handleChange}
        valid={isValidNickname}
      />
      {!isValidNickname && (
        <NicknameCondition>
          최소 1자 / 최대 20자까지 가능합니다.
        </NicknameCondition>
      )}
      <SignUpBtn
        onClick={signup}
        disabled={
          !(isValidEmail && isValidPw && isValidPwCheck && isValidNickname)
        }
      >
        회원가입
      </SignUpBtn>
    </form>
  );
}

export default AdlipSignUp;

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
  display: block;
  color: rgb(222, 28, 34);
  font-size: 7px;
  text-align: left;
`;

const PasswordInput = styled.input`
  width: 360px;
  height: 50px;
  margin: 5px 0;
  background-color: #fafafa;
  padding: 0 0 0 10px;
  border: ${props =>
    props.valid ? '1px solid #fafafa' : '1px solid rgb(222, 28, 34)'};
`;

const PasswordCondition = styled.p`
  color: ${props => (props.valid ? '' : 'rgb(222, 28, 34)')};
  font-size: 7px;
  text-align: left;
`;

const PasswordCheckInput = styled.input`
  width: 360px;
  height: 50px;
  margin: 5px 0;
  background-color: #fafafa;
  padding: 0 0 0 10px;
  border: ${props =>
    props.valid ? '1px solid #fafafa' : '1px solid rgb(222, 28, 34)'};
`;

const PwCheckCondition = styled.p`
  display: block;
  color: rgb(222, 28, 34);
  font-size: 7px;
  text-align: left;
`;

const NicknameInput = styled.input`
  width: 360px;
  height: 50px;
  margin: 5px 0;
  background-color: #fafafa;
  padding: 0 0 0 10px;
  border: ${props =>
    props.valid ? '1px solid #fafafa' : '1px solid rgb(222, 28, 34)'};
`;

const NicknameCondition = styled.p`
  display: none;
  display: ${props => (props.valid ? 'none' : 'block')};
  color: rgb(222, 28, 34);
  font-size: 7px;
  text-align: left;
`;

const SignUpBtn = styled.button`
  width: 360px;
  height: 50px;
  margin: 5px 0;
  border: none;
  border-radius: 12px;
  background-color: #0175ef;
  color: rgb(244, 244, 244);
  font-size: 17px;

  :disabled {
    background-color: #b5c5d6;
  }

  :hover {
    filter: brightness(70%);
  }
`;
