//import styles from '../../styles/forms/AddRecipeForm.module.css'
import { useState } from "react";
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
  const handleSubmit = event => event.preventDefault();

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
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, minWidth: 500 }}>
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

    {/* PREVIOUS STYLING: 
    <section className={styles.formSection}>
      <form className={styles.addRecipeForm} onSubmit={event => event.preventDefault()} autoComplete="off">
        <input
          className ={styles.addRecipeInput}
          name="url"
          type="url"
          placeholder="Paste a recipe URL"
          value={website}
          onChange={event => setWebsite(event.target.value)}
        />
         <button className={styles.addRecipeButton} type="submit">Submit</button>
      </form>
    </section>*/}