import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import ModalWinOrLose from './Components/ModalWinOrLose';
import StartMenu from './Components/StartMenu';

import './App.css';

const App = () => {
  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#1572A1',
        darker: '#053e85',
      },
      success: {
        main: '#9AD0EC',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
      secondary: {
        main: '#E3BEC6',
      },
    },
  });
  const [startGame, setStartGame] = useState(false);
  const [currentValue, setCurrentValue] = useState(0);
  const [allPlays, setAllPlays] = useState([]);
  const [player1Letters, setPlayer1Letters] = useState('');
  const [player1, setPlayer1] = useState({
    name: '',
    wins: 0,
    losses: 0,
    turn: true,
    guesses: [],
  });
  const [player2Letters, setPlayer2Letters] = useState('');
  const [player2, setPlayer2] = useState({
    name: '',
    wins: 0,
    losses: 0,
    turn: false,
    guesses: [],
  });

  const [openModal, setOpenModal] = useState({
    open: false,
    player: '',
    message: '',
  });

  const [isOne, setIsOne] = useState({
    isTrue: false,
    isOddOrEven: null,
    playerGuess: null,
  });
  const [isTwo, setIsTwo] = useState({
    isTrue: false,
    isOddOrEven: null,
    playerGuess: null,
  });
  const [isThree, setIsThree] = useState({
    isTrue: false,
    isOddOrEven: null,
    playerGuess: null,
  });
  const [isFour, setIsFour] = useState({
    isTrue: false,
    isOddOrEven: null,
    playerGuess: null,
  });
  const [isFive, setIsFive] = useState({
    isTrue: false,
    isOddOrEven: null,
    playerGuess: null,
  });
  const [isSix, setIsSix] = useState({
    isTrue: false,
    isOddOrEven: null,
    playerGuess: null,
  });
  const [isSeven, setIsSeven] = useState({
    isTrue: false,
    isOddOrEven: null,
    playerGuess: null,
  });
  const [isEight, setIsEight] = useState({
    isTrue: false,
    isOddOrEven: null,
    playerGuess: null,
  });
  const [isNine, setIsNine] = useState({
    isTrue: false,
    isOddOrEven: null,
    playerGuess: null,
  });

  const handlePlayer1Change = (e) => {
    setPlayer1Letters(e.target.value);
  };
  const handleKey1Down = (e) => {
    if (e.key === 'Enter') {
      handlePlayer1Submit();
    }
  };

  const handlePlayer1Submit = () => {
    setPlayer1({
      name:
        player1Letters === ''
          ? 'Player 1'
          : player1Letters[0].toUpperCase() + player1Letters.slice(1),
      wins: 0,
      losses: 0,
      turn: true,
      guesses: [],
    });
    setPlayer1Letters('');
  };

  const handlePlayer2Change = (e) => {
    setPlayer2Letters(e.target.value);
  };
  const handleKey2Down = (e) => {
    if (e.key === 'Enter') {
      handlePlayer2Submit();
    }
  };

  const handlePlayer2Submit = () => {
    setPlayer2({
      name:
        player2Letters === ''
          ? 'Player 2'
          : player2Letters[0].toUpperCase() + player2Letters.slice(1),
      wins: 0,
      losses: 0,
      turn: false,
      guesses: [],
    });
    setPlayer2Letters('');
    setStartGame(true);
  };

  const handleClose = () => {
    setOpenModal({ open: false, player: 0, message: '' });
    clearBoard();
    setPlayer1({ ...player1, guesses: [] });
    setPlayer2({ ...player2, guesses: [] });
  };

  const handleStartOver = () => {
    setPlayer1({ name: '', wins: 0, losses: 0 });
    setPlayer2({ name: '', wins: 0, losses: 0 });
    setStartGame(false);
  };

  const handleClick = (e) => {
    setCurrentValue(e.target.value);
    setAllPlays([...allPlays, e.target.value]);
  };

  useEffect(() => {
    checkNumber();
  }, [allPlays]);

  useEffect(() => {
    checkIfWinner();
  }, [isOne, isTwo, isThree, isFour, isFive, isSix, isSeven, isEight, isNine]);

  const allPlaysEvenorOdd = () => {
    return {
      isOddEven: allPlays.length % 2 === 0 ? 'odd' : 'even',
      player: allPlays.length % 2 === 0 ? 'player2' : 'player1',
    };
  };

  const clearBoard = () => {
    setIsOne({ isTrue: false, isOddOrEven: null });
    setIsTwo({ isTrue: false, isOddOrEven: null });
    setIsThree({ isTrue: false, isOddOrEven: null });
    setIsFour({ isTrue: false, isOddOrEven: null });
    setIsFive({ isTrue: false, isOddOrEven: null });
    setIsSix({ isTrue: false, isOddOrEven: null });
    setIsSeven({ isTrue: false, isOddOrEven: null });
    setIsEight({ isTrue: false, isOddOrEven: null });
    setIsNine({ isTrue: false, isOddOrEven: null });
  };

  const checkNumber = () => {
    switch (currentValue) {
      case '1':
        setIsOne({
          isTrue: true,
          isOddOrEven: allPlaysEvenorOdd().isOddEven,
          playerGuess: allPlaysEvenorOdd().player,
        });
        console.log(setIsOne.playerGuess);
        allPlaysEvenorOdd().player === 'player1'
          ? setPlayer1({ ...player1, guesses: [...player1.guesses, '1'] })
          : setPlayer2({ ...player2, guesses: [...player2.guesses, '1'] });
        break;
      case '2':
        setIsTwo({
          isTrue: true,
          isOddOrEven: allPlaysEvenorOdd().isOddEven,
          playerGuess: allPlaysEvenorOdd().player,
        });
        allPlaysEvenorOdd().player === 'player1'
          ? setPlayer1({ ...player1, guesses: [...player1.guesses, '2'] })
          : setPlayer2({ ...player2, guesses: [...player2.guesses, '2'] });
        break;
      case '3':
        setIsThree({
          isTrue: true,
          isOddOrEven: allPlaysEvenorOdd().isOddEven,
          playerGuess: allPlaysEvenorOdd().player,
        });
        allPlaysEvenorOdd().player === 'player1'
          ? setPlayer1({ ...player1, guesses: [...player1.guesses, '3'] })
          : setPlayer2({ ...player2, guesses: [...player2.guesses, '3'] });
        break;
      case '4':
        setIsFour({
          isTrue: true,
          isOddOrEven: allPlaysEvenorOdd().isOddEven,
          playerGuess: allPlaysEvenorOdd().player,
        });
        setIsFour.playerGuess === 'player1'
          ? setPlayer1({ ...player1, guesses: [...player1.guesses, '4'] })
          : setPlayer2({ ...player2, guesses: [...player2.guesses, '4'] });
        break;
      case '5':
        setIsFive({
          isTrue: true,
          isOddOrEven: allPlaysEvenorOdd().isOddEven,
          playerGuess: allPlaysEvenorOdd().player,
        });
        allPlaysEvenorOdd().player === 'player1'
          ? setPlayer1({ ...player1, guesses: [...player1.guesses, '5'] })
          : setPlayer2({ ...player2, guesses: [...player2.guesses, '5'] });
        break;
      case '6':
        setIsSix({
          isTrue: true,
          isOddOrEven: allPlaysEvenorOdd().isOddEven,
          playerGuess: allPlaysEvenorOdd().player,
        });
        allPlaysEvenorOdd().player === 'player1'
          ? setPlayer1({ ...player1, guesses: [...player1.guesses, '6'] })
          : setPlayer2({ ...player2, guesses: [...player2.guesses, '6'] });
        break;
      case '7':
        setIsSeven({
          isTrue: true,
          isOddOrEven: allPlaysEvenorOdd().isOddEven,
          playerGuess: allPlaysEvenorOdd().player,
        });
        allPlaysEvenorOdd().player === 'player1'
          ? setPlayer1({ ...player1, guesses: [...player1.guesses, '7'] })
          : setPlayer2({ ...player2, guesses: [...player2.guesses, '7'] });
        break;
      case '8':
        setIsEight({
          isTrue: true,
          isOddOrEven: allPlaysEvenorOdd().isOddEven,
          playerGuess: allPlaysEvenorOdd().player,
        });
        allPlaysEvenorOdd().player === 'player1'
          ? setPlayer1({ ...player1, guesses: [...player1.guesses, '8'] })
          : setPlayer2({ ...player2, guesses: [...player2.guesses, '8'] });
        break;
      case '9':
        setIsNine({
          isTrue: true,
          isOddOrEven: allPlaysEvenorOdd().isOddEven,
          playerGuess: allPlaysEvenorOdd().player,
        });
        allPlaysEvenorOdd().player === 'player1'
          ? setPlayer1({ ...player1, guesses: [...player1.guesses, '9'] })
          : setPlayer2({ ...player2, guesses: [...player2.guesses, '9'] });
        break;
      default:
        break;
    }
  };

  const checkIfWinner = () => {
    console.log(isOne);
    if (
      allPlays.includes('1') &&
      allPlays.includes('2') &&
      allPlays.includes('3') &&
      ((isOne.isOddOrEven === 'odd' &&
        isTwo.isOddOrEven === 'odd' &&
        isThree.isOddOrEven === 'odd') ||
        (isOne.isOddOrEven === 'even' &&
          isTwo.isOddOrEven === 'even' &&
          isThree.isOddOrEven === 'even'))
    ) {
      if (
        isOne.isOddOrEven === 'odd' &&
        isTwo.isOddOrEven === 'odd' &&
        isThree.isOddOrEven === 'odd'
      ) {
        setOpenModal({
          open: true,
          player: player2.name,
          message: `${player2.name} won on the top row!`,
        });
        setPlayer2({ ...player2, wins: player2.wins + 1 });
        setPlayer1({ ...player1, losses: player1.losses + 1 });
        setCurrentValue(0);
      }
      if (
        isOne.isOddOrEven === 'even' &&
        isTwo.isOddOrEven === 'even' &&
        isThree.isOddOrEven === 'even'
      ) {
        setOpenModal({
          open: true,
          player: player1.name,
          message: `${player1.name} won on the top row!`,
        });
        setPlayer1({ ...player1, wins: player1.wins + 1 });
        setPlayer2({ ...player2, losses: player2.losses + 1 });
        setCurrentValue(0);
      }
    } else if (
      allPlays.includes('4') &&
      allPlays.includes('5') &&
      allPlays.includes('6') &&
      ((isFour.isOddOrEven === 'odd' &&
        isFive.isOddOrEven === 'odd' &&
        isSix.isOddOrEven === 'odd') ||
        (isFour.isOddOrEven === 'even' &&
          isFive.isOddOrEven === 'even' &&
          isSix.isOddOrEven === 'even'))
    ) {
      if (
        isFour.isOddOrEven === 'odd' &&
        isFive.isOddOrEven === 'odd' &&
        isSix.isOddOrEven === 'odd'
      ) {
        setOpenModal({
          open: true,
          player: player2.name,
          message: `${player2.name} won on the middle row!`,
        });
        setPlayer2({ ...player2, wins: player2.wins + 1 });
        setPlayer1({ ...player1, losses: player1.losses + 1 });
        setCurrentValue(0);
      }
      if (
        isFour.isOddOrEven === 'even' &&
        isFive.isOddOrEven === 'even' &&
        isSix.isOddOrEven === 'even'
      ) {
        setOpenModal({
          open: true,
          player: player1.name,
          message: `${player1.name} won on the middle row!`,
        });
        setPlayer1({ ...player1, wins: player1.wins + 1 });
        setPlayer2({ ...player2, losses: player2.losses + 1 });

        setCurrentValue(0);
      }
    } else if (
      allPlays.includes('7') &&
      allPlays.includes('8') &&
      allPlays.includes('9') &&
      ((isSeven.isOddOrEven === 'odd' &&
        isEight.isOddOrEven === 'odd' &&
        isNine.isOddOrEven === 'odd') ||
        (isSeven.isOddOrEven === 'even' &&
          isEight.isOddOrEven === 'even' &&
          isNine.isOddOrEven === 'even'))
    ) {
      if (
        isSeven.isOddOrEven === 'odd' &&
        isEight.isOddOrEven === 'odd' &&
        isNine.isOddOrEven === 'odd'
      ) {
        setOpenModal({
          open: true,
          player: player2.name,
          message: `${player2.name} won on the bottom row!`,
        });
        setPlayer2({ ...player2, wins: player2.wins + 1 });
        setPlayer1({ ...player1, losses: player1.losses + 1 });
        setCurrentValue(0);
      }
      if (
        isSeven.isOddOrEven === 'even' &&
        isEight.isOddOrEven === 'even' &&
        isNine.isOddOrEven === 'even'
      ) {
        setOpenModal({
          open: true,
          player: player1.name,
          message: `${player1.name} won on the bottom row!`,
        });
        setPlayer1({ ...player1, wins: player1.wins + 1 });
        setPlayer2({ ...player2, losses: player2.losses + 1 });
        setCurrentValue(0);
      }
    } else if (
      allPlays.includes('1') &&
      allPlays.includes('4') &&
      allPlays.includes('7') &&
      ((isOne.isOddOrEven === 'odd' &&
        isFour.isOddOrEven === 'odd' &&
        isSeven.isOddOrEven === 'odd') ||
        (isOne.isOddOrEven === 'even' &&
          isFour.isOddOrEven === 'even' &&
          isSeven.isOddOrEven === 'even'))
    ) {
      if (
        isOne.isOddOrEven === 'odd' &&
        isFour.isOddOrEven === 'odd' &&
        isSeven.isOddOrEven === 'odd'
      ) {
        setOpenModal({
          open: true,
          player: player2.name,
          message: `${player2.name} won on the left column!`,
        });
        setPlayer2({ ...player2, wins: player2.wins + 1 });
        setPlayer1({ ...player1, losses: player1.losses + 1 });
        setCurrentValue(0);
      }
      if (
        isOne.isOddOrEven === 'even' &&
        isFour.isOddOrEven === 'even' &&
        isSeven.isOddOrEven === 'even'
      ) {
        setOpenModal({
          open: true,
          player: player1.name,
          message: `${player1.name} won on the left column!`,
        });
        setPlayer1({ ...player1, wins: player1.wins + 1 });
        setPlayer2({ ...player2, losses: player2.losses + 1 });
        setCurrentValue(0);
      }
    } else if (
      allPlays.includes('2') &&
      allPlays.includes('5') &&
      allPlays.includes('8') &&
      ((isTwo.isOddOrEven === 'odd' &&
        isFive.isOddOrEven === 'odd' &&
        isEight.isOddOrEven === 'odd') ||
        (isTwo.isOddOrEven === 'even' &&
          isFive.isOddOrEven === 'even' &&
          isEight.isOddOrEven === 'even'))
    ) {
      if (
        isTwo.isOddOrEven === 'odd' &&
        isFive.isOddOrEven === 'odd' &&
        isEight.isOddOrEven === 'odd'
      ) {
        setOpenModal({
          open: true,
          player: player2.name,
          message: `${player2.name} won on the middle column!`,
        });
        setPlayer2({ ...player2, wins: player2.wins + 1 });
        setPlayer1({ ...player1, losses: player1.losses + 1 });
        setCurrentValue(0);
      }
      if (
        isTwo.isOddOrEven === 'even' &&
        isFive.isOddOrEven === 'even' &&
        isEight.isOddOrEven === 'even'
      ) {
        setOpenModal({
          open: true,
          player: player1.name,
          message: `${player1.name} won on the middle column!`,
        });
        setPlayer1({ ...player1, wins: player1.wins + 1 });
        setPlayer2({ ...player2, losses: player2.losses + 1 });
        setCurrentValue(0);
      }
    } else if (
      allPlays.includes('3') &&
      allPlays.includes('6') &&
      allPlays.includes('9') &&
      ((isThree.isOddOrEven === 'odd' &&
        isSix.isOddOrEven === 'odd' &&
        isNine.isOddOrEven === 'odd') ||
        (isThree.isOddOrEven === 'even' &&
          isSix.isOddOrEven === 'even' &&
          isNine.isOddOrEven === 'even'))
    ) {
      if (
        isThree.isOddOrEven === 'odd' &&
        isSix.isOddOrEven === 'odd' &&
        isNine.isOddOrEven === 'odd'
      ) {
        setOpenModal({
          open: true,
          player: player2.name,
          message: `${player2.name} won on the right column!`,
        });
        setPlayer2({ ...player2, wins: player2.wins + 1 });
        setPlayer1({ ...player1, losses: player1.losses + 1 });
        setCurrentValue(0);
      }
      if (
        isThree.isOddOrEven === 'even' &&
        isSix.isOddOrEven === 'even' &&
        isNine.isOddOrEven === 'even'
      ) {
        setOpenModal({
          open: true,
          player: player1.name,
          message: `${player1.name} won on the right column!`,
        });
        setPlayer1({ ...player1, wins: player1.wins + 1 });
        setPlayer2({ ...player2, losses: player2.losses + 1 });
        setCurrentValue(0);
      }
    } else if (
      allPlays.includes('3') &&
      allPlays.includes('5') &&
      allPlays.includes('7') &&
      ((isThree.isOddOrEven === 'odd' &&
        isFive.isOddOrEven === 'odd' &&
        isSeven.isOddOrEven === 'odd') ||
        (isThree.isOddOrEven === 'even' &&
          isFive.isOddOrEven === 'even' &&
          isSeven.isOddOrEven === 'even'))
    ) {
      if (
        isThree.isOddOrEven === 'odd' &&
        isFive.isOddOrEven === 'odd' &&
        isSeven.isOddOrEven === 'odd'
      ) {
        setOpenModal({
          open: true,
          player: player2.name,
          message: `${player2.name} won diagnoally!`,
        });
        setPlayer2({ ...player2, wins: player2.wins + 1 });
        setPlayer1({ ...player1, losses: player1.losses + 1 });
        setCurrentValue(0);
      }
      if (
        isThree.isOddOrEven === 'even' &&
        isFive.isOddOrEven === 'even' &&
        isSeven.isOddOrEven === 'even'
      ) {
        setOpenModal({
          open: true,
          player: player1.name,
          message: `${player1.name} won diagnoally!`,
        });
        setPlayer1({ ...player1, wins: player1.wins + 1 });
        setPlayer2({ ...player2, losses: player2.losses + 1 });
        setCurrentValue(0);
      }
    } else if (
      allPlays.includes('1') &&
      allPlays.includes('5') &&
      allPlays.includes('9') &&
      ((isOne.isOddOrEven === 'odd' &&
        isFive.isOddOrEven === 'odd' &&
        isNine.isOddOrEven === 'odd') ||
        (isOne.isOddOrEven === 'even' &&
          isFive.isOddOrEven === 'even' &&
          isNine.isOddOrEven === 'even'))
    ) {
      if (
        isOne.isOddOrEven === 'odd' &&
        isFive.isOddOrEven === 'odd' &&
        isNine.isOddOrEven === 'odd'
      ) {
        setOpenModal({
          open: true,
          player: player2.name,
          message: `${player2.name} won diagnoally!`,
        });
        setPlayer2({ ...player2, wins: player2.wins + 1 });
        setPlayer1({ ...player1, losses: player1.losses + 1 });
        setCurrentValue(0);
      }
      if (
        isOne.isOddOrEven === 'even' &&
        isFive.isOddOrEven === 'even' &&
        isNine.isOddOrEven === 'even'
      ) {
        setOpenModal({
          open: true,
          player: player1.name,
          message: `${player1.name} won diagnoally!`,
        });
        setPlayer1({ ...player1, wins: player1.wins + 1 });
        setPlayer2({ ...player2, losses: player2.losses + 1 });
        setCurrentValue(0);
      }
    }
  };

  return startGame ? (
    <ThemeProvider theme={theme}>
      <Box className='overall-container' sx={{ flexGrow: 1 }}>
        <ModalWinOrLose handleCloseModal={handleClose} showModal={openModal} />
        <Card>
          <CardContent>
            <Grid container sx={{ maxWidth: '450px', padding: '10px' }}>
              <Grid item xs={12} sx={{ marginBottom: '10px' }}>
                <Typography variant='h4'>Tic-Tac-Toe</Typography>
              </Grid>
              <Grid className='item-container' item xs={4}>
                <Button
                  className='button-div button-1'
                  value='1'
                  onClick={(e) => handleClick(e)}
                >
                  {isOne.isTrue && isOne.isOddOrEven === 'even'
                    ? 'X'
                    : isOne.isTrue && isOne.isOddOrEven === 'odd'
                    ? 'O'
                    : ''}
                </Button>
              </Grid>
              <Grid className='item-container' item xs={4}>
                <Button
                  className='button-div button-2'
                  value='2'
                  onClick={(e) => handleClick(e)}
                >
                  {isTwo.isTrue && isTwo.isOddOrEven === 'even'
                    ? 'X'
                    : isTwo.isTrue && isTwo.isOddOrEven === 'odd'
                    ? 'O'
                    : ''}
                </Button>
              </Grid>
              <Grid className='item-container' item xs={4}>
                <Button
                  className='button-div button-3'
                  value='3'
                  onClick={(e) => handleClick(e)}
                >
                  {isThree.isTrue && isThree.isOddOrEven === 'even'
                    ? 'X'
                    : isThree.isTrue && isThree.isOddOrEven === 'odd'
                    ? 'O'
                    : ''}
                </Button>
              </Grid>

              <Grid className='item-container' item xs={4}>
                <Button
                  className='button-div button-4'
                  value='4'
                  onClick={(e) => handleClick(e)}
                >
                  {isFour.isTrue && isFour.isOddOrEven === 'even'
                    ? 'X'
                    : isFour.isTrue && isFour.isOddOrEven === 'odd'
                    ? 'O'
                    : ''}
                </Button>
              </Grid>
              <Grid className='item-container' item xs={4}>
                <Button
                  className='button-div button-5'
                  value='5'
                  onClick={(e) => handleClick(e)}
                >
                  {isFive.isTrue && isFive.isOddOrEven === 'even'
                    ? 'X'
                    : isFive.isTrue && isFive.isOddOrEven === 'odd'
                    ? 'O'
                    : ''}
                </Button>
              </Grid>
              <Grid className='item-container' item xs={4}>
                <Button
                  className='button-div button-6'
                  value='6'
                  onClick={(e) => handleClick(e)}
                >
                  {isSix.isTrue && isSix.isOddOrEven === 'even'
                    ? 'X'
                    : isSix.isTrue && isSix.isOddOrEven === 'odd'
                    ? 'O'
                    : ''}
                </Button>
              </Grid>

              <Grid className='item-container' item xs={4}>
                <Button
                  className='button-div button-7'
                  value='7'
                  onClick={(e) => handleClick(e)}
                >
                  {isSeven.isTrue && isSeven.isOddOrEven === 'even'
                    ? 'X'
                    : isSeven.isTrue && isSeven.isOddOrEven === 'odd'
                    ? 'O'
                    : ''}
                </Button>
              </Grid>
              <Grid className='item-container' item xs={4}>
                <Button
                  className='button-div button-8'
                  value='8'
                  onClick={(e) => handleClick(e)}
                >
                  {isEight.isTrue && isEight.isOddOrEven === 'even'
                    ? 'X'
                    : isEight.isTrue && isEight.isOddOrEven === 'odd'
                    ? 'O'
                    : ''}
                </Button>
              </Grid>
              <Grid className='item-container' item xs={4}>
                <Button
                  className='button-div button-9'
                  value='9'
                  onClick={(e) => handleClick(e)}
                >
                  {isNine.isTrue && isNine.isOddOrEven === 'even'
                    ? 'X'
                    : isNine.isTrue && isNine.isOddOrEven === 'odd'
                    ? 'O'
                    : ''}
                </Button>
              </Grid>
            </Grid>
            <Grid container sx={{ padding: '10px' }}>
              <Grid item xs={12}>
                <Button
                  sx={{ width: '100%' }}
                  variant='contained'
                  color='success'
                  onClick={handleClose}
                >
                  Clear Board
                </Button>
              </Grid>

              <Grid item xs={8}>
                <Typography variant='h6'>Player 1: {player1.name}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant='h6'>Wins: {player1.wins}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant='h6'>Player 2: {player2.name}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant='h6'>Wins: {player2.wins}</Typography>
              </Grid>
              <Grid item xs={12} sx={{ marginBottom: '10px' }}>
                <Typography variant='h6'>
                  Total games: {player1.wins + player2.wins}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant='contained'
                  sx={{
                    width: '100%',
                  }}
                  color='secondary'
                  onClick={handleStartOver}
                >
                  Start over with new players
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  ) : (
    <>
      <ThemeProvider theme={theme}>
        <StartMenu
          player1Name={player1.name}
          player1Letters={player1Letters}
          player2Letters={player2Letters}
          handleKey1Down={handleKey1Down}
          handleKey2Down={handleKey2Down}
          handlePlayer1Change={handlePlayer1Change}
          handlePlayer1Submit={handlePlayer1Submit}
          handlePlayer2Change={handlePlayer2Change}
          handlePlayer2Submit={handlePlayer2Submit}
        />
      </ThemeProvider>
    </>
  );
};

export default App;
