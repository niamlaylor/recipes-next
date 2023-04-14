import React from 'react';
import NotFound from '../components/errors/NotFound';
import { ThemeProvider } from '@mui/material/styles';
import Header from '../components/navigation/Header';


export default function Welcome({ theme }) {
  return (
  <ThemeProvider theme={theme}>
    <Header></Header>
    <NotFound></NotFound>  
  </ThemeProvider>
  )
}