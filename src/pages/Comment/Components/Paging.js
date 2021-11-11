import React from 'react';
import Pagination from 'react-js-pagination';
import styled from 'styled-components';

function Paging({ page, handlePageChange, totalCountOfComment }) {
  return (
    <Container>
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={totalCountOfComment}
        pageRangeDisplayed={5}
        prevPageText={'<'}
        nextPageText={'>'}
        onChange={handlePageChange}
      />
    </Container>
  );
}

export default Paging;

const Container = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  ul.pagination li a {
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-weight: 500;
    opacity: 0.5;
  }

  ul.pagination li.active a {
    color: ${({ theme }) => theme.Color.AdlipColor};
    font-weight: 800;
    opacity: 1;
  }

  ul.pagination li:hover,
  ul.pagination li a.active {
    background-color: rgba(1, 1, 1, 0.05);
  }
`;
