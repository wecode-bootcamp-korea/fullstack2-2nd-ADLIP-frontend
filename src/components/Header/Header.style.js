import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyle = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.headerBgColor};
  width: 100vw;
`;

const HeaderFlexCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  width: ${({ theme }) => theme.width};
  padding: 6px 20px 6px 20px;
`;

const HeaderUserMenuFlex = styled.ul`
  display: flex;
  align-items: center;
`;

const LogoutButtonStyle = styled.p`
  color: ${({ theme }) => theme.headerColor};
  font-size: 10px;
  cursor: pointer;
  text-decoration: none;
  margin: 0 0 0 10px;
  &:hover {
    transform: scale(1.1);
    font-weight: bold;
    color: ${({ theme }) => theme.AdipColor};
  }
`;

const WelcomeUserStyle = styled.p`
  color: ${({ theme }) => theme.AdipColor};
  font-weight: bold;
  font-size: 10px;
  margin: 0 0 0 5px;
`;

const UserIdStyle = styled(WelcomeUserStyle)`
  color: ${({ theme }) => theme.AdipColorBold};
`;

const AdlipIconStyle = styled.img.attrs({
  alt: 'AdipLogo',
  src: '/images/KaKaoEnimate.gif',
})`
  height: 35px;
`;

const LinkToTegStyle = styled(Link)`
  color: ${({ theme }) => theme.headerColor};
  font-size: 10px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    transform: scale(1.1);
    font-weight: bold;
    color: ${({ theme }) => theme.AdipColor};
  }
`;

const HeaderUserMenuStyle = styled(LinkToTegStyle)`
  margin: 0 0 0 12px;
`;

export {
  HeaderFlexCenter,
  HeaderStyle,
  HeaderUserMenuFlex,
  HeaderUserMenuStyle,
  LinkToTegStyle,
  WelcomeUserStyle,
  LogoutButtonStyle,
  UserIdStyle,
  AdlipIconStyle,
};
