import { useState } from "react";
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Container, Box, Typography, TextField, Modal } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useRouter } from 'next/router';  
import { useSession } from 'next-auth/react';

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
  //State for website
  const [website, setWebsite] = useState(props.website || "");
  const router = useRouter();
  const { data } = useSession();

  const LoadingPopup = function() {
    //State for Loading Popup
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  //Style for loading popup modal
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #542307',
    boxShadow: 24,
    p: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //display: open ? "flex" : "none"
  };

  //Return loading popup modal
  return (
    <div>
      <Button onClick={handleOpen}>Loading Test...</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src="https://raw.githubusercontent.com/niamlaylor/recipes-next/main/public/sifter-loading-5s.gif"></img>
          <Typography sx={{color: '#542307'}} id="transition-modal-title" variant="h4" component="h2">
          Loading...
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

//Async function to get recipe
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
      const recipeJsonWithId = {
        ...recipeJson,
        userId: data.user.id
      };
      const response = await axios.post('/api/recipes', recipeJsonWithId);
      console.log("Axios request successful", response);
      const recipeId = await JSON.parse(response.data);
      await router.push(`/recipes/${recipeId.id}`);
    } catch (error) {
      console.log("Axios request error", error);
    }
  };

  const handleClipboardButtonClick = async (event) => {
    try {
      const clipboardValue = await navigator.clipboard.readText();
      setWebsite(clipboardValue);
      console.log(`Pasted from your clipboard: ${website}`)
      await getRecipe(event)
    } catch (e) {
      console.log(`Unable to read your clipboard with error: ${e}`)
    };
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
          <Box component="form" onSubmit={getRecipe} noValidate sx={{ minWidth: 500, display: 'flex', flexWrap: 'nowrap' }}>
            <TextField
              margin="normal"
              required
              sx={{ width: 370 }}
              id="url"
              label="Paste a recipe URL"
              name="url"
              autoComplete="off"
              autoFocus
              value={website}
              onChange={event => setWebsite(event.target.value)}
            />
            <Button
              
              type="submit"
              variant="contained"
              size="large"
              sx={{ mt: 3, mb: 2, ml: 2 }}
            >
              GET RECIPE
            </Button>
            <Button
              onClick={handleClipboardButtonClick}
              type="submit"
              variant="contained"
              size="large"
              sx={{ mt: 3, mb: 2, ml: 0.5, backgroundColor: '#AEC5D2' }}
            >
              <ContentCopyIcon/>
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

