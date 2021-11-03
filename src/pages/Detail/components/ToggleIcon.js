import styled from 'styled-components';

export const ToggleIcon = () => {
  return (
    <ToggleIconSize
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='18'
      viewBox='0 0 18 18'
    >
      <g fill='none' fillRule='evenodd'>
        <path d='M18 0H0v18h18z' />
        <path stroke='black' strokeWidth='1.5' d='M7 5l4 4-4 4' />
      </g>
    </ToggleIconSize>
  );
};

const ToggleIconSize = styled.svg`
  position: relative;
  top: -45px;
  left: 750px;
  align-self: center;
`;
