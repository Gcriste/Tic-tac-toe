import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import './App.css';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Box className='overall-container' sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid className='item-container' item xs={4}>
          <Item>
            <Button>hi</Button>
          </Item>
        </Grid>
        <Grid className='item-container' item xs={4}>
          <Item>
            <Button>hi</Button>
          </Item>
        </Grid>
        <Grid className='item-container' item xs={4}>
          <Item>
            <Button>hi</Button>
          </Item>
        </Grid>

        <Grid className='item-container' item xs={4}>
          <Item>
            <Button>hi</Button>
          </Item>
        </Grid>
        <Grid className='item-container' item xs={4}>
          <Item>
            <Button>hi</Button>
          </Item>
        </Grid>
        <Grid className='item-container' item xs={4}>
          <Item>
            <Button>hi</Button>
          </Item>
        </Grid>

        <Grid className='item-container' item xs={4}>
          <Item>
            <Button>hi</Button>
          </Item>
        </Grid>
        <Grid className='item-container' item xs={4}>
          <Item>
            <Button>hi</Button>
          </Item>
        </Grid>
        <Grid className='item-container' item xs={4}>
          <Item>
            <Button>hi</Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
