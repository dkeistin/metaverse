import React from 'react';
import './App.css';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Header from './components/Header';
import Main from './components/Main';
import Blog from './components/Blog';
import Footer from './components/Footer';

const useStyles = makeStyles((theme) => ({
  appWrapper: {
    color: 'white',
    fontFamily: 'Molot',
    background: '#120837',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Box className={classes.appWrapper}>
      <Header/>
      <Main/>
      <Blog/>
      <Footer/>
    </Box>
  );
}

export default App;