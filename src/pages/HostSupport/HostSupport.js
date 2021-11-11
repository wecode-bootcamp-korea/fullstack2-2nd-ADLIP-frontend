import React, { useState } from 'react';
import styled from 'styled-components';
import mixin from '../../styles/mixins';
import { API_ENDPOINT } from '../../api';

export default function HostSupport() {
  const [support] = useState({
    email: '',
  });

  const sendEmail = e => {
    e.preventDefault();
    const data = {
      email: support.email,
    };

    fetch(`${API_ENDPOINT}/sendEmail`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'CREATED') {
          alert('지원을 성공했습니다.');
        } else {
          alert(res.message);
        }
      });
  };

  return (
    <HostStyle>
      <HostFlexCenter>
        <PageTitleStyle>호스트 지원</PageTitleStyle>
        <HostSubmitData>
          <InputValue placeholder='이메일을 입력해주세요' />
          <EmailSubmit onClick={sendEmail}>전송</EmailSubmit>
        </HostSubmitData>
      </HostFlexCenter>
    </HostStyle>
  );
}

const {
  firstTopTagStyle,
  flexStyleGroup,
  fontStyleGroup,
  marginStyleGroup,
  colorStyleGroup,
  widthStyleGroup,
  commonHoverStyle,
} = mixin;

const HostStyle = styled.div`
  ${firstTopTagStyle()}
`;

const HostFlexCenter = styled.div`
  ${flexStyleGroup('', '', 'column')}
  width: ${widthStyleGroup.secondTopWidth};
`;

const PageTitleStyle = styled.p`
  ${marginStyleGroup('50px 0 50px 0')}
  ${fontStyleGroup('20px', '', 'bold')}
`;

const HostSubmitData = styled.form`
  ${flexStyleGroup('', '', 'column')}
`;

const InputValue = styled.input.attrs({
  type: 'text',
})`
  width: 360px;
  height: 40px;
  margin: 0 0 30px 0;
  background-color: ${colorStyleGroup.headerBgColor};
  border: 1px #eeeeee solid;
  border-radius: 10px;
  padding: 0 0 0 10px;
`;

const EmailSubmit = styled.button`
  width: 360px;
  height: 50px;
  background-color: ${colorStyleGroup.headerBgColor};
  border: 1px #eeeeee solid;
  border-radius: 10px;
  margin: 0 0 10px 0;
  ${commonHoverStyle()};
`;
