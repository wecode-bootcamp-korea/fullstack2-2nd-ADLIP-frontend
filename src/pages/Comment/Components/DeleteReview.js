import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

function DeleteReview(props) {
  const { review, deleteReview } = props;

  return (
    <DeleteBtnWrapper>
      <DeleteBtn onClick={() => deleteReview(review.id)}>
        후기 삭제 <FontAwesomeIcon icon={faTrashAlt} />
      </DeleteBtn>
    </DeleteBtnWrapper>
  );
}

export default DeleteReview;

const DeleteBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-drag: none;

  .fa-trash-alt {
    margin-left: 5px;
  }
`;

const DeleteBtn = styled.p`
  display: flex;
  align-items: flex-end;
  font-size: 10px;
  margin-right: 5px;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;
