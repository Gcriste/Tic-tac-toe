import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const StartMenu = (props) => {
  const {
    handlePlayer1Change,
    handlePlayer1Submit,
    handlePlayer2Change,
    handlePlayer2Submit,
    player1Name,
    player1Letters,
    player2Letters,
    handleKey1Down,
    handleKey2Down,
  } = props;

  const player1Card = (
    <>
      <CardContent>
        <Grid container sx={{ maxWidth: '450px', padding: '10px' }}>
          <Grid item xs={8} sx={{ m: 1 }}>
            <Typography variant='h5'>Enter player 1 name</Typography>
          </Grid>
          <Grid item xs={6} sx={{ m: 1 }}>
            <TextField
              id='outlined-basic'
              label='Player 1'
              variant='outlined'
              value={player1Letters}
              onChange={handlePlayer1Change}
              onKeyDown={(e) => handleKey1Down(e)}
            />
          </Grid>
          <Grid item xs={12} sx={{ m: 1 }}>
            <Button variant='contained' onClick={handlePlayer1Submit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </>
  );
  const player2Card = (
    <>
      <CardContent>
        <Grid container sx={{ maxWidth: '450px', padding: '10px' }}>
          <Grid item xs={8} sx={{ m: 1 }}>
            <Typography variant='h5'>Enter player 2 name</Typography>
          </Grid>
          <Grid item xs={6} sx={{ m: 1 }}>
            <TextField
              id='outlined-basic'
              label='Player 2'
              variant='outlined'
              value={player2Letters}
              onChange={handlePlayer2Change}
              onKeyDown={(e) => handleKey2Down(e)}
            />
          </Grid>
          <Grid item xs={12} sx={{ m: 1 }}>
            <Button variant='contained' onClick={handlePlayer2Submit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </>
  );

  return (
    <div>
      <Box sx={{ minWidth: 275 }}>
        <Card variant='outlined'>
          {!player1Name ? player1Card : player2Card}
        </Card>
      </Box>
    </div>
  );
};

export default StartMenu;
