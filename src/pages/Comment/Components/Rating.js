import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

function Rating({ rating }) {
  const maxRating = 5;
  const getStars = rating => {
    let redStars = [];
    let emptyStars = [];
    for (let i = 0; i < Math.round(rating); i++) {
      redStars.push(<FontAwesomeIcon key={i} icon={fasStar} />);
    }
    for (let i = Math.round(rating); i < maxRating; i++) {
      emptyStars.push(<FontAwesomeIcon key={i} icon={farStar} />);
    }
    return redStars.concat(emptyStars);
  };

  return <RatingWrapper>{getStars(rating)}</RatingWrapper>;
}

export default Rating;

const RatingWrapper = styled.div`
  display: inline;
`;
