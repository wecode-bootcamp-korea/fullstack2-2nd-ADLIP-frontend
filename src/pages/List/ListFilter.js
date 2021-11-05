import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from 'styled-components';
import { API } from '../../API/api';

const LIMIT = 12;

function ListFilter(props) {
  const history = useHistory();
  const location = useLocation();
  const [where, setWhere] = useState('');
  const sortOptionData = [
    {
      id: 1,
      option: '인기순',
      isChecked: true,
    },
    {
      id: 2,
      option: '등록일순',
      isChecked: false,
    },
    {
      id: 3,
      option: '가격 높은순',
      isChecked: false,
    },
    {
      id: 4,
      option: '가격 낮은순',
      isChecked: false,
    },
  ];

  const [sortOptions, setSortOptions] = useState(sortOptionData);
  const popular = sortOptions[0].isChecked;
  const latest = sortOptions[1].isChecked;
  const priceHigh = sortOptions[2].isChecked;
  const priceLow = sortOptions[3].isChecked;

  const handleChange = event => {
    setWhere(event.target.value);
  };

  let order;
  popular && (order = 'popular');
  latest && (order = 'latest');
  priceHigh && (order = 'priceHigh');
  priceLow && (order = 'priceLow');

  // const query = `orderBy=${order}$offset=${(page - 1) * LIMIT}`;

  // useEffect(() => {
  //   fetch(`${API}/products/${pathParameterId}/comments?${query}`);
  //   // history.push(`/products/${pathParameterId}/comments?page=${page}`);
  //   window.scrollTo(0, 0);
  // }, [query, pathParameterId]);

  const changeSortOption = sort => {
    const newSortOptions = [...sortOptions];
    const sortIndex = sort.id - 1;
    newSortOptions.forEach(option => (option.isChecked = false));
    newSortOptions[sortIndex].isChecked = true;
    setSortOptions(newSortOptions);
  };

  return (
    <InputContainer>
      <FormControl
        variant='standard'
        sx={{
          m: 1,
          minWidth: 70,
        }}
      >
        <InputLabel
          id='demo-simple-select-standard-label'
          sx={{ fontSize: '14px' }}
        >
          필터
        </InputLabel>
        <Select
          labelId='demo-simple-select-standard-label'
          id='demo-simple-select-standard'
          value={where}
          onChange={handleChange}
          label='Age'
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>인기순</MenuItem>
          <MenuItem value={20}>등록일순</MenuItem>
          <MenuItem value={30}>가격 높은순</MenuItem>
          <MenuItem value={40}>가격 낮은순</MenuItem>
        </Select>
      </FormControl>
    </InputContainer>
  );
}

export default ListFilter;

const InputContainer = styled.div`
  & div {
    font-size: 13px;
  }
`;

// const Wrap = styled.em`
//   & li {
//     font-size: 13px;
//   }
// `;
