import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function FeedCardHeader(props) {
  const { nickname, createdAt } = props;

  return (
    <FeedCardHeaderWrapper>
      <FontAwesomeIcon icon={faUserCircle} />
      <UserInfo>
        <NickName>{nickname}</NickName>
        <Date>{createdAt}</Date>
      </UserInfo>
    </FeedCardHeaderWrapper>
  );
}

export default FeedCardHeader;

const FeedCardHeaderWrapper = styled.div`
  display: flex;
  height: 36px;
  margin-bottom: 15px;
  line-height: 17px;

  .fa-user-circle {
    color: lightblue;
    font-size: 36px;
    margin-right: 10px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NickName = styled.span`
  margin-top: 5px;
  font-size: 14px;
`;

const Date = styled.span`
  font-size: 12px;
  opacity: 0.5;
`;
