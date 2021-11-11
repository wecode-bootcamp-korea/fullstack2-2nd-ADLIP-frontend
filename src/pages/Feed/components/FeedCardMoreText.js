import React from 'react';
import styled from 'styled-components';

function FeedCardMoreText({ commentText }) {
  return (
    <FeedCardMoreTextWrapper>
      <FeedText>{commentText}</FeedText>
    </FeedCardMoreTextWrapper>
  );
}

const FeedCardMoreTextWrapper = styled.div`
  display: inline;
`;

const FeedText = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

export default FeedCardMoreText;
