import React from 'react';
import styled from 'styled-components';

function FeedHeaderModal() {
  return (
    <FeedHeaderModalWrapper>
      <HeaderTitle>애드립 피드란?</HeaderTitle>
      <ModalBodyText>
        <FirstText>
          피드를 통해 나를 표현하고 😎 <br /> 다른 동기들의 코드도 확인해보세요.
        </FirstText>
        <SecondText>
          위코드에서 즐거웠고 행복했던 순간들을 회고로만 남기기엔 아쉬웠다면
          피드로 공유해 보세요. <br /> 그리고 다른 동기들의 코드 및 피드도
          구경하세요.
        </SecondText>
        <LastText> 코드리뷰 반영시에만 머지할 수 있습니다.</LastText>
      </ModalBodyText>
      <ModalBodyImage
        src='https://images.unsplash.com/photo-1595588982209-5c45ceb4f350?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNocmlzdG1hc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        alt='peopel'
      />
    </FeedHeaderModalWrapper>
  );
}

export default FeedHeaderModal;

const FeedHeaderModalWrapper = styled.div`
  width: 768px;
  height: 76.25px;
  margin-top: 40px;
  display: block;
  justify-content: space-evenly;
`;

const HeaderTitle = styled.h1`
  margin: 15px 0 25px 0;
  padding: 20px 0 0 20px;
  font-size: 22px;
  font-weight: 700;
`;

const ModalBodyText = styled.p`
  height: 150px;
  padding: 20px 20px;
  font-size: 16px;
  margin-bottom: 100px;
  line-height: 20px;
`;

const FirstText = styled.p`
  font-weight: 600;
`;

const SecondText = styled.p`
  margin: 20px 0;
`;

const LastText = styled.p`
  color: gray;
  font-size: 12px;
`;
const ModalBodyImage = styled.img`
  width: 100%;
  height: 200px;
  padding: 0;
  margin-bottom: 48px;
  object-fit: cover;
`;
