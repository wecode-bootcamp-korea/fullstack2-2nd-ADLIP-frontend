import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGitSquare } from '@fortawesome/free-brands-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import {
  FooterStyle,
  FooterFlexCenter,
  FooterMenuGroupStyle,
  FooterMenuStyle,
  ServiceCenterGroup,
  TitleServiceCenter,
  ContentServiceCenter,
  FooterIconGroup,
  FooterIcon,
} from './Footer.style';

export default function Footer() {
  const fontawsomeIconImage = [faGithub, faGitSquare, faCopy];
  const [footerData, setFooterData] = useState([]);

  useEffect(() => {
    fetch('/data/Main/footerTotalData.json')
      .then(res => res.json())
      .then(data => setFooterData(data))
      .catch(console.log);
  }, []);

  return (
    <FooterStyle>
      <FooterFlexCenter>
        <FooterMenuGroupStyle>
          {footerData.footerMenu?.map(menu => {
            return <FooterMenuStyle to='/'>{menu}</FooterMenuStyle>;
          })}
        </FooterMenuGroupStyle>
        {footerData.footerSubMenu?.map((menu, index) => {
          return (
            <ServiceCenterGroup isBorder={index}>
              <TitleServiceCenter>{menu.tilte}</TitleServiceCenter>
              {menu.content.map(content => {
                return <ContentServiceCenter>{content}</ContentServiceCenter>;
              })}
            </ServiceCenterGroup>
          );
        })}
        <FooterIconGroup>
          {footerData.footerIconLink?.map(icon => {
            return (
              <FooterIcon onClick={() => (window.location.href = icon.link)}>
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
