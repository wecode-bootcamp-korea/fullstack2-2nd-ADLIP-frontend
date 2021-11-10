import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

function FeedCardLike(props) {
  const { feed, handleLike } = props;

  return (
    <FeedCardLikeWrapper>
      <FontAwesomeIcon
        icon={farHeart}
        onClick={() => handleLike(feed)}
        style={
          feed.isLiked ? { color: 'red' } : { color: 'black', opacity: 0.5 }
        }
      />
    </FeedCardLikeWrapper>
  );
}

export default FeedCardLike;

const FeedCardLikeWrapper = styled.div`
  .fa-heart {
    margin-right: 10px;
    font-size: 22px;
  }
`;
