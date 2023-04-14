import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    //Main colour, dark brown
    primary: {
      main: "#542307",
    },
    //Secondary colour, light brown with reduced opacity
    secondary: {
      main: "rgba(220, 204, 192, 0.5)",
    },
  },
  //Nunito Sans font
  typography: {
    fontFamily: "Nunito Sans",
    fontWeightRegular: 400,
    fontWeightBold: 700,
  },
});

export default function NotFound() {
  return (
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", mt: 15, mb: 15}}>
      <img src="https://raw.githubusercontent.com/niamlaylor/recipes-next/main/public/404-egg-icon.png" />
      <Typography variant="h1">404</Typography>
      <Typography variant="h5">Sorry, this page was not found.</Typography>
      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{ mt: 5 }}
        href="/"
      >
        Return Home
      </Button>
    </Box>
  );
}
