import React from 'react';
import styled from 'styled-components';

function FeedCardLessText({ commentText, handleMoreText }) {
  return (
    <FeedCardLessTextWrapper>
      <FeedText>{commentText}</FeedText>
      <MoreText onClick={handleMoreText}>더보기</MoreText>
    </FeedCardLessTextWrapper>
  );
}

const FeedCardLessTextWrapper = styled.div`
  display: inline;
`;

const FeedText = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  line-height: 24px;
`;

const MoreText = styled.p`
  margin-top: 7px;
  font-size: 16px;
  opacity: 0.3;
  cursor: pointer;
`;

export default FeedCardLessText;
