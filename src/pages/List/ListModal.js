import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function ListModal(props) {
  const main = props.main;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <span className='btn'>
        <Button
          onClick={handleOpen}
          sx={{
            color: 'black',
            padding: '0',
            minWidth: '30px',
            marginBottom: '35px',
          }}
        >
          ∨
        </Button>
      </span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            id='modal-modal-title'
            variant='p'
            component='h2'
            sx={{ marginLeft: '120px', fontSize: '20px' }}
          >
            CATEGORY
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 3 }}>
            {main.map((category, i) => {
              return (
                <CardWrap onClick={{ handleClose }}>
                  <LinkCard to={`/category/${i}`} key={category.id}>
                    <CardImg src={category.url} alt='titleImg' />
                    <Title>{category.category_name}</Title>
                  </LinkCard>
                </CardWrap>
              );
            })}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
export default ListModal;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const CardWrap = styled.div`
  display: inline-block;
  margin-left: 12px;
`;

const LinkCard = styled(Link)`
  width: 150px;
  height: 150px;
  text-decoration: none;
`;

const CardImg = styled.img.attrs(({ src }) => {
  return {
    src: src,
  };
})`
  width: 150px;
  height: 150px;
  opacity: 80%;
  border-radius: 5px;
`;

const Title = styled.p`
  position: relative;
  bottom: 35px;
  left: 15px;
  font-size: 15px;
  font-weight: 600;
  color: white;
`;
