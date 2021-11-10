import React, { useState } from 'react';
import styled from 'styled-components';
import FeedCardHeader from './FeedCardHeader';
import FeedCardImg from './FeedCardImg';
import FeedCardName from './FeedCardName';
import FeedCardText from './FeedCardText';
import FeedCardLike from './FeedCardLike';

function FeedCard(props) {
  const { feed, handleLike } = props;
  const [moreText, setMoreText] = useState(false);

  const handleMoreText = () => {
    setMoreText(true);
  };

  return (
    <FeedCardWrapper>
      <FeedCardHeader nickname={feed.nickname} createdAt={feed.createdAt} />
      <FeedCardImg CommentImage={feed.CommentImage} />
      <FeedCardName productId={feed.productId} name={feed.name} />
      <FeedCardText
        commentText={feed.commentText}
        moreText={moreText}
        handleMoreText={handleMoreText}
      />
      <FeedCardLike feed={feed} handleLike={handleLike} />
    </FeedCardWrapper>
  );
}

export default FeedCard;

const FeedCardWrapper = styled.div`
  padding: 30px 20px;
  width: 382px;

  :nth-child(even) {
    border-right: 1px solid rgba(1, 1, 1, 0.1);
    border-bottom: 1px solid rgba(1, 1, 1, 0.1);
  }

  :nth-child(odd) {
    border-bottom: 1px solid rgba(1, 1, 1, 0.1);
  }
`;
