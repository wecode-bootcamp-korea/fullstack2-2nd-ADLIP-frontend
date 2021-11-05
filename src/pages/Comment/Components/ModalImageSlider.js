import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const MODALWIDTH = 600;

function ModalImageSlider(props) {
  const { images, toggleModal } = props;
  const [position, setPosition] = useState(0);
  const slideLength = images.length;

  const changeImageToLeft = position => {
    let newPosition = position - 1;
    let maxPosition = slideLength - 1;
    if (newPosition < 0) newPosition = maxPosition;
    setPosition(newPosition);
  };

  const changeImageToRight = position => {
    let newPosition = position + 1;
    let maxPosition = slideLength - 1;
    if (maxPosition < newPosition) newPosition = 0;
    setPosition(newPosition);
  };

  return (
    <SlideBox>
      <BtnPrev onClick={() => changeImageToLeft(position)}>
        <FontAwesomeIcon icon={faChevronLeft} size='2x' />
      </BtnPrev>
      <BtnNext onClick={() => changeImageToRight(position)}>
        <FontAwesomeIcon icon={faChevronRight} size='2x' />
      </BtnNext>
      <SlideList
        style={{
          transform: `translateX(
          ${position * -MODALWIDTH}px`,
        }}
      >
        {images &&
          images.map(image => (
            <ImageContainer key={image.id}>
              <SlideImage alt='애드립' src={image.commentImageUrl} />
            </ImageContainer>
          ))}
      </SlideList>
      <BtnClose onClick={toggleModal}>
        <FontAwesomeIcon icon={faTimesCircle} size='2x' />
      </BtnClose>
      <PagingNumber>
        {position + 1}/{slideLength}
      </PagingNumber>
    </SlideBox>
  );
}

export default ModalImageSlider;

const SlideBox = styled.div`
  position: relative;
  display: flex;
  width: ${MODALWIDTH}px;
  height: 100vh;
  overflow-x: hidden;
`;

const BtnPrev = styled.button`
  position: absolute;
  top: 49%;
  left: 12px;
  background-color: transparent;
  border: none;
  font-size: 13px;
  font-weight: lighter;
  color: white;
  z-index: 2;
  cursor: pointer;
`;

const BtnNext = styled.button`
  position: absolute;
  top: 49%;
  right: 12px;
  background-color: transparent;
  border: none;
  font-size: 13px;
  font-weight: lighter;
  color: white;
  z-index: 2;
  cursor: pointer;
`;

const BtnClose = styled.button`
  position: absolute;
  top: 8%;
  left: 10px;
  background-color: transparent;
  border: none;
  color: white;
  z-index: 2;
  cursor: pointer;
`;

const SlideList = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${MODALWIDTH}px;
  overflow-y: hidden;
`;

const SlideImage = styled.img`
  width: ${MODALWIDTH}px;
  max-height: auto;
`;

const PagingNumber = styled.span`
  position: absolute;
  top: 8%;
  left: 48%;
  color: white;
`;
