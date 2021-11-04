import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGitSquare } from '@fortawesome/free-brands-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mixinStyle from '../../styles/mixins';

export default function Footer() {
  const [footerData, setFooterData] = useState([]);

  useEffect(() => {
    fetch('/data/Main/footerTotalData.json')
      .then(res => res.json())
      .then(data => setFooterData(data))
      .catch(console.log);
  }, []);

  const fontawsomeIconImage = [faGithub, faGitSquare, faCopy];

  return (
    <FooterStyle>
      <FooterFlexCenter>
        <div>
          {footerData.footerMenu?.map(menu => {
            return (
              <FooterMenuStyle
                to={`/${menu.name === '팀원소개' ? 'teamInfo' : ''}`}
                key={menu.id}
              >
                {menu.name}
              </FooterMenuStyle>
            );
          })}
        </div>
        {footerData.footerSubMenu?.map(menu => {
          return (
            <FooterContentsGroupStyle key={menu.id} isBorder={menu.id}>
              <FooterTitleStyle>{menu.title}</FooterTitleStyle>
              {menu.contentList.map(contentList => {
                return (
                  <FooterContentStyle key={contentList.id}>
                    {contentList.content}
                  </FooterContentStyle>
                );
              })}
            </FooterContentsGroupStyle>
          );
        })}
        <FooterIconGroup>
          {footerData.footerIconLink?.map(icon => {
            return (
              <FooterIcon
                key={icon.id}
                onClick={() => (window.location.href = icon.link)}
              >
                <FontAwesomeIcon
                  className='gitHub isHover'
                  icon={fontawsomeIconImage[icon.id - 1]}
                />
                {icon.name}
              </FooterIcon>
            );
          })}
        </FooterIconGroup>
      </FooterFlexCenter>
    </FooterStyle>
  );
}

const {
  flexStyleGroup,
  fontStyleGroup,
  marginStyleGroup,
  paddingStyleGroup,
  colorStyleGroup,
  firstTopTagStyle,
  widthStyleGroup,
  commonHoverStyle,
} = mixinStyle;

const FooterStyle = styled.div`
  ${firstTopTagStyle()}
  ${marginStyleGroup('10px 0 0 0')}
  ${paddingStyleGroup('40px 0 96px 0')}
  bottom: 0;
  background-color: ${colorStyleGroup.headerBgColor};
`;

const FooterFlexCenter = styled.div`
  ${flexStyleGroup('', '', 'column')}
  width: ${widthStyleGroup.secondTopWidth};
`;

const FooterMenuStyle = styled(Link)`
  ${marginStyleGroup('0 20px 0 0')}
  text-decoration: none;
  ${fontStyleGroup('12px', colorStyleGroup.footerMenuColor, '700')}
  ${commonHoverStyle()}
`;

const FooterContentsGroupStyle = styled.div`
  ${paddingStyleGroup('40px 0 20px 0')}
  ${({ isBorder }) => {
    return isBorder === 1 && `border-bottom : 2px solid #dddddd`;
  }}
`;

const FooterTitleStyle = styled.p`
  ${fontStyleGroup('14px', '', 'bold')}
  ${paddingStyleGroup('0 0 20px 0')}
`;

const FooterContentStyle = styled.p`
  ${fontStyleGroup('11px', colorStyleGroup.footerContentColor, 'bold')}
  ${paddingStyleGroup('0 0 15px 0')}
`;

const FooterIconGroup = styled.div`
  ${flexStyleGroup()}
`;

const FooterIcon = styled.div`
  ${flexStyleGroup('', '', 'column')}
  ${fontStyleGroup('11px', colorStyleGroup.footerContentColor)}
  ${commonHoverStyle('', 'bold')}

  &:hover {
    & .isHover {
      color: ${colorStyleGroup.AdlipColor};
    }
  }

  & .gitHub {
    ${marginStyleGroup('0 50px 10px 15px')}
    ${fontStyleGroup('25px', colorStyleGroup.footerIconColor)}
  }
`;
