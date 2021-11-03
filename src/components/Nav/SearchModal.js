import React, { useEffect, useRef, useState } from 'react';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mixinStyle from '../../styles/mixins';
import styled from 'styled-components';

export default function SearchModal(props) {
  const [modalHeight, setModalHeight] = useState(0);
  const modalRef = useRef();
  const {
    pushInputValueAtMotal,
    setSearchBoolean,
    searchValueArray,
    setSearchValueArray,
    DeleteSearchData,
  } = props;

  useEffect(() => {
    setModalHeight(() => modalRef.current.getBoundingClientRect().height + 110);
  }, [searchValueArray]);

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <ModalTotalPosition>
      <ModalFixTotalView
        top={`${modalHeight}px`}
        onClick={() => {
          setSearchBoolean(false);
        }}
      ></ModalFixTotalView>
      <SearchModalStyle
        ref={modalRef}
        onClick={() => {
          setSearchBoolean(true);
        }}
      >
        <SearchModalFlexCenter>
          <TitleGroupStyle>
            <TitleStyle>최근검색어</TitleStyle>
            <CancelSearchList
              onClick={() => {
                localStorage.clear();
                setSearchValueArray([]);
              }}
            >
              지우기
            </CancelSearchList>
          </TitleGroupStyle>
          <ContentsGroupStyle>
            {searchValueArray?.map((searchData, index) => {
              return (
                <ContentCancelStyle
                  key={index + 1}
                  onClick={e => {
                    e.stopPropagation();
                    pushInputValueAtMotal(e);
                  }}
                >
                  <ContentStyle>{searchData}</ContentStyle>
                  <FontAwesomeIcon
                    className='contentCancel'
                    icon={faTimesCircle}
                    onClick={() => DeleteSearchData(searchData)}
                  />
                </ContentCancelStyle>
              );
            })}
          </ContentsGroupStyle>
        </SearchModalFlexCenter>
      </SearchModalStyle>
    </ModalTotalPosition>
  );
}

const {
  flexStyleGroup,
  widthHeightStyleGroup,
  colorStyleGroup,
  paddingStyleGroup,
  fontStyleGroup,
  commonHoverStyle,
  widthStyleGroup,
} = mixinStyle;

const ModalTotalPosition = styled.div`
  position: fixed;
  top: 110px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 5000;
`;

const ModalFixTotalView = styled.div`
  position: fixed;
  top: ${props => props.top};
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: black;
  opacity: 0.6;
  z-index: 1000;
`;

const SearchModalStyle = styled.div`
  ${flexStyleGroup('center')}
  ${widthHeightStyleGroup(widthStyleGroup.topHorizontalWidth)}
  background-color: white;
`;

const SearchModalFlexCenter = styled.div`
  ${flexStyleGroup('', '', 'column')}
  ${widthHeightStyleGroup(widthStyleGroup.searchModalWidth)}
`;

const TitleGroupStyle = styled.header`
  ${widthHeightStyleGroup(widthStyleGroup.searchModalWidth, '50px')}
  ${flexStyleGroup('space-between', 'center')}
  padding: 20px 0 20px 0;
  border-bottom: 1px #eeeeee solid;
  margin-bottom: 30px;
`;
const TitleStyle = styled.p`
  ${fontStyleGroup('14px', '', '700')}
`;

const CancelSearchList = styled.p`
  ${fontStyleGroup('12px', '#9b9b9b')}
  ${commonHoverStyle()}
`;

const ContentsGroupStyle = styled.div`
  ${flexStyleGroup('', '', 'column')}
  ${widthHeightStyleGroup(widthStyleGroup.searchModalWidth, '')}
  margin-bottom: 20px;

  & .contentCancel {
    ${fontStyleGroup('17px', '#9b9b9b')}
  }
`;

const ContentCancelStyle = styled.div`
  padding: 7px;
  ${flexStyleGroup('space-between', 'center')}
  width:100%;
  cursor: pointer;
  &:hover {
    ${fontStyleGroup('14px', colorStyleGroup.AdlipColorBold, 'bold')}
    background-color: ${colorStyleGroup.AdlipColorSoftly};
    & .contentCancel {
      ${fontStyleGroup('19px', colorStyleGroup.AdlipColorBold, 'bold')}
    }
  }
`;

const ContentStyle = styled.p`
  ${fontStyleGroup('12px', '', '500')}
`;
