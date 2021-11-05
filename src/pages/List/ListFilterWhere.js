import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from 'styled-components';

function ListFilterWhere() {
  const [where, setWhere] = React.useState('');

  const handleChange = event => {
    setWhere(event.target.value);
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
          어디서
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
          <MenuItem value={10}>온라인</MenuItem>
          <MenuItem value={20}>서울</MenuItem>
          <MenuItem value={30}>경기</MenuItem>
          <MenuItem value={40}>강원</MenuItem>
          <MenuItem value={50}>경상</MenuItem>
          <MenuItem value={60}>전라</MenuItem>
          <MenuItem value={70}>충청</MenuItem>
          <MenuItem value={80}>제주</MenuItem>
        </Select>
      </FormControl>
    </InputContainer>
  );
}

export default ListFilterWhere;

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
