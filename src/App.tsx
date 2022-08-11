import React from 'react';
import './App.css';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Header from './components/Header';

const useStyles = makeStyles((theme) => ({
  appWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    color: 'white',
    fontFamily: 'Molot',
    background: '#120837',
    paddingLeft: 120,
    paddingRight: 120,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Box className={classes.appWrapper}>
      <Header/>
    </Box>
  );
}

export default App;