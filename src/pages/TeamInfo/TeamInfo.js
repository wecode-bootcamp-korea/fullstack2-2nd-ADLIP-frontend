import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import mixin from '../../styles/mixins';
import Card from '../List/Card';

export default function TeamInfo() {
  const [TeamUserData, setTeamUserData] = useState([]);

  useEffect(() => {
    fetch('/data/Main/teamUserData.json')
      .then(res => res.json())
      .then(data => setTeamUserData(data.data))
      .catch(console.log);
  }, []);

  console.log(TeamUserData);

  return (
    <TeamInfoStyle>
      <TeamInfoFlexCenter>
        <PageTitleStyle> 팀원 소개 📢</PageTitleStyle>
        <PageContentsGroupStyle>
          {TeamUserData?.map(user => {
            return <Card paseValue={'userInfo'} data={user} />;
          })}
        </PageContentsGroupStyle>
      </TeamInfoFlexCenter>
    </TeamInfoStyle>
  );
}

const {
  flexStyleGroup,
  fontStyleGroup,
  widthHeightStyleGroup,
  marginStyleGroup,
  widthStyleGroup,
  firstTopTagStyle,
} = mixin;

const TeamInfoStyle = styled.div`
  ${firstTopTagStyle()}
`;

const TeamInfoFlexCenter = styled.div`
  ${fontStyleGroup('', '', 'column')}
  width: ${widthStyleGroup.secondTopWidth};
`;

const PageTitleStyle = styled.p`
  ${marginStyleGroup('50px 0 50px 0')}
  ${fontStyleGroup('20px', '', 'bold')}
`;

const PageContentsGroupStyle = styled.section`
  ${flexStyleGroup('space-between')}
  flex-wrap: wrap;
  ${widthHeightStyleGroup(widthStyleGroup.secondTopWidth, '1100px')}
`;
