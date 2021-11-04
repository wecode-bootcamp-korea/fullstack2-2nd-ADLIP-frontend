import React from 'react';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mixin from '../../styles/mixins';
import styled from 'styled-components';

export default function HambergerIconMenu(props) {
  const { isPositionMenu, changeStateEventShow, changePositionScroll } = props;
  return (
    <HambergerStyle>
      <FontAwesomeIcon
        className='hambergerIcon'
        icon={faHamburger}
        onMouseEnter={() => changeStateEventShow(true)}
      />
      {isPositionMenu && (
        <HambergerMenuBox onMouseLeave={() => changeStateEventShow(false)}>
          <MenuButton onClick={() => changePositionScroll('topRef')}>
            첫번째배너
          </MenuButton>
          <MenuButton onClick={() => changePositionScroll('productRef')}>
            주간 BEST🏆
          </MenuButton>
          <MenuButton onClick={() => changePositionScroll('bottomRef')}>
            하단
          </MenuButton>
        </HambergerMenuBox>
      )}
    </HambergerStyle>
  );
}

const { flexStyleGroup, fontStyleGroup, commonHoverStyle, colorStyleGroup } =
  mixin;

const HambergerStyle = styled.div`
  & .hambergerIcon {
    align-self: flex-end;
    position: fixed;
    top: 10rem;
    right: 2rem;
    ${fontStyleGroup('40px', 'gray', 'bold')}
    ${commonHoverStyle()}
  }
`;

const HambergerMenuBox = styled.ul`
  ${flexStyleGroup('none', 'none', 'column')}
  position: fixed;
  top: 15rem;
  right: 1rem;
`;

const MenuButton = styled.li`
  ${flexStyleGroup('none', 'center')}
  ${fontStyleGroup('15px', 'gray', 'bold')}
  background-color: white;
  padding: 10px;
  border: 1px solid gray;
  ${commonHoverStyle('', 'bold')}
  &:hover {
    border: 3px solid ${colorStyleGroup.AdlipColorBold};
  }
`;
