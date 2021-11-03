import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const MODALWIDTH = 600;

function AddReviewModal(props) {
  const { toggleModal, reviews, setReviews } = props;
  const [newText, setNewText] = useState('');
  const [newRating, setNewRating] = useState(0);
  const textRef = useRef();
  const ratingRef = useRef();

  const handleTextChange = () => {
    const newText = textRef.current.value;
    setNewText(newText);
  };

  const handleRatingChange = () => {
    const newRating = ratingRef.current.value;
    setNewRating(newRating);
  };

  const addNewReview = () => {
    if (newText === '') return alert('후기를 입력해주세요');
    if (newRating === 0) return alert('별점을 선택해주세요');
    setReviews([
      {
        id: reviews.length + 1,
        nickname: '김지현',
        rating: Number(newRating),
        text: newText,
        createdAt: `${new Date().toLocaleString()}`,
        images: [],
        isLike: false,
      },
      ...reviews,
    ]);
    toggleModal();
    window.scrollTo(0, 0);
  };

  return (
    <ReviewInputWrapper>
      <ReviewTextArea
        placeholder='후기를 입력해주세요.'
        ref={textRef}
        onChange={handleTextChange}
      />
      <ReviewInputBtn>
        <div>
          <RatingSelect ref={ratingRef} onChange={handleRatingChange}>
            <option value='0'>-- 별점 선택 --</option>
            <option value='1'>★️</option>
            <option value='2'>★★</option>
            <option value='3'>★★★️</option>
            <option value='4'>★★★★️</option>
            <option value='5'>★★★★★</option>
          </RatingSelect>
          <AddImages>이미지 첨부</AddImages>
        </div>
        <div>
          <button onClick={addNewReview}>작성완료</button>
          <button onClick={toggleModal}>나가기</button>
        </div>
      </ReviewInputBtn>
    </ReviewInputWrapper>
  );
}

export default AddReviewModal;

const ReviewInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${MODALWIDTH}px;
  height: 500px;
  background-color: #f4f4f4;
`;

const ReviewTextArea = styled.textarea`
  width: 90%;
  height: 80%;
  outline: none;
`;

const RatingSelect = styled.select`
  outline: none;
`;

const AddImages = styled.button`
  outline: none;
`;

const ReviewInputBtn = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${MODALWIDTH * 0.9}px;
`;
