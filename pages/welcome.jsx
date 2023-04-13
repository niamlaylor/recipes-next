import React from 'react';
import Header from '../components/navigation/Header';
import { ThemeProvider } from '@mui/material/styles';

export default function Welcome({ theme }) {
  return (
  <ThemeProvider theme={theme}>
  <Header>  
  </Header>
  </ThemeProvider>
  )
}