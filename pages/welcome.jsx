import React from 'react';
import Hero from '../components/welcome/Hero';
import { ThemeProvider } from '@mui/material/styles';


export default function Welcome({ theme }) {
  return (
  <ThemeProvider theme={theme}>
    <Hero></Hero>  
  </ThemeProvider>
  )
}