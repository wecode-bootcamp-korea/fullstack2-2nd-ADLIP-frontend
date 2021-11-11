/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FeedCard from './components/FeedCard';
import FeedHeader from './components/FeedHeader';
import Loader from './components/Loader';

function Feed() {
  const [feeds, setFeeds] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    const offset = feeds.length;
    await fetch(`/data/Feed/Feed${offset}.json`)
      .then(res => res.json())
      .then(res => {
        const data = res.comment;
        const newData = [...feeds].concat(data);
        setFeeds(newData);
      })
      .catch(console.log);

    setIsLoading(false);
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
      getImages();
    }
  };

  return (
    <FeedWrapper>
      <FeedHeader />
      {feeds &&
        feeds.map(feed => (
          <FeedCard key={feed.id} feed={feed} handleLike={handleLike} />
        ))}
      {isLoading && <Loader />}
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
