import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { API } from '../../API/api';

const SLIDERWIDTH = 732;

function DetailCarousel(props) {
  const { pathParameterId } = props;
  const [reviews, setReviews] = useState([]);
  const [position, setPosition] = useState(0);
  const dataForSlide = reviews?.filter(
    review => review.CommentImage.length !== 0
  );
  const slideLength = Math.ceil(dataForSlide?.length / 3);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = () => {
    fetch('/data/Comment/tempComments.json')
      .then(res => res.json())
      .then(res => setReviews(res.comment))
      .catch(console.log);
  };

  const changeImageToLeft = position => {
    let newPosition = position - 1;
    const maxPosition = slideLength - 1;
    if (newPosition < 0) newPosition = maxPosition;
    setPosition(newPosition);
  };

  const changeImageToRight = position => {
    let newPosition = position + 1;
    const maxPosition = slideLength - 1;
    if (maxPosition < newPosition) newPosition = 0;
    setPosition(newPosition);
  };

  const handleLike = review => {
    const index = reviews.indexOf(review);
    const newReviews = [...reviews];
    newReviews[index].isLiked = !newReviews[index].isLiked;
    setReviews(newReviews);
  };

  return (
    <SliderWrapper>
      <BtnPrevWrapper>
        <BtnPrev onClick={() => changeImageToLeft(position)}>
          <FontAwesomeIcon icon={faChevronLeft} size='2x' />
        </BtnPrev>
      </BtnPrevWrapper>
      <BtnNextWrapper>
        <BtnNext onClick={() => changeImageToRight(position)}>
          <FontAwesomeIcon icon={faChevronRight} size='2x' />
        </BtnNext>
      </BtnNextWrapper>
      <Slider
        style={{
          transform: `translateX(
                ${position * -SLIDERWIDTH}px`,
        }}
      >
        {dataForSlide.map(review => {
          const { id, nickname, commentText, CommentImage } = review;
          const showingImg = CommentImage[0];

          return (
            <ReviewWrapper key={id}>
              <Link to={`/products/${pathParameterId}/comments?page=1`}>
                <ReviewImgWrapper>
                  <ReviewImg alt='애드립' src={showingImg?.commentImageUrl} />
                </ReviewImgWrapper>
              </Link>
              <UserProfile>
                <FontAwesomeIcon icon={faUserCircle} />
                <NickName>{nickname}</NickName>
              </UserProfile>
              <ReviewText>{commentText}</ReviewText>
              <LikeBtn
                onClick={() => handleLike(review)}
                style={
                  review.isLiked
                    ? { backgroundColor: 'red' }
                    : { backgroundColor: 'white' }
                }
              >
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  style={review.isLiked ? { color: 'white' } : { color: 'red' }}
                />
              </LikeBtn>
            </ReviewWrapper>
          );
        })}
      </Slider>
      <ReviewNumber>
        <StyledLink to={`/products/${pathParameterId}/comments?page=1`}>
          <MoreReview>32개 후기 더 보기</MoreReview>
          <FontAwesomeIcon icon={faChevronRight} />
        </StyledLink>
      </ReviewNumber>
    </SliderWrapper>
  );
}

export default DetailCarousel;

const SliderWrapper = styled.div`
  position: relative;
  width: ${({ theme }) => theme.width};
  background-color: #f4faff;
  overflow: hidden;
`;

const Slider = styled.div`
  display: flex;
  padding: 26px 0 0 18px;
  width: ${({ theme }) => theme.width};
  height: 525px;
  transition: all 500ms ease 0s;

  &:first-child {
    padding-left: 500px;
    background-color: yellow;
  }
`;

const ReviewWrapper = styled.div`
  position: relative;
  width: 244px;
  height: 468px;
  padding: 0 6px;
`;

const ReviewImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 232px;
  height: 232px;
  overflow: hidden;
`;

const ReviewImg = styled.img`
  width: 160%;
  max-height: auto;
  border-radius: 30px;
`;

const BtnPrevWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20%;
  left: 7px;
  height: 42px;
  width: 42px;
  z-index: 2;
  cursor: pointer;
  background-color: white;
  border-radius: 50%;
`;

const BtnPrev = styled.button`
  border: none;
  font-size: 8px;
  background-color: transparent;
  cursor: pointer;
`;

const BtnNextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20%;
  right: 4px;
  height: 42px;
  width: 42px;
  z-index: 2;
  cursor: pointer;
  background-color: white;
  border-radius: 50%;
`;

const BtnNext = styled.button`
  border: none;
  font-size: 8px;
  font-weight: lighter;
  background-color: transparent;
  cursor: pointer;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  margin: 18px 0;

  .fa-user-circle {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    color: #c2e0ff;
  }
`;

const NickName = styled.span`
  font-size: 14px;
  font-weight: 700;
`;

const ReviewText = styled.p`
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.5em;
`;

const LikeBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 15px;
  width: 61px;
  height: 36px;
  border: 1px solid rgba(1, 1, 1, 0.3);
  border-radius: 18px;

  .fa-thumbs-up {
    color: red;
  }
`;

const ReviewNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 57px;
  font-size: 16px;
  border-top: 1px solid rgba(20, 121, 240, 0.1);

  .fa-chevron-right {
    margin-left: 5px;
    font-size: 10px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const MoreReview = styled.span`
  font-weight: bold;
  color: #1479f0;
`;
