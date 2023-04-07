//import styles from '../../styles/forms/AddRecipeForm.module.css'
import { useState } from "react";
import axios from 'axios';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

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


export default function AddRecipeForm(props) {

  const [website, setWebsite] = useState(props.website || "");

  const getRecipe = async (event) => {
    event.preventDefault();
    const fetchOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({
        url: event.target.url.value
      })
    };
    const recipeData = await fetch("/api/get-recipe/", fetchOptions).then(
      (res) => {
        res.json().then((recipeJson) => {
          console.log('Recipe data:', recipeJson);
          axios.post('/api/recipes', recipeJson).then((response) => {
            console.log("Axios request successful");
            console.log(response);
          }).catch((error) => {
            console.log("Axios request error");
            console.log(error);
          });
        });
      }
    );
    return recipeData;
  };

  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 6,
          marginBottom: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Paste a Recipe URL
        </Typography>
        <Box component="form" onSubmit={getRecipe} noValidate sx={{ mt: 1, minWidth: 500 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="url"
            label="Recipe URL"
            name="url"
            autoComplete="off"
            autoFocus
            value={website}
            onChange={event => setWebsite(event.target.value)}
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            size="large"
            sx={{ mt: 3, mb: 2 }}
          >
            SUBMIT
          </Button>
        </Box>
      </Box>
    </Container>
    </ThemeProvider>
  );
};
