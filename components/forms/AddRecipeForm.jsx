import { useState } from "react";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Button,
  Container,
  Box,
  Typography,
  TextField,
  Modal,
} from "@mui/material";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#542307",
    },
    secondary: {
      main: "#DCCCC0",
    },
  },
  typography: {
    fontFamily: "Nunito Sans",
    fontWeightRegular: 400,
    fontWeightBold: 700,
  },
});

export default function AddRecipeForm(props) {
  //State for website
  const [website, setWebsite] = useState(props.website || "");
  const router = useRouter();
  const { data } = useSession();
  //State for Loading Popup
  const [open, setOpen] = useState(false);
  //State for Error Popup
  const [error, setError] = useState(false);
  const handleErrorOpen = () => setError(true);
  const handleErrorClose = () => setError(false);

  const ErrorPopup = function () {
    //Style for error popup modal
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      border: "2px solid #542307",
      boxShadow: 24,
      p: 4,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    };
  
    //Return error popup modal
    return (
      <div>
        <Modal
          open={error}
          onClose={handleErrorClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img src="https://raw.githubusercontent.com/niamlaylor/recipes-next/main/public/404-egg-icon.png"></img>
            <Typography
              sx={{ color: "#542307" }}
              id="transition-modal-title"
              variant="h4"
              component="h2"
            >
              Sorry!
            </Typography>
            <Typography
              sx={{ color: "#542307" }}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              This recipe doesn't contain the correct formatting to parse. Please try submitting a different recipe.
            </Typography>
            <Button 
            sx={[
              {
                '&:hover': {
                  color: theme.palette.primary.main,
                  backgroundColor: 'white',
                  border: 1,
                  borderColor: theme.palette.primary.main
                },
              backgroundColor: theme.palette.primary.main, 
              color: 'white',
              border: 1,
              borderColor: theme.palette.primary.main
              },
            ]} 
            onClick={handleErrorClose}>
            Close
          </Button>
          </Box>
        </Modal>
      </div>
    );
  };
  

  const LoadingPopup = function () {
    //Style for loading popup modal
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      border: "2px solid #542307",
      boxShadow: 24,
      p: 4,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };

    //Return loading popup modal
    return (
      <div>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img src="https://raw.githubusercontent.com/niamlaylor/recipes-next/main/public/sifter-loading-5s.gif"></img>
            <Typography
              sx={{ color: "#542307" }}
              id="transition-modal-title"
              variant="h4"
              component="h2"
            >
              Loading...
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  };

  //Async function to get recipe
  const getRecipe = async (event) => {
    event.preventDefault();
    const fetchOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        url: event.target.url.value,
      }),
    };
    try {
      setOpen(true);
      setError(false);
      const res = await fetch("/api/get-recipe/", fetchOptions);
      const recipeJson = await res.json();
      console.log("Recipe data:", recipeJson);
      const recipeJsonWithId = {
        ...recipeJson,
        userId: data.user.id,
      };
      const response = await axios.post("/api/recipes", recipeJsonWithId);
      console.log("Axios request successful", response);
      setOpen(false);
      const recipeId = await JSON.parse(response.data);
      await router.push(`/recipes/${recipeId.id}`);
    } catch (error) {
      setError(true);
      setOpen(false);
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Paste a Recipe URL
          </Typography>
          <Box
            component="form"
            onSubmit={getRecipe}
            noValidate
            sx={{ minWidth: 500, display: "flex", flexWrap: "nowrap" }}
          >
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
              onChange={(event) => setWebsite(event.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ mt: 3, mb: 2, ml: 2 }}
            >
              GET RECIPE
            </Button>
          </Box>
        </Box>
      </Container>
      <LoadingPopup></LoadingPopup>
      <ErrorPopup></ErrorPopup>
    </ThemeProvider>
  );
}
