import { useState } from "react";
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Container, Box, Typography, TextField } from '@mui/material';
import { useRouter } from 'next/router';

const theme = createTheme({
  palette: {
    primary: {
      main: '#542307'
    },
    secondary: {
      main: '#DCCCC0'
    }
  },
  typography: {
    fontFamily: 'Nunito Sans',
    fontWeightRegular: 400,
    fontWeightBold: 700
  }
});

export default function AddRecipeForm(props) {
  const [website, setWebsite] = useState(props.website || "");
  const router = useRouter();

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
    try {
      const res = await fetch("/api/get-recipe/", fetchOptions);
      const recipeJson = await res.json();
      console.log('Recipe data:', recipeJson);
      const response = await axios.post('/api/recipes', recipeJson);
      console.log("Axios request successful", response);
      let recipeId = await JSON.parse(response.data);
      recipeId = recipeId.id
      await router.push(`/recipes/${recipeId}`);
    } catch (error) {
      console.log("Axios request error", error);
    }
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

