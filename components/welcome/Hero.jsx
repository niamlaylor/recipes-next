import React from "react";
import { Container } from "@mui/system";
import { Button, Typography, Box } from "@mui/material";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    //Main colour, dark brown
    primary: {
      main: '#542307'
    },
    //Secondary colour, light brown with reduced opacity
    secondary: {
      main: 'rgba(220, 204, 192, 0.5)'
    }
  },
  //Nunito Sans font
  typography: {
    fontFamily: 'Nunito Sans',
    fontWeightRegular: 400,
    fontWeightBold: 700
  }
});

const heroImage = "https://raw.githubusercontent.com/niamlaylor/recipes-next/main/public/burger-1920x1280.jpg";

const styles = {
  boxContainer: {
      height: 600,
      backgroundImage: `url(${heroImage})`,
      backgroundPosition: '25% 40%'
  },
  overlay: {
    height: 500,
    width: '100%',
    paddingTop: 100,
    paddingBottom: 0,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  }
};

export default function Hero() {
  return (
      <Box style={styles.boxContainer}>
      <div style={styles.overlay}>
        <img></img>
        <Typography variant="h2" textAlign='center' color='white' sx={{ mb: 3 }}>Hungry?</Typography>
        <Typography variant="h4" textAlign='center' color='white' sx={{ mb: 3 }}>No profound stories, no ads, no pop-ups. <br /> (Maybe - cookies.)</Typography>
        <Typography variant="h6" textAlign='center' color='white'>Enter the URL of a great recipe, and we'll send it back with what you need – <br /> so you can spend less time scrolling, and more time sautéeing.</Typography>
        <Button type="submit" variant="contained" size="large" sx={{ alignSelf: "center", mt: 5 }}>
              Get Started</Button>
        </div>
    </Box>
  )
}