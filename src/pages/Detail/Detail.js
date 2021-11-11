import React, { useState, useEffect } from 'react';
import { ShareIcon } from './components/ShareIcon';
import { BookmarkIcon } from './components/BookmarkIcon';
import { ToggleIcon } from './components/ToggleIcon';
import { ToTopIcon } from './components/ToTopIcon';
import DetailCarousel from '../../components/DetailCarousel/DetailCarousel';
import Map from './components/Map';
import CommonCardList from '../List/CommonCardList';
import styled from 'styled-components';
import { useParams, useLocation } from 'react-router';

export default function Detail() {
  const [detailData, setDetailData] = useState([]);
  const [relatedListData, setRelatedListData] = useState([]);
  const [buttonToTop, setButtonToTop] = useState(false);
  const [toggled, setToggled] = useState(false);
  const location = useLocation();
  const onButtonToTopClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  let { id } = useParams();

  let mainId = location.state?.mainCategoryId;
  let subId = location.state?.subCategoryId;

  useEffect(() => {
    const getDetailData = async () => {
      try {
        await fetch(`http://localhost:8080/products/${id}`)
          .then(res => res.json())
          .then(res => {
            setDetailData(res);
          });
      } catch (error) {
        console.log('error', error);
      }
    };

    const getRelatedList = async () => {
      try {
        await fetch(`http://localhost:8080/product/1/1`, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        })
          .then(res => res.json())
          .then(res => {
            setRelatedListData(res.data);
            console.log(`fetch ${relatedListData}`);
          });
      } catch (error) {
        console.log('error', error);
      }
    };

    getDetailData();
    getRelatedList();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', showButtonToTop);

    return () => window.removeEventListener('scroll', showButtonToTop);
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
      {detailData && (
        <DetailContainer>
          <HeadSection>
            <ImageFrame>
              <ProductImage img={detailData.mainImageUrl} />
            </ImageFrame>
            <BasicInfo>
              <BasicProductInfo>
                <TitleContainer>
                  <TitleText>{detailData.name}</TitleText>
                  <ShareIcon src={ShareIcon} />
                </TitleContainer>
                <PriceContainer>
                  {detailData.discountRate ? (
                    <>
                      <DiscountRate>
                        {detailData.discountRate * 100}%
                      </DiscountRate>
                      <FinalPrice>
                        {detailData.price * (1 - detailData.discountRate)}원
                      </FinalPrice>
                      <OriginalPrice>{detailData.price}원</OriginalPrice>
                    </>
                  ) : (
                    <>
                      <FinalPrice>{detailData.price}</FinalPrice>
                    </>
                  )}
                </PriceContainer>
                <DueDate>
                  유효기간: 구매일로부터 {detailData.expiredDay}일까지
                </DueDate>
              </BasicProductInfo>
              <BasicHostInfo>
                <HostImageFrame>
                  <HostImage src={detailData.host?.profileImageUrl} />
                </HostImageFrame>
                <HostInfoContainer>
                  <HostName>
                    {detailData.host?.nickname} {'>'}{' '}
                  </HostName>
                  <HostActivity>
                    프립 {detailData.host?.numberOfProduct} | 후기{' '}
                    {detailData.host?.numberOfGetLiked} | 저장{' '}
                    {detailData.host?.nuberOfProductLiked}
                  </HostActivity>
                </HostInfoContainer>
                <BookmarkIconWrapper>
                  <BookmarkIcon fill='none' stroke='lightgray' />
                </BookmarkIconWrapper>
              </BasicHostInfo>
            </BasicInfo>
          </HeadSection>
          <DetailSection>
            <DescriptionWrapper>
              <ProductDescription>
                <ReviewContainer>
                  <DetailCarousel pathParameterId={id} />
                </ReviewContainer>
                <HeaderTitle>서비스 소개</HeaderTitle>

                <ImageContentWrapper>
                  <img src={detailData.introduction} alt='상품 안내 사항' />
                </ImageContentWrapper>
                <HeaderTitle>진행 장소</HeaderTitle>
                <ImageContentWrapper>
                  <Map locationAddress={detailData?.palceOfProgress} />
                </ImageContentWrapper>

                <HeaderTitle>환불 정책</HeaderTitle>
                <ToggleMenuWrapper
                  onClick={() =>
                    toggled ? setToggled(false) : setToggled(true)
                  }
                >
                  <ToggleIcon />
                </ToggleMenuWrapper>
                {toggled && (
                  <TextContentWrapper>
                    <p>구매 후 2주 이내 : 100% 환불</p>
                    <p>구매 후 2주 후 : 환불 불가</p>
                    <br />
                    <p>[환불 신청 방법]</p>
                    <p>1. 해당 프립을 결제한 계정으로 로그인</p>
                    <p>2. 마이 - 신청내역</p>
                    <p>3. 취소를 원하는 프립 상세 정보 버튼 - 취소</p>
                    <p>※ 결제 수단에 따라 예금주, 은행명, 계좌번호 입력</p>
                  </TextContentWrapper>
                )}
                <HeaderTitle>이런 애드립 어때요?</HeaderTitle>
                <ListContentWrapper>
                  <CommonCardList productsData={relatedListData} />
                </ListContentWrapper>
              </ProductDescription>
            </DescriptionWrapper>
          </DetailSection>

          <FloatingBarBackground>
            <FloatingBarWrapper>
              <BookmarkWrapper>
                <BookmarkIcon fill='none' stroke='#333' />
                {detailData.productBookmarked}
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
  margin-top: 20px;
`;

export const HeadSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 750px;
  margin-bottom: 20px;
  padding: 0 0 24px;
`;

export const ImageFrame = styled.div`
  width: 375px;
  height: 375px;
  border-radius: 10px;
  background-size: 375px;
  background-color: lightgray;
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

export const TitleText = styled.h1`
  margin-right: 60px;
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
`;

export const HostImageFrame = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin: 16px;
  background-color: lightgray;
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

export const BookmarkIconWrapper = styled.div`
  position: relative;
  top: 30px;
  left: 100px;
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

export const DetailSection = styled.section``;

export const DescriptionWrapper = styled.div`
  width: 768px;
  width: ${({ theme }) => theme.width};
`;

export const ProductDescription = styled.div`
  padding: 0 20px;
  margin-left: -20px;
`;

export const ReviewContainer = styled.div`
  margin: 0 0 50px 0;
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

export const ImageContentWrapper = styled.p`
  * {
    width: 768px;
    margin: 0px 0px 30px 0px;
  }
`;

export const ToggleMenuWrapper = styled.div`
  display: flex;
`;

export const TextContentWrapper = styled.div`
  align-content: center;
  margin: 0px 0px 30px 0px;
  * {
    font-size: 14px;
    margin: 4px;
  }
`;

export const ListContentWrapper = styled.p`
  * {
    position: relative;
    left: -5px;
    top: -6px;
  }
`;

const Title = styled.span`
  margin-left: ${props => props.margin};
  font-size: ${props => props.size};
  font-weight: ${props => props.bold};
  text-decoration: ${props => props.deco};
  color: ${props => props.color};
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

export const FloatingBarBackground = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 92px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 8%) 0px -10px 30px -10px;
  z-index: 3;
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
