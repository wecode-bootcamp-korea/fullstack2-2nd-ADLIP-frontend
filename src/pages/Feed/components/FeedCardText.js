import React from 'react';
import styled from 'styled-components';

function FeedCardText(props) {
  const { commentText, moreText, handleMoreText } = props;

  return (
    <FeedCardTextWrapper>
      <FeedText className={moreText ? 'open' : 'close'}>{commentText}</FeedText>
      {!moreText && commentText.length > 56 ? (
        <MoreText onClick={handleMoreText}>더보기</MoreText>
      ) : null}
    </FeedCardTextWrapper>
  );
}

export default FeedCardText;

const FeedCardTextWrapper = styled.div`
  margin-bottom: 21px;

  .close {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const FeedText = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

const MoreText = styled.p`
  margin-top: 7px;
  font-size: 16px;
  opacity: 0.3;
  cursor: pointer;
`;
