import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

function LikeThumbsUp(props) {
  const { review, handleLike } = props;

  return (
    <LikeThumbsUpWrapper
      style={review.isLiked ? { color: '#3397fe' } : { color: 'black' }}
      onClick={() => handleLike(review)}
    >
      <LikeComment>도움이 됐어요</LikeComment>
      <FontAwesomeIcon icon={faThumbsUp} />
    </LikeThumbsUpWrapper>
  );
}

export default LikeThumbsUp;

const LikeThumbsUpWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-drag: none;

  .fa-thumbs-up {
    opacity: 0.5;
  }
`;

const LikeComment = styled.p`
  display: flex;
  align-items: flex-end;
  font-size: 10px;
  margin-right: 5px;
`;
