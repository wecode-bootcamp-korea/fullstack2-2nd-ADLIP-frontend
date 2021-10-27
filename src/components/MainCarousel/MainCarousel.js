import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
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

function MainCarousel() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = () => {
    fetch('/data/Main/mainCarousel.json')
      .then(res => res.json())
      .then(res => setImages(res))
      .catch(console.log);
  };

  return (
    <div>
      <StyledSlider {...settings}>
        {images.map(image => {
          return (
            <Link to='/list' key={image.id}>
              <img alt={image.name} src={image.url} />
            </Link>
          );
        })}
      </StyledSlider>
    </div>
  );
}

export default MainCarousel;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const StyledSlider = styled(Slider)`
  width: 768px;

  .slick-prev:before,
  .slick-next:before {
    font-size: 40px;
  }
`;
