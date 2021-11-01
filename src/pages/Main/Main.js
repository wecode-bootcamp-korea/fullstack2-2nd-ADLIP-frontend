import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mixin from '../../styles/mixins';
import MainCarousel from '../../components/MainCarousel/MainCarousel';
import MainMiddleCategory from './MainMiddleCategory';
import FancyModalButton from '../FancyModalButton/FancyModalButton';
import CommonCardList from '../List/CommonCardList';
// import axios from 'axios';

export default function Main() {
  const [mainPageCategoryData, setMainPageCategoryData] = useState([]);
  const [topCarouselData, setTopCarouselData] = useState([]);
  const [middleCarouselData, setMiddleCarouselData] = useState([]);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    getCategoryData();
    getTopCarouselData();
    getMiddleCarouselData();
    getProductsData();

    // totalData();
  }, []);

  //데이터가 안받아짐 차후에 원인찾고 수정예정
  // const totalData = () => {
  //   axios
  //     .all([
  //       axios.get('/data/Main/mainMiddleCategory.json'),
  //       axios.get('/data/Main/mainCarousel.json'),
  //       axios.get('/data/Main/mainMiddleCarousel.json'),
  //       axios.get('/data/List/mainProduct.json'),
  //     ])
  //     .then(
  //       axios.spread((res1, res2, res3, res4) => {
  //         setMainPageCategoryData(res1.data);
  //         setTopCarouselData([...res2.data]);
  //         setMiddleCarouselData([...res3.data]);
  //         setProductsData([...res4.data]);
  //       })
  //     )
  //     .catch(() => {
  //       console.log('FAIL!!');
  //     });
  // };

  const getCategoryData = () => {
    fetch('/data/Main/mainMiddleCategory.json')
      .then(res => res.json())
      .then(data => setMainPageCategoryData(data.category))
      .catch(console.log);
  };

  const getTopCarouselData = () => {
    fetch('/data/Main/mainCarousel.json')
      .then(res => res.json())
      .then(data => setTopCarouselData(data.images))
      .catch(console.log);
  };

  const getMiddleCarouselData = () => {
    fetch('/data/Main/mainMiddleCarousel.json')
      .then(res => res.json())
      .then(data => setMiddleCarouselData(data.images))
      .catch(console.log);
  };

  const getProductsData = () => {
    fetch('/data/List/mainProduct.json')
      .then(res => res.json())
      .then(data => setProductsData(data.products))
      .catch(console.log);
  };

  return (
    <MainStyle>
      <MainFlexCenter>
        <MainCarousel carouselData={topCarouselData} isDot={true} />
        <MainMiddleCategory
          className='MiddleCategory'
          mainPageCategoryData={mainPageCategoryData}
        />
        <CommonCardList productsData={productsData[0]} />
        <CommonCardList productsData={productsData[1]} />
        <MainCarousel carouselData={middleCarouselData} />
        <CommonCardList productsData={productsData[2]} />
        <CommonCardList productsData={productsData[3]} />
        <BannerLinkStyle to='/'>
          <BannerImgStyle />
        </BannerLinkStyle>
        <FancyModalButton />
      </MainFlexCenter>
    </MainStyle>
  );
}

const {
  flexStyleGroup,
  widthHeightStyleGroup,
  marginStyleGroup,
  firstTopTagStyle,
} = mixin;

const MainStyle = styled.div`
  ${firstTopTagStyle()}
`;

const MainFlexCenter = styled.div`
  ${flexStyleGroup('', 'center', 'column')}
`;

const BannerLinkStyle = styled(Link)`
  ${widthHeightStyleGroup('768px', '100px')}
  ${marginStyleGroup('0 20px 0 0')}
`;

const BannerImgStyle = styled.img.attrs({
  src: 'https://ifh.cc/g/2yGN7K.png',
  alt: '호스트지원',
})``;
