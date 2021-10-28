import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterStyle = styled.div`
  display: flex;
  justify-content: center;
  bottom: 0;
  width: 100vw;
  background-color: ${({ theme }) => theme.headerBgColor};
  margin: 10px 0 0 0;
  padding: 40px 20px 96px 20px;
`;

const FooterFlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.width};
`;

const FooterMenuGroupStyle = styled.div`
  margin: 0 0 10px 0;
`;

const FooterMenuStyle = styled(Link)`
  margin: 0 30px 0 0;
  text-decoration: none;
  font-size: 15px;
  color: black;
  cursor: pointer;
  &:hover {
    font-weight: bold;
    color: ${({ theme }) => theme.AdipColor};
    text-decoration: underline 1px ${({ theme }) => theme.AdipColor};
  }
`;

const ServiceCenterGroup = styled.div`
  padding: 40px 0 30px 0;
  ${({ isBorder }) => {
    return isBorder === 0 && `border-bottom : 2px solid #dddddd`;
  }}
`;

const TitleServiceCenter = styled.p`
  font-size: 16px;
  font-weight: bold;
  padding: 0 0 20px 0;
`;

const ContentServiceCenter = styled.p`
  font-size: 12px;
  padding: 0 0 15px 0;
  color: #666666;
`;

const FooterIconGroup = styled.div`
  display: flex;
`;

const FooterIcon = styled(FooterIconGroup)`
  font-size: 12px;
  flex-direction: column;
  color: #666666;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    font-weight: bold;
    color: ${({ theme }) => theme.AdipColor};
    & .isHover {
      color: ${({ theme }) => theme.AdipColor};
    }
  }
  & .gitHub {
    color: #9b9b9b;
    font-size: 25px;
    margin: 0 50px 10px 15px;
  }
`;

export {
  FooterStyle,
  FooterFlexCenter,
  FooterMenuGroupStyle,
  FooterMenuStyle,
  ServiceCenterGroup,
  TitleServiceCenter,
  ContentServiceCenter,
  FooterIconGroup,
  FooterIcon,
};
