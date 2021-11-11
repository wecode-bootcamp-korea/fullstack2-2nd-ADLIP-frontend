import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function FeedCardName({ productId, name }) {
  return (
    <FeedCardNameWrapper>
      <FeedName to={`/products/${productId}`}>
        <FeedNameTextContainer>
          <FontAwesomeIcon icon={faFlag} />
          <FeedNameText>{name}</FeedNameText>
        </FeedNameTextContainer>
        <FontAwesomeIcon icon={faChevronRight} />
      </FeedName>
    </FeedCardNameWrapper>
  );
}

export default FeedCardName;

const FeedCardNameWrapper = styled.div`
  width: 344px;
  margin: 10px 0 22px 0;
  border-radius: 20px;
  border: 1px solid rgba(1, 1, 1, 0.1);
  cursor: pointer;
`;

const FeedName = styled(Link)`
  display: flex;
  justify-content: space-between;
  padding: 15px 15px;
  font-size: 13px;
  color: #0573e6;
  text-decoration: none;

  .fa-flag {
    margin-right: 10px;
  }
`;

const FeedNameTextContainer = styled.div`
  display: flex;
`;

const FeedNameText = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  padding-top: 1.5px;
`;
