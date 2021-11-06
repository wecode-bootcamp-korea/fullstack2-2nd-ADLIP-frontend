import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import AddReviewModal from './AddReviewModal';

function ReviewHandler({ reviews, setReviews }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <HandlerWrapper>
      <AddBtnWrapper>
        <AddBtn onClick={toggleModal}>후기 남기기</AddBtn>
      </AddBtnWrapper>
      <StyledReviewModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <AddReviewModal
          toggleModal={toggleModal}
          reviews={reviews}
          setReviews={setReviews}
        />
      </StyledReviewModal>
    </HandlerWrapper>
  );
}

export default ReviewHandler;

const HandlerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const AddBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  width: ${({ theme }) => theme.width};
`;

const AddBtn = styled.span`
  font-size: 13px;
  cursor: pointer;

  &:hover {
    color: #3397fe;
  }
`;

const StyledReviewModal = Modal.styled`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height:100vh;
  background-color: rgba(0,0,0,0.5);
`;
