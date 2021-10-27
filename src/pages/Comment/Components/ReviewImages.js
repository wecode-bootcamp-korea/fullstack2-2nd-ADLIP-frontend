import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import ModalImageSlider from './ModalImageSlider';

function ReviewImages(props) {
  const { images } = props;
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <ReviewImageWrapper>
      {images &&
        images.map(image => {
          return (
            <ImageWrapper key={image.id}>
              <ReviewImage
                alt={image.name}
                src={image.img}
                onClick={toggleModal}
              />
            </ImageWrapper>
          );
        })}
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <ModalImageSlider images={images} toggleModal={toggleModal} />
      </StyledModal>
    </ReviewImageWrapper>
  );
}

export default ReviewImages;

const ReviewImageWrapper = styled.div`
  display: flex;
  cursor: pointer;
  overflow-x: hidden;
`;

const ImageWrapper = styled.div`
  margin: 0px 12px 0px 0px;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 5px;
`;

const ReviewImage = styled.img`
  width: 120%;
  height: 120%;
  object-fit: cover;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
`;

const StyledModal = Modal.styled`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: rgba(0,0,0,0.8);
`;
