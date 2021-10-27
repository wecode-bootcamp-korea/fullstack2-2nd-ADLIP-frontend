import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Card(props) {
  const { isNew, isOnly, rating, price, discount_rate } = props.data;

  return (
    <div>
      <CardWrap>
        <Img src={props.data.main_image_url} alt='img'></Img>

        <Title color='#9B9B9B' size='12px'>
          {props.data.summary}
        </Title>
        <MainTitle color={theme.blackColor} size='14px' bold='600'>
          {props.data.product_name}
        </MainTitle>
        <Title color={theme.blackColor} size='14px' bold='900'>
          {`${price * (1 - discount_rate)}`.replace(
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
            {discount_rate === null
              ? null
              : `${`${props.data.price}`.replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ','
                )}`}
          </Title>
        </Title>
        <IconWrap>
          {rating !== null ? (
            <>
              <FontAwesomeIcon icon={faStar} />
              <Rating>{props.data.rating}</Rating>
            </>
          ) : null}
          {isNew === true ? <New>NEW</New> : null}
          {isOnly === true ? <Only>ONLY</Only> : null}
        </IconWrap>
      </CardWrap>
    </div>
  );
}

export default Card;

const CardWrap = styled.div`
  display: flex;
  margin-left: 20px;
  flex-direction: column;
  justify-content: space-between;
  height: 315px;
  width: 180px;

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
  cursor: pointer;
`;

const Title = styled.span`
  margin-left: ${props => props.margin};
  font-size: ${props => props.size};
  font-weight: ${props => props.bold};
  text-decoration: ${props => props.deco};
  color: ${props => props.color};
`;

const MainTitle = styled(Title.withComponent('span'))`
  height: 2.4em;
  line-height: 1.3em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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
