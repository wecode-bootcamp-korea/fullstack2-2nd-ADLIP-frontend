import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

function UserInfo(props) {
  const { review } = props;
  const maxRating = 5;

  const getRedStars = review => {
    let redStars = [];
    for (let i = 0; i < review.rating; i++) {
      redStars.push(<FontAwesomeIcon key={i} icon={fasStar} />);
    }
    return redStars;
  };

  const getEmptyStars = review => {
    let emptyStars = [];
    for (let i = 0; i < maxRating - review.rating; i++) {
      emptyStars.push(<FontAwesomeIcon key={i} icon={farStar} />);
    }
    return emptyStars;
  };

  return (
    <UserInfoWrapper>
      <FontAwesomeIcon icon={faUserCircle} />
      <div>
        <NickName>{review.nickname}</NickName>
        <div>
          {getRedStars(review)}
          {getEmptyStars(review)}
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
