/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FeedCard from './components/FeedCard';
import FeedHeader from './components/FeedHeader';

function Feed() {
  const [feeds, setFeeds] = useState([]);
  const [groupNumOfFeeds, setGroupNumOfFeeds] = useState(1);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  useEffect(() => {
    getImages();
  }, [groupNumOfFeeds]);

  const getImages = () => {
    fetch(`/data/Feed/Feed${groupNumOfFeeds}.json`)
      .then(res => res.json())
      .then(res => {
        const data = res.comment;
        const newData = [...feeds].concat(data);
        setFeeds(newData);
      })
      .catch(console.log);
  };

  const handleLike = feed => {
    const index = feeds.indexOf(feed);
    const newFeeds = [...feeds];
    newFeeds[index].isLiked = !newFeeds[index].isLiked;
    setFeeds(newFeeds);
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setGroupNumOfFeeds(groupNumOfFeeds + 1);
    }
  };

  return (
    <FeedWrapper>
      <FeedHeader />
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
