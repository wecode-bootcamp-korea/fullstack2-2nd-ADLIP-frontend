import styled from 'styled-components';

const MainStyle = styled.div`
  display: flex;
  justify-content: center;
  border: 1px red solid;
  width: 100vw;
`;

const MainFlexCenter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px red solid;
`;

const Categories = styled.div`
  width: 768px;
  height: 83px;
  border: 1px red solid;
  margin: 50px 0 0 0;
`;

const Banner = styled.div`
  width: 768px;
  height: 100px;
  border: 1px red solid;
`;

export { MainStyle, MainFlexCenter, Categories, Banner };
