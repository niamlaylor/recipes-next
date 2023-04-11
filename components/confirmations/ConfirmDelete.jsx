import React from "react";
import handleDeleteRecipe from  "../RecipeListItem";
import { ThemeProvider } from "@emotion/react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { createTheme, ThemeProvider } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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

//Helper function to show confirmation message on delete
//Need a way to cancel on after clicking cancel button
const confirmDelete = () => {
  return (
    <ThemeProvider theme={theme}>
      <Card>
        style={{backgroundColor: theme.palette.secondary.main}} 
        sx={{ 
          width: 300, 
          height: 400
          }}
        <CardContent>
          <Typography variant="h2">Are you sure you want to delete?</Typography>
            <Button sx={{color: 'red'}} onClick={() => handleDeleteRecipe(id)}>Delete</Button>
            <Button sx={{color: theme.palette.primary.main}}>Cancel</Button>
        </CardContent>
      </Card>
    </ThemeProvider>
    )
  }

  export default confirmDelete;