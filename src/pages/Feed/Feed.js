import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FeedCard from './components/FeedCard';

function Feed() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = () => {
    fetch('/data/Feed/Feed.json')
      .then(res => res.json())
      .then(res => setFeeds(res.comment))
      .catch(console.log);
  };

  const handleLike = feed => {
    const index = feeds.indexOf(feed);
    const newFeeds = [...feeds];
    newFeeds[index].isLiked = !newFeeds[index].isLiked;
    setFeeds(newFeeds);
  };

  return (
    <FeedWrapper>
      {feeds &&
        feeds.map(feed => (
          <FeedCard key={feed.id} feed={feed} handleLike={handleLike} />
        ))}
    </FeedWrapper>
  );
}

export default Feed;

const FeedWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: auto;
`;
