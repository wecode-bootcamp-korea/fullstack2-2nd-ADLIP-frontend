import React, { useState, useEffect, useRef } from 'react';
import { ShareIcon } from './components/ShareIcon';
import { BookmarkIcon } from './components/BookmarkIcon';
import { ToTopIcon } from './components/ToTopIcon';
import styled from 'styled-components';
import { useParams } from 'react-router';

export default function Detail() {
  const [detailData, setDetailData] = useState([]);
  const [buttonToTop, setButtonToTop] = useState(false);
  const onButtonToTopClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  let { id } = useParams();
  let idx = id - 1;

  useEffect(() => {
    const url = 'http://localhost:3000/data/Detail/detailData.json';

    const getDetailData = async () => {
      try {
        await fetch(url)
          .then(res => res.json())
          .then(res => {
            setDetailData(res.detail);
          });
      } catch (error) {
        console.log('error', error);
      }
    };

    getDetailData();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', showButtonToTop);
  });

  const showButtonToTop = () => {
    if (window.scrollY >= 80) {
      setButtonToTop(true);
    } else {
      setButtonToTop(false);
    }
  };

  return (
    <DetailOuterMax>
      {detailData[idx] && (
        <DetailContainer>
          <HeadSection>
            <ImageFrame>
              <ProductImage img={detailData[idx].main_image_url} />
            </ImageFrame>
            <BasicInfo>
              <BasicProductInfo>
                <TitleContainer>
                  <Title>{detailData[idx].name}</Title>
                  <ShareIcon src={ShareIcon} />
                </TitleContainer>
                <PriceContainer>
                  {detailData[idx].discount_rate ? (
                    <>
                      <DiscountRate>
                        {detailData[idx].discount_rate}
                      </DiscountRate>
                      <FinalPrice>{detailData[idx].discount_price}</FinalPrice>
                      <OriginalPrice>
                        {detailData[idx].original_price}
                      </OriginalPrice>
                    </>
                  ) : (
                    <>
                      <FinalPrice>{detailData[idx].original_price}</FinalPrice>
                    </>
                  )}
                </PriceContainer>
                <DueDate>{detailData[idx].expired_day}</DueDate>
              </BasicProductInfo>
              <BasicHostInfo>
                <HostImageFrame>
                  <HostImage src={detailData[idx].profile_image_url} />
                </HostImageFrame>
                <HostInfoContainer>
                  <HostName>{detailData[idx].nickname} > </HostName>
                  <HostActivity>
                    프립 {detailData[idx].host_frip} | 후기{' '}
                    {detailData[idx].host_reviewed} | 저장{' '}
                    {detailData[idx].host_bookmarked}
                  </HostActivity>
                </HostInfoContainer>
              </BasicHostInfo>
            </BasicInfo>
          </HeadSection>
          <DetailSection>
            <div className='Description__Wrapper'>
              <div className='product-description'>
                <div
                  className='ReviewContainer'
                  style={{
                    height: '756px',
                    width: '768px',
                    border: '0.5px solid red',
                    margin: '40px auto',
                  }}
                >
                  Review will be added here
                </div>
                <HeaderTitle>프립 소개</HeaderTitle>
                <DetailSectionImageWrapper>
                  <img
                    src='https://res.cloudinary.com/frientrip/image/upload/c_limit,dpr_3.0,f_auto,q_auto:best,w_500/1628829649998_fupslp.png'
                    alt='구매 안내 사항'
                  />
                </DetailSectionImageWrapper>
                <DetailSectionImageWrapper>
                  <img
                    src={detailData[idx].detailSectionImage}
                    alt='상품 안내 사항'
                  />
                </DetailSectionImageWrapper>
                <DetailSectionImageWrapper>
                  <img
                    src='https://res.cloudinary.com/frientrip/image/upload/c_limit,dpr_3.0,f_auto,q_auto:best,w_500/bottom-corona-notice_u2r6sx.jpg'
                    alt='상품 상세'
                  />
                </DetailSectionImageWrapper>
              </div>
            </div>
          </DetailSection>

          <FloatingBarBackground>
            <FloatingBarWrapper>
              <BookmarkWrapper>
                <BookmarkIcon />
                {detailData[idx].product_bookmarked}
              </BookmarkWrapper>
              <BlueButton>참여하기</BlueButton>
              {buttonToTop && (
                <ToTopButton onClick={onButtonToTopClick}>
                  <ToTopIcon src={ToTopIcon} />
                </ToTopButton>
              )}
            </FloatingBarWrapper>
          </FloatingBarBackground>
        </DetailContainer>
      )}
    </DetailOuterMax>
  );
}

export const DetailOuterMax = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 24px;
`;

export const DetailContainer = styled.div`
  width: 768px;
`;

export const HeadSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 750px;
  padding: 0 0 24px;
`;

export const ImageFrame = styled.div`
  width: 375px;
  height: 375px;
  border-radius: 10px;
  background-size: 375px;
  overflow: hidden;
`;

export const ProductImage = styled.img.attrs(props => ({
  src: props.img,
}))`
  width: 375px;
  height: 375px;
  margin: 0 auto;
`;

export const BasicInfo = styled.section`
  position: relative;
  left: 18px;
  display: flex;
  flex-direction: column;
`;

export const BasicProductInfo = styled.section`
  width: 375px;
  height: 290px;
  padding: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  margin-right: 40px;
  font-size: 16px;
`;

export const PriceContainer = styled.div`
  display: flex;
  margin-top: 12px;
`;

export const DiscountRate = styled.h2`
  font-size: 20px;
  margin-right: 10px;
  color: red;
  font-weight: 700;
`;

export const FinalPrice = styled.h2`
  font-size: 20px;
  margin-right: 6px;
  font-weight: 700;
`;

export const OriginalPrice = styled.h2`
  font-size: 20px;
  align-self: flex-end;
  font-size: 12px;
  color: gray;
  text-decoration: line-through;
`;

export const DueDate = styled.p`
  position: relative;
  top: 190px;
  font-size: 12px;
  color: gray;
`;

export const BasicHostInfo = styled.section`
  display: flex;
  width: 375px;
  height: 85px;
  padding: 0 0 12px;
  border-top: 0.7px solid lightgray;
  background-color: white;
  }
`;

export const HostImageFrame = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin: 16px;
  background-color: red;
  overflow: hidden;
`;

export const HostImage = styled.img.attrs(props => ({
  alt: 'hostImage',
  src: props.src,
}))`
  height: 60px;
  margin-top: 0;
`;

export const HostInfoContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 10px;
  top: 30px;
`;

export const HostName = styled.h2`
  margin-bottom: 6px;
  font-size: 18px;
  font-weight: 700;
`;

export const HostActivity = styled.h3`
  color: gray;
  font-size: 12px;
`;

export const DetailSection = styled.section`
  .Description__Wrapper {
    width: 768px;
    width: ${({ theme }) => theme.width};
  }
  .product-description {
    padding: 0 20px;
    margin-left: -20px;
  }
`;

export const HeaderTitle = styled.h2`
  width: 768px;
  font-size: 18px;
  font-weight: 700;
  padding-top: 24px;
  margin-bottom: 24px;
  border-top: 0.8px solid lightgray;
  text-align: left;
`;

export const DetailSectionImageWrapper = styled.p`
  img {
    width: 768px;
    margin: 12px;
  }
`;

export const FloatingBarBackground = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 92px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 8%) 0px -10px 30px -10px;
`;

export const FloatingBarWrapper = styled.div`
  display: flex;
  max-width: 768px;
  bottom: 0px;
  left: 0px;
  margin: 0 auto;
  padding: 12px 20px 24px;
  cursor: pointer;
`;

export const BookmarkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
`;

export const BlueButton = styled.button`
  height: 56px;
  width: 100%;
  margin: 0px 0px 0px 20px;
  padding: 13px;
  border: 0;
  border-radius: 10px;
  outline: 0;
  line-height: 24px;
  color: white;
  font-size: 16px;
  background-color: rgb(0, 117, 239);
  text-align: center;
  cursor: pointer;
`;

export const ToTopButton = styled.button`
  position: absolute;
  right: 20px;
  bottom: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  opacity: 0.8;
  border: 1px solid rgb(211, 211, 211);
  box-shadow: 0px 8px 8px 0px rgb(0 0 0 / 10%);
  outline: 0;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
`;
