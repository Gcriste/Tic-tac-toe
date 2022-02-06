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
  // const [oddOrEven, setOddOrEven] = useState('');

  const [isOne, setIsOne] = useState({ isTrue: false, isOddOrEven: null });
  const [isTwo, setIsTwo] = useState({ isTrue: false, isOddOrEven: null });
  const [isThree, setIsThree] = useState({ isTrue: false, isOddOrEven: null });
  const [isFour, setIsFour] = useState({ isTrue: false, isOddOrEven: null });
  const [isFive, setIsFive] = useState({ isTrue: false, isOddOrEven: null });
  const [isSix, setIsSix] = useState({ isTrue: false, isOddOrEven: null });
  const [isSeven, setIsSeven] = useState({ isTrue: false, isOddOrEven: null });
  const [isEight, setIsEight] = useState({ isTrue: false, isOddOrEven: null });
  const [isNine, setIsNine] = useState({ isTrue: false, isOddOrEven: null });

  const handleClose = () => {
    setOpenModal(false);

    clearBoard();
  };

  const handleClick = (e) => {
    setCurrentValue(e.target.value);
    setAllPlays([...allPlays, e.target.value]);
  };

  useEffect(() => {
    checkNumber();
    checkIfWinner();
  }, [allPlays]);

  const allPlaysEvenorOdd = () => {
    return allPlays.length % 2 === 0 ? 'odd' : 'even';
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
  };

  const checkNumber = () => {
    switch (currentValue) {
      case '1':
        setIsOne({ isTrue: true, isOddOrEven: allPlaysEvenorOdd() });
        break;
      case '2':
        setIsTwo({ isTrue: true, isOddOrEven: allPlaysEvenorOdd() });
        break;
      case '3':
        setIsThree({ isTrue: true, isOddOrEven: allPlaysEvenorOdd() });
        break;
      case '4':
        setIsFour({ isTrue: true, isOddOrEven: allPlaysEvenorOdd() });
        break;
      case '5':
        setIsFive({ isTrue: true, isOddOrEven: allPlaysEvenorOdd() });
        break;
      case '6':
        setIsSix({ isTrue: true, isOddOrEven: allPlaysEvenorOdd() });
        break;
      case '7':
        setIsSeven({ isTrue: true, isOddOrEven: allPlaysEvenorOdd() });
        break;
      case '8':
        setIsEight({ isTrue: true, isOddOrEven: allPlaysEvenorOdd() });
        break;
      case '9':
        setIsNine({ isTrue: true, isOddOrEven: allPlaysEvenorOdd() });
        break;
      default:
        setIsOne({ isTrue: true, isOddOrEven: allPlaysEvenorOdd() });
        break;
    }
    console.log(currentValue);
  };

  const checkIfWinner = () => {
    console.log(allPlays);
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
        setOpenModal(true);

        setCurrentValue(0);
        console.log('all os at 123');
      }
      if (
        isOne.isOddOrEven === 'even' &&
        isTwo.isOddOrEven === 'even' &&
        isThree.isOddOrEven === 'even'
      ) {
        setOpenModal(true);

        setCurrentValue(0);
        console.log('all xs at 123');
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
        setOpenModal(true);

        setCurrentValue(0);
        console.log('all os at 456');
      }
      if (
        isFour.isOddOrEven === 'even' &&
        isFive.isOddOrEven === 'even' &&
        isSix.isOddOrEven === 'even'
      ) {
        setOpenModal(true);

        setCurrentValue(0);
        console.log('all xs at 456');
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
        setOpenModal(true);

        setCurrentValue(0);
        console.log('all os at 789');
      }
      if (
        isSeven.isOddOrEven === 'even' &&
        isEight.isOddOrEven === 'even' &&
        isNine.isOddOrEven === 'even'
      ) {
        setOpenModal(true);

        setCurrentValue(0);
        console.log('all xs at 789');
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
        setOpenModal(true);

        setCurrentValue(0);
        console.log('all os at 147');
      }
      if (
        isOne.isOddOrEven === 'even' &&
        isFour.isOddOrEven === 'even' &&
        isSeven.isOddOrEven === 'even'
      ) {
        setOpenModal(true);

        setCurrentValue(0);
        console.log('all xs at 147');
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
        setOpenModal(true);

        setCurrentValue(0);
        console.log('all os at 258');
      }
      if (
        isTwo.isOddOrEven === 'even' &&
        isFive.isOddOrEven === 'even' &&
        isEight.isOddOrEven === 'even'
      ) {
        setOpenModal(true);

        setCurrentValue(0);
        console.log('all xs at 258');
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
        setOpenModal(true);

        setCurrentValue(0);
        console.log('all os at 369');
      }
      if (
        isThree.isOddOrEven === 'even' &&
        isSix.isOddOrEven === 'even' &&
        isNine.isOddOrEven === 'even'
      ) {
        setOpenModal(true);

        setCurrentValue(0);
        console.log('all xs at 369');
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
        setOpenModal(true);

        setCurrentValue(0);
        console.log('all os at 357');
      }
      if (
        isThree.isOddOrEven === 'even' &&
        isFive.isOddOrEven === 'even' &&
        isSeven.isOddOrEven === 'even'
      ) {
        setOpenModal(true);

        setCurrentValue(0);
        console.log('all xs at 357');
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
        setOpenModal(true);

        setCurrentValue(0);
        console.log('all os at 159');
      }
      if (
        isOne.isOddOrEven === 'even' &&
        isFive.isOddOrEven === 'even' &&
        isNine.isOddOrEven === 'even'
      ) {
        setOpenModal(true);

        setCurrentValue(0);
        console.log('all xs at 359');
      }
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
    </Box>
  );
};

export default App;
