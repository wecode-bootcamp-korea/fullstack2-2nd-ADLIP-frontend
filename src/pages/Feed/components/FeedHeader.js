import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import FeedHeaderModal from './FeedHeaderModal';
import Modal from 'styled-react-modal';

function FeedHeader() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <FeedHeaderWrqpper>
      <HeaderTitle>
        애드립 피드
        <FontAwesomeIcon icon={faQuestionCircle} onClick={toggleModal} />
        <StyledModal
          isOpen={isOpen}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
        >
          <FeedHeaderModal />
        </StyledModal>
      </HeaderTitle>
    </FeedHeaderWrqpper>
  );
}

export default FeedHeader;

const FeedHeaderWrqpper = styled.div`
  display: flex;
  align-items: center;
  width: 768px;
  height: 77px;
  margin-top: 10px;
  padding: 20px;
  border-bottom: 1px solid rgba(1, 1, 1, 0.1);
`;

const HeaderTitle = styled.h1`
  font-size: 22px;
  font-weight: 700;

  .fa-question-circle {
    margin-left: 5px;
    opacity: 0.2;
  }
`;

const StyledModal = Modal.styled`
  display: flex;
  position: fixed;
  bottom: 0;
  justify-content: center;
  width: 768px;
  height: 660px;
  background-color: white;
  border-radius: 15px;
`;
