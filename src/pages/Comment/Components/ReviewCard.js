import React from 'react';
import styled from 'styled-components';
import UserInfo from './UserInfo';
import DeleteReview from './DeleteReview';
import LikeThumbsUp from './LikeThumbsUp';
import ReviewImages from './ReviewImages';

function ReviewCard(props) {
  const { reviews, page, handleLike, deleteReview } = props;
  const data = reviews.slice((page - 1) * 10, page * 10);

  return (
    <CardWrapper>
      {data.map(review => {
        return (
          <ReviewWrapper key={review.id}>
            <UserInfo review={review} />
            <ReviewText>{review.text}</ReviewText>
            <div>
              {review.nickname === '김태규' && (
                <DeleteReview review={review} deleteReview={deleteReview} />
              )}
              <LikeThumbsUp review={review} handleLike={handleLike} />
            </div>
            <ReviewImages images={review.images} />
          </ReviewWrapper>
        );
      })}
    </CardWrapper>
  );
}

export default ReviewCard;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReviewWrapper = styled.div`
  width: ${({ theme }) => theme.width};
  border-bottom: 1px solid rgba(1, 1, 1, 0.1);
  padding-bottom: 32px;
`;

const ReviewText = styled.p`
  margin-bottom: 40px;
  font-size: 13px;
  line-height: 22px;
  white-space: pre-wrap;
`;
