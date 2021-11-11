import React from 'react';
import styled from 'styled-components';
import Rating from './Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function CommentHeader({
  sortOptions,
  changeSortOption,
  totalCountOfComment,
  ratingAvg,
  isSortOptionOpen,
  setIsSortOptionOpen,
}) {
  const [activeSort] = sortOptions.filter(sort => sort.isChecked);

  const toggleSortMenu = () => {
    setIsSortOptionOpen(!isSortOptionOpen);
  };

  return (
    <ReviewContainer>
      <ReviewHeader>
        <HeaderMenu>
          <ReviewAmount>후기 {totalCountOfComment}개</ReviewAmount>
          <SortMenu onClick={toggleSortMenu}>
            <ActiveSort>{activeSort.option}</ActiveSort>
            {isSortOptionOpen ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </SortMenu>
        </HeaderMenu>
        <div>
          <Rating rating={ratingAvg} />
          <Average>{ratingAvg.toFixed(2)}</Average>
        </div>
        <SortOption
          style={
            isSortOptionOpen
              ? { visibility: 'visible' }
              : { visibility: 'hidden' }
          }
        >
          {sortOptions.map(sort => {
            return (
              <SortList
                key={sort.id}
                style={
                  sort.option === activeSort.option
                    ? { fontWeight: 'bolder' }
                    : { fontWeight: 'normal' }
                }
                onClick={() => changeSortOption(sort)}
              >
                {sort.option}
              </SortList>
            );
          })}
        </SortOption>
      </ReviewHeader>
    </ReviewContainer>
  );
}

export default CommentHeader;

const ReviewContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ReviewHeader = styled.header`
  position: relative;
  width: ${({ theme }) => theme.width};
  height: 123px;
  border-bottom: 1px solid rgba(1, 1, 1, 0.1);

  .fa-star {
    color: red;
  }
`;

const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 25px 0;
`;

const ReviewAmount = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

const SortMenu = styled.div`
  margin-right: 10px;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-drag: none;

  .fa-chevron-down,
  .fa-chevron-up {
    font-size: 10px;
    opacity: 0.7;
  }
`;

const ActiveSort = styled.span`
  font-size: 15px;
`;

const Average = styled.span`
  margin-left: 10px;
  font-weight: 700;
  opacity: 0.5;
`;

const SortOption = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 0 19px;
  width: 110px;
  border: 1px solid black;
  top: 50%;
  right: 0%;
  border-radius: 5%;
  background-color: white;
  z-index: 2;
  font-size: 15px;
`;

const SortList = styled.li`
  margin-top: 20px;

  &:last-child {
    margin-bottom: 20px;
  }
`;
