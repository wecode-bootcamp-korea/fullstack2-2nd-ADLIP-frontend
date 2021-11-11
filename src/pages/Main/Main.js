import React, { useEffect, useRef, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mixin from '../../styles/mixins';
import MainCarousel from '../../components/MainCarousel/MainCarousel';
import MainMiddleCategory from './MainMiddleCategory';
import CommonCardList from '../List/CommonCardList';
import axios from 'axios';
import FirstModal from './FirstModal';
import HambergerIconMenu from '../../components/HambergerIconMenu/HambergerIconMenu';
import { API_ENDPOINT } from '../../api';
import { UserContext } from '../../contexts';

export default function Main() {
  const [mainPageCategoryData, setMainPageCategoryData] = useState([]);
  const [topCarouselData, setTopCarouselData] = useState([]);
  const [middleCarouselData, setMiddleCarouselData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [isPositionMenu, setIsPositionMenu] = useState(false);
  const multyRef = {
    topRef: useRef(),
    productRef: useRef(),
    bottomRef: useRef(),
  };

  const mainCardListTitle = [
    { name: 'monthlyTheme', title: '주간 BEST🏆 ' },
    { name: 'limitPeriodDiscount', title: '인기 급상승🚀' },
    { name: 'newProduct', title: '신규상품⚡' },
    { name: 'includeRatingProduct', title: '위코드 X Adlip✌💛' },
  ];
  const { token } = useContext(UserContext);

  useEffect(() => {
    totalData();
  }, []);

  const totalData = () => {
    axios
      .all([
        axios.get('/data/Main/mainMiddleCategory.json'),
        axios.get('/data/Main/mainCarousel.json'),
        axios.get('/data/Main/mainMiddleCarousel.json'),
        axios.get(`${API_ENDPOINT}/`),
      ])
      .then(
        axios.spread((res1, res2, res3, res4) => {
          setMainPageCategoryData(res1.data.category);
          setTopCarouselData(res2.data.images);
          setMiddleCarouselData(res3.data.images);
          setProductsData(res4.data.data);
          console.log(res4.data.data);
        })
      )
      .catch(() => {
        console.log('FAIL!!');
      });
  };

  const changeStateEventShow = isFocus => {
    setIsPositionMenu(isFocus);
  };

  const changePositionScroll = whereMovePosition => {
    multyRef[whereMovePosition].current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <MainStyle>
      <MainFlexCenter>
        <div ref={multyRef?.topRef}></div>
        <MainCarousel carouselData={topCarouselData} isDot={true} />
        <MainMiddleCategory
          className='MiddleCategory'
          mainPageCategoryData={mainPageCategoryData}
        />
        <div ref={multyRef?.productRef}></div>
        <CommonCardList
          title={mainCardListTitle[0].title}
          productsData={productsData[mainCardListTitle[0].name]}
        />
        <CommonCardList
          title={mainCardListTitle[1].title}
          productsData={productsData[mainCardListTitle[1].name]}
        />
        <MainCarousel carouselData={middleCarouselData} />
        <CommonCardList
          title={mainCardListTitle[2].title}
          productsData={productsData[mainCardListTitle[2].name]}
        />
        <CommonCardList
          title={mainCardListTitle[3].title}
          productsData={productsData[mainCardListTitle[3].name]}
        />
        <BannerLinkStyle to='/hostSupport' ref={multyRef.bottomRef}>
          <BannerImgStyle />
        </BannerLinkStyle>
        {token || localStorage.getItem('token') ? null : <FirstModal />}
        <HambergerIconMenu
          {...{ isPositionMenu }}
          changeStateEventShow={changeStateEventShow}
          changePositionScroll={changePositionScroll}
        ></HambergerIconMenu>
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
