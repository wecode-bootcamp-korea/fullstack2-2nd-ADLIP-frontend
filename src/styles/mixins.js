import { css } from 'styled-components';

const colorStyleGroup = {
  whiteColor: '#FFFFFF',
  headerBgColor: '#f4f4f4',
  headerColor: '#777777',
  navColor: '#858585',
  AdlipColorBold: '#1187cf',
  AdlipColor: '#53B7E7',
  footerContentColor: '#666666',
  footerIconColor: '#9b9b9b',
  footerMenuColor: '#333333',
  middleCategoryTextColor: '#aaaaaa',
};

const widthStyleGroup = {
  topHorizontalWidth: '100wv',
  secondTopWidth: '768px',
};

const flexStyleGroup = (justify, align, direction) => css`
  display: flex;
  justify-content: ${justify || 'flex-start'};
  align-items: ${align || 'flex-start'};
  flex-direction: ${direction || 'row'};
`;

const fontStyleGroup = (size, color, weight) => css`
  font-size: ${size || 'none'};
  color: ${color || 'none'};
  font-weight: ${weight || 'normal'};
`;

const widthHeightStyleGroup = (width, height) => css`
  width: ${width || 'none'};
  height: ${height || 'none'};
`;

const marginStyleGroup = margin => css`
  margin: ${margin};
`;

const paddingStyleGroup = padding => css`
  padding: ${padding};
`;

const firstTopTagStyle = height => css`
  ${flexStyleGroup('center')}
  ${widthHeightStyleGroup(widthStyleGroup.topHorizontalWidth, height)}
`;

const commonHoverStyle = (fontSize, bold) => css`
  cursor: pointer;

  &:hover {
    ${fontStyleGroup(fontSize || '', colorStyleGroup.AdlipColor, bold)}
    transform: scale(1.1);
  }
`;

const mixinStyle = {
  colorStyleGroup,
  widthStyleGroup,
  flexStyleGroup,
  fontStyleGroup,
  widthHeightStyleGroup,
  marginStyleGroup,
  paddingStyleGroup,
  firstTopTagStyle,
  commonHoverStyle,
};

export default mixinStyle;
