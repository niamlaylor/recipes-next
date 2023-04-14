import React from 'react';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import styled from '@emotion/styled';

//mediaquery to ignore footer in Print view
const PrintFooter = styled.footer`
@media print {
  display: none
}
`
const theme = createTheme({
  
    palette: {
      //Main colour, dark brown
      primary: {
        main: '#542307'
      },
      //Secondary colour, light brown
      secondary: {
        main: '#DCCCC0'
      }
    },
    //Nunito Sans font
    typography: {
      fontFamily: 'Nunito Sans',
      fontWeightRegular: 400,
      fontWeightBold: 700
    }
  });

export default function Footer( ) {
    return (
      <PrintFooter>
          <ThemeProvider theme={theme}>
              <Divider sx={{
                        mt: 5
                        }}>
              </Divider>
                <Container maxWidth="lg" position="sticky">
                    <Box sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        mb: 5,
                        mt: 5
                    }}>
                        <Typography variant="body2" color='black'>
                            Copyright ©2023 Sifter. All rights reserved.
                        </Typography>
                    </Box>
                </Container>
        </ThemeProvider>
      </PrintFooter>
    );
  };