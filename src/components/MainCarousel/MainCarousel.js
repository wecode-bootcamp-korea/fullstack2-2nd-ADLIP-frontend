import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import theme from '../../styles/theme';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        right: '3px',
        height: '40px',
        width: '40px',
        zIndex: '2',
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        left: '3px',
        height: '40px',
        width: '40px',
        zIndex: '2',
      }}
      onClick={onClick}
    />
  );
}

function MainCarousel(props) {
  const { carouselData, isDot } = props;

  const settings = {
    dots: isDot,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <StyledSlider {...settings} propsName={carouselData?.name}>
        {carouselData?.map(image => {
          return (
            <Link to='/category/0' key={image.id}>
              <img alt={image.name} src={image.url} />
            </Link>
          );
        })}
      </StyledSlider>
    </div>
  );
}

export default MainCarousel;

const StyledSlider = styled(Slider)`
  width: 768px;
  margin: 20px;

  .slick-prev:before,
  .slick-next:before {
    font-size: 40px;
  }
`;
