import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import AddReviewModal from './AddReviewModal';

function ReviewHandler(props) {
  const { reviews, setReviews } = props;
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
  width: ${({ theme }) => theme.width};
  margin-top: 20px;
`;

const AddBtn = styled.button`
  outline: none;
`;

const StyledReviewModal = Modal.styled`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height:100vh;
  background-color: rgba(0,0,0,0.5);
`;
