import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Modal from 'styled-react-modal';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FirstModal() {
  const [isOpen, setIsOpen] = useState(true);
  const history = useHistory();

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        onClick={() => {
          history.push({
            pathname: '/login',
          });
        }}
      >
        <FontAwesomeIcon
          className='cancelMainModal'
          icon={faTimesCircle}
          onClick={e => {
            e.stopPropagation();
            toggleModal();
          }}
        />
      </StyledModal>
    </div>
  );
}

const StyledModal = Modal.styled`
  display:flex;
  justify-content: flex-end;
  width: 390px;
  height:500px;
  background-image : url('https://ifh.cc/g/w9Iana.jpg');
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
  & .cancelMainModal{
    margin: 15px 15px 0 0;
    font-size: 30px;
    color: white;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
`;
