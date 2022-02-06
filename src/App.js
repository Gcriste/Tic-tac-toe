import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import ModalWinOrLose from './Components/ModalWinOrLose';

import './App.css';

const App = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [allPlays, setAllPlays] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [oddOrEven, setOddOrEven] = useState('');

  const [isOne, setIsOne] = useState(false);
  const [isTwo, setIsTwo] = useState(false);
  const [isThree, setIsThree] = useState(false);
  const [isFour, setIsFour] = useState(false);
  const [isFive, setIsFive] = useState(false);
  const [isSix, setIsSix] = useState(false);
  const [isSeven, setIsSeven] = useState(false);
  const [isEight, setIsEight] = useState(false);
  const [isNine, setIsNine] = useState(false);

  const [oneValue, setOneValue] = useState(null);
  const [twoValue, setTwoValue] = useState(null);
  const [threeValue, setThreeValue] = useState(null);
  const [fourValue, setFourValue] = useState(null);
  const [fiveValue, setFiveValue] = useState(null);
  const [sixValue, setSixValue] = useState(null);
  const [sevenValue, setSevenValue] = useState(null);
  const [eightValue, setEightValue] = useState(null);
  const [nineValue, setNineValue] = useState(null);

  const handleClose = () => {
    setOpenModal(false);
    setAllPlays([]);
    clearBoard();
  };

  const handleClick = (e) => {
    setCurrentValue(e.target.value);
    setAllPlays([...allPlays, e.target.value]);
  };

  useEffect(() => {
    checkIfWinner();
    checkNumber();
  }, [allPlays]);

  const allPlaysEvenorOdd = () => {
    return allPlays.length % 2 === 0 ? 'odd' : 'even';
  };

  const clearBoard = () => {
    setIsOne(null);
    setIsTwo(null);
    setIsThree(null);
    setIsFour(null);
    setIsFive(null);
    setIsSix(null);
    setIsSeven(null);
    setIsEight(null);
    setIsNine(null);
    setIsTwo(null);
  };

  const checkNumber = () => {
    if (currentValue === '1') {
      setOddOrEven(!oddOrEven);
      setIsOne(true);
      setOneValue(allPlaysEvenorOdd());
    } else if (currentValue === '2') {
      setOddOrEven(!oddOrEven);
      setIsTwo(true);
      setTwoValue(allPlaysEvenorOdd());
    } else if (currentValue === '3') {
      setOddOrEven(!oddOrEven);
      setIsThree(true);
      setThreeValue(allPlaysEvenorOdd());
    } else if (currentValue === '4') {
      setOddOrEven(!oddOrEven);
      setIsFour(true);
      setFourValue(allPlaysEvenorOdd());
    } else if (currentValue === '5') {
      setOddOrEven(!oddOrEven);
      setIsFive(true);
      setFiveValue(allPlaysEvenorOdd());
    } else if (currentValue === '6') {
      setOddOrEven(!oddOrEven);
      setIsSix(true);
      setSixValue(allPlaysEvenorOdd());
    } else if (currentValue === '7') {
      setOddOrEven(!oddOrEven);
      setIsSeven(true);
      setSevenValue(allPlaysEvenorOdd());
    } else if (currentValue === '8') {
      setOddOrEven(!oddOrEven);
      setIsEight(true);
      setEightValue(allPlaysEvenorOdd());
    } else if (currentValue === '9') {
      setOddOrEven(!oddOrEven);
      setIsNine(true);
      setNineValue(allPlaysEvenorOdd());
    }
  };

  const checkIfWinner = () => {
    if (
      allPlays.includes('1') &&
      allPlays.includes('2') &&
      allPlays.includes('3') &&
      ((oneValue === 'odd' && twoValue === 'odd' && threeValue === 'odd') ||
        (oneValue === 'even' && twoValue === 'even' && threeValue === 'even'))
    ) {
      setOpenModal(true);
      setAllPlays([]);
      setCurrentValue(0);
    } else if (
      allPlays.includes('4') &&
      allPlays.includes('5') &&
      allPlays.includes('6') &&
      ((fourValue === 'odd' && fiveValue === 'odd' && sixValue === 'odd') ||
        (fourValue === 'even' && fiveValue === 'even' && sixValue === 'even'))
    ) {
      setOpenModal(true);
      setAllPlays([]);
      setCurrentValue(0);
    } else if (
      allPlays.includes('7') &&
      allPlays.includes('8') &&
      allPlays.includes('9') &&
      ((sevenValue === 'odd' && eightValue === 'odd' && nineValue === 'odd') ||
        (sevenValue === 'even' &&
          eightValue === 'even' &&
          nineValue === 'even'))
    ) {
      setOpenModal(true);
      setAllPlays([]);
      setCurrentValue(0);
    } else if (
      allPlays.includes('1') &&
      allPlays.includes('4') &&
      allPlays.includes('7') &&
      ((oneValue === 'odd' && fourValue === 'odd' && sevenValue === 'odd') ||
        (oneValue === 'even' && fourValue === 'even' && sevenValue === 'even'))
    ) {
      setOpenModal(true);
      setAllPlays([]);
      setCurrentValue(0);
    } else if (
      allPlays.includes('2') &&
      allPlays.includes('5') &&
      allPlays.includes('8') &&
      ((twoValue === 'odd' && fiveValue === 'odd' && eightValue === 'odd') ||
        (twoValue === 'even' && fiveValue === 'even' && eightValue === 'even'))
    ) {
      setOpenModal(true);
      setAllPlays([]);
      setCurrentValue(0);
    } else if (
      allPlays.includes('3') &&
      allPlays.includes('6') &&
      allPlays.includes('9') &&
      ((threeValue === 'odd' && sixValue === 'odd' && nineValue === 'odd') ||
        (threeValue === 'even' && sixValue === 'even' && nineValue === 'even'))
    ) {
      setOpenModal(true);
      setAllPlays([]);
      setCurrentValue(0);
    } else if (
      allPlays.includes('3') &&
      allPlays.includes('5') &&
      allPlays.includes('7') &&
      ((threeValue === 'odd' && fiveValue === 'odd' && sevenValue === 'odd') ||
        (threeValue === 'even' &&
          fiveValue === 'even' &&
          sevenValue === 'even'))
    ) {
      setOpenModal(true);
      setAllPlays([]);
      setCurrentValue(0);
    } else if (
      allPlays.includes('1') &&
      allPlays.includes('5') &&
      allPlays.includes('9') &&
      ((oneValue === 'odd' && fiveValue === 'odd' && nineValue === 'odd') ||
        (oneValue === 'even' && fiveValue === 'even' && nineValue === 'even'))
    ) {
      setOpenModal(true);
      setAllPlays([]);
      setCurrentValue(0);
    }
  };

  return (
    <Box className='overall-container' sx={{ flexGrow: 1 }}>
      <ModalWinOrLose handleClose={handleClose} showModal={openModal} />
      <h2>Tic Tac Toe</h2>
      <Grid container spacing={2} sx={{ maxWidth: '450px' }}>
        <Grid className='item-container' item xs={4}>
          <Button
            className='button-div button-1'
            value='1'
            onClick={(e) => handleClick(e)}
          >
            {isOne && oneValue === 'even'
              ? 'X'
              : isOne && oneValue === 'odd'
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
            {isTwo && twoValue === 'even'
              ? 'X'
              : isTwo && twoValue === 'odd'
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
            {isThree && threeValue === 'even'
              ? 'X'
              : isThree && threeValue === 'odd'
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
            {isFour && fourValue === 'even'
              ? 'X'
              : isFour && fourValue === 'odd'
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
            {isFive && fiveValue === 'even'
              ? 'X'
              : isFive && fiveValue === 'odd'
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
            {isSix && sixValue === 'even'
              ? 'X'
              : isSix && sixValue === 'odd'
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
            {isSeven && sevenValue === 'even'
              ? 'X'
              : isSeven && sevenValue === 'odd'
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
            {isEight && eightValue === 'even'
              ? 'X'
              : isEight && eightValue === 'odd'
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
            {isNine && nineValue === 'even'
              ? 'X'
              : isNine && nineValue === 'odd'
              ? 'O'
              : ''}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
