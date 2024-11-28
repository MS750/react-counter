import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';

const Counter = () => {
  // State to keep track of the counter value
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the counter
  const decrement = () => {
    setCount(count - 1);
  };
  const RESET = () => {
    setCount(0)
  }

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="end" 
      height="95vh" 
    //   bgcolor="#f5f5f5"
    >
         <Typography variant="h4" color='white'>
        Counter: {count}
      </Typography>
      <Box>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={increment} 
          style={{ margin: '10px' }}
        >
          Increment
        </Button>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={decrement} 
          style={{ margin: '10px' }}
        >
          Decrement
        </Button>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={RESET} 
          style={{ margin: '10px' }}
        >
          RESET
        </Button>
      </Box>
    </Box>
  );
};

export default Counter;
