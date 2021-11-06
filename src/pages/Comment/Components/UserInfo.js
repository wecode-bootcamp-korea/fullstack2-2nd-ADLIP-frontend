import React from 'react';
import styled from 'styled-components';
import Rating from './Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function UserInfo({ review }) {
  return (
    <UserInfoWrapper>
      <FontAwesomeIcon icon={faUserCircle} />
      <div>
        <NickName>{review.nickname}</NickName>
        <div>
          <Rating rating={review.rating} />
          <CreatedTime>{review.createdAt}</CreatedTime>
        </div>
      </div>
    </UserInfoWrapper>
  );
}

export default UserInfo;

const UserInfoWrapper = styled.div`
  display: flex;
  margin: 32px 0;

  .fa-user-circle {
    color: lightblue;
    font-size: 52px;
    margin-right: 13px;
  }

  .fa-star {
    color: red;
  }
`;

const NickName = styled.span`
  display: block;
  margin: 5px 0 10px 0;
  font-size: 13px;
  font-weight: 600;
`;

const CreatedTime = styled.span`
  margin-left: 5px;
  font-size: 11px;
  opacity: 0.5;
`;
