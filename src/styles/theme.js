const theme = {
  fontStyle: "'Noto Sans KR', Helvetica, Arial, sans-serif;",
  width: '768px',
  Color: {
    whiteColor: '#FFFFFF',
    headerBgColor: '#F4F4F4',
    headerColor: '#777777',
    navColor: '#858585',
    AdlipColorBold: '#1187CF',
    AdlipColor: '#53B7E7',
    footerContentColor: '#666666',
    footerIconColor: '#9B9B9B',
    footerMenuColor: '#333333',
    middleCategoryTextColor: '#AAAAAA',
  },
  Mixins: {
    flex: (justify, align, direction) => {
      return `display:flex; justify-content:${
        justify || 'flex-start'
      }; align-items:${align || 'flex-start'}; flex-direction:${
        direction || 'row'
      };`;
    },
    font: (size, color, weight) => {
      return `font-size:${size || 'none'}; color:${
        color || 'none'
      }; font-weight:${weight || 'normal'};`;
    },
    widthHeight: (width, height) => {
      return `width:${width || 'none'}; height:${height || 'none'}; `;
    },
  },
};
export default theme;
