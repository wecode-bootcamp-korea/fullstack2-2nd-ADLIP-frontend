import React from 'react';
import styled from 'styled-components';
import FeedCardMoreText from './FeedCardMoreText';
import FeedCardLessText from './FeedCardLessText';

function FeedCardText({ commentText, moreText, handleMoreText }) {
  return (
    <FeedCardTextWrapper>
      {!moreText && commentText.length > 58 ? (
        <FeedCardLessText
          commentText={commentText}
          handleMoreText={handleMoreText}
        />
      ) : (
        <FeedCardMoreText commentText={commentText} />
      )}
    </FeedCardTextWrapper>
  );
}

export default FeedCardText;

const FeedCardTextWrapper = styled.div`
  margin-bottom: 21px;
`;
