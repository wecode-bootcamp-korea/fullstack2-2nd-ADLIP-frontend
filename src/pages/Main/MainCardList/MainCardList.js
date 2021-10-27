import React from 'react';
import styled from 'styled-components';

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px red solid;
  width: 768px;
`;

const CardListTitleFlex = styled.span`
  display: flex;
  border: 1px red solid;
  height: 21px;
  justify-content: space-between;
`;

const CardListFlex = styled.span`
  display: flex;
  border: 1px red solid;
  height: 350px;
`;

export default function MainCardList() {
  return (
    <CardList>
      <CardListTitleFlex>
        <p>주간Best</p> <p>전체보기</p>
      </CardListTitleFlex>
      <CardListFlex>카드컴포넌트</CardListFlex>
    </CardList>
  );
}
