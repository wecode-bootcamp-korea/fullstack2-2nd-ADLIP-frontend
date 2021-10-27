import React from 'react';
import MainCardList from './MainCardList/MainCardList';
import MainCarousel from '../../components/MainCarousel/MainCarousel';
import { MainStyle, MainFlexCenter, Categories, Banner } from './Main.style';

export default function Main() {
  return (
    <MainStyle>
      <MainFlexCenter>
        <MainCarousel className='carcel' />
        <Categories>categories</Categories>
        <MainCardList />
        <MainCardList />
        <MainCardList />
        <MainCardList />
        <Banner>베너</Banner>
      </MainFlexCenter>
    </MainStyle>
  );
}
