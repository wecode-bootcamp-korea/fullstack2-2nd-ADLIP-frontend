import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';
import mixin from '../../styles/mixins';

function Card(props) {
  const {
    id,
    mainCategoryId,
    subCategoryId,
    isNew,
    isOnly,
    rating,
    price,
    discountRate,
    summary,
    name,
    mainImageUrl,
  } = props.data;
  const { cardName } = props;
  const history = useHistory();
  return (
    <div>
      <CardWrap>
        <Img
          src={mainImageUrl}
          alt='img'
          onClick={() => {
            cardName ||
              history.push({
                pathname: `/products/${id}`,
                state: {
                  productId: id,
                  mainCategoryId: mainCategoryId,
                  subCategoryId: subCategoryId,
                },
              });
          }}
        ></Img>

        <Title color='#9B9B9B' size='12px'>
          {summary}
        </Title>
        <MainTitle color='black' size='14px' bold='600'>
          {name}
        </MainTitle>
        <Title color='black' size='14px' bold='900'>
          {`${price * (1 - discountRate)}`.replace(
            /\B(?=(\d{3})+(?!\d))/g,
            ','
          ) + '원'}
          <Title
            color='#BBBBBB'
            bold='500'
            size='12px'
            deco='line-through'
            margin='10px'
          >
            {discountRate &&
              `${`${price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
          </Title>
        </Title>
        <IconWrap>
          {rating !== 0 && (
            <>
              <FontAwesomeIcon icon={faStar} />
              <Rating>{rating.toFixed(2)}</Rating>
            </>
          )}
          {isNew && <New>NEW</New>}
          {isOnly && <Only>ONLY</Only>}
        </IconWrap>
      </CardWrap>
    </div>
  );
}

export default Card;

const { commonHoverStyle } = mixin;

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 180px;
  height: 315px;
  margin-left: 20px;
  ${commonHoverStyle()}

  .fa-star {
    margin-right: 2px;
    width: 13px;
    line-height: 15px;
    color: #3398ff;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 5px;
  background-size: contain;
  src: url(${props => props.src});
`;

const Title = styled.span`
  margin-left: ${props => props.margin};
  font-size: ${props => props.size};
  font-weight: ${props => props.bold};
  text-decoration: ${props => props.deco};
  color: ${props => props.color};
`;

const MainTitle = styled(Title.withComponent('span'))`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 2.4em;
  line-height: 1.3em;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const IconWrap = styled.div`
  display: flex;
  align-items: flex-end;
  line-height: 10px;
`;

const Rating = styled.div`
  margin: 0 5px 2px 2px;
  color: #bbbbbb;
  font-size: 13px;
`;

const New = styled.span`
  width: 33px;
  padding: 1px 0 0 7px;
  margin-right: 6px;
  border-radius: 4px;
  background-color: #3398ff;
  font-size: 8px;
  color: white;
  line-height: 16px;
`;

const Only = styled(New.withComponent('span'))`
  padding-left: 4px;
  background-color: #003571;
`;
