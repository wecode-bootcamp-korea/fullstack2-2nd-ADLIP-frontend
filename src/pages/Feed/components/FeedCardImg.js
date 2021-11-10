import React from 'react';
import styled from 'styled-components';

function FeedCardImg(props) {
  const { CommentImage } = props;
  const showingImg = CommentImage[0]?.commentImageUrl;

  return (
    <FeedCardImgWrapper>
      <FeedImg alt='애드립' src={showingImg} />
    </FeedCardImgWrapper>
  );
}

export default FeedCardImg;

const FeedCardImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 344px;
  height: 344px;
  overflow: hidden;
  background-color: lightgreen;
  border-radius: 25px;
`;

const FeedImg = styled.img`
  width: 180%;
  height: auto;
`;
