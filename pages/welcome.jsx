import React from 'react';
import Hero from '../components/welcome/Hero';
import { ThemeProvider } from '@mui/material/styles';
import Header from '../components/navigation/Header';


export default function Welcome({ theme }) {
  return (
  <ThemeProvider theme={theme}>
    <Header></Header>
    <Hero></Hero>  
  </ThemeProvider>
  )
}