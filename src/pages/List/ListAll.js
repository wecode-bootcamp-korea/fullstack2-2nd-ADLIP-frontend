import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import theme from '../../styles/theme';
import Card from './Card.js';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function ListAll() {
  useEffect(() => {
    async function fetchData() {
      await axios
        .all([
          axios.get('/data/List/title.json'),
          axios.get('/data/List/card.json'),
        ])
        .then(
          axios.spread((res1, res3) => {
            setMain([...res1.data]);
            setProduct([...res3.data]);
          })
        )
        .catch(() => {
          console.log('FAIL!!');
        });
    }
    fetchData();
  }, []);

  const [main, setMain] = useState([]);
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [postPerPage] = useState(12);

  const indexOfLast = page * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;
  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }

  const pageTotalNum = Math.ceil(`${product.length}` / postPerPage);

  return (
    <Page>
      <ProductSection> {main[id]?.category_name} 전체</ProductSection>
      <ProductAllWrap>
        {currentPosts(product).map((a, i) => {
          return (
            <Wrap key={a.ai}>
              <Card data={a} i={i} key={product.id} />
            </Wrap>
          );
        })}
      </ProductAllWrap>
      <Stack spacing={2}>
        <Pagination
          count={pageTotalNum}
          onChange={(_, i) => {
            setPage(i);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          showFirstButton
          showLastButton
          sx={{ margin: '50px auto' }}
        />
      </Stack>
    </Page>
  );
}

export default ListAll;

const Page = styled.div`
  width: 808px;
  margin: auto;
  font-style: ${theme.fontStyle};
  color: ${theme.blackColor};
`;

const ProductSection = styled.div`
  padding-left: 20px;
  font-size: 18px;
  font-weight: 700;
`;

const ProductAllWrap = styled.div`
  width: 808px;
  display: flex;
  flex-wrap: wrap;
`;

const Wrap = styled.div`
  height: 415px;
  padding-top: 20px;
`;
