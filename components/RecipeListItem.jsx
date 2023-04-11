
//import styles from '../styles/RecipeListItem.module.css';
import React from 'react';
import LabelList from './LabelList';
import { useRouter } from 'next/router';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';



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

export default function RecipeListItem({id, name, website, duration, labels, image}) {

  const router = useRouter();

  const url = new URL(website).hostname;

  //Helper function to handle recipe click
  const handleRecipeClick = (recipeId) => {
    router.push(`/recipes/${recipeId}`);
  }


  const toIndex = () => {
    router.push(`/`);
  }

  const handleDeleteRecipe = async (id) => {
    const res = await fetch('/api/recipes/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    });
    if (res.ok) {
      console.log('woo!')
    } else {
      console.log('oh no!')
    }
    toIndex();
  };
  
  //Helper function to handle favorite icon click
  //Changes the icon to red on click
  //Not sure how to prevent the default click behaviour and keep the colour red after refresh
    const [favClicked, setFavClicked] = React.useState(false);
  
    const handleFavClick = (e) => {
      e.preventDefault();
      e.target.style.color = "red";
      setFavClicked(!favClicked);
    };

  return (
    <ThemeProvider theme={theme}>
      <Card style={{backgroundColor: theme.palette.secondary.main}} 
        sx={{ width: 300, 
              height: 400,
              ':hover': {
                boxShadow: 10
              },
            }}
        >
      <div>
        
      </div>
      <CardMedia
        sx={{ height: 150 }}
        image={image}
        title="placeholder"
      />

      <CardContent sx={{position: 'relative'}} onClick={() => handleRecipeClick(id)}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2">
          From {url}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          {duration !== 'undefined' ? `${duration} minutes` : ''}
        </Typography>

      </CardContent>
      
        <Box sx={{
            flexDirection: 'row',
            position: 'absolute',
            mt: 5,
            mb: 0,
          }}>

        <IconButton aria-label="favorite" onClick={handleFavClick} sx={{color: theme.palette.primary.main}}>
          <FavoriteIcon />
        </IconButton>

        <IconButton aria-label="delete" sx={{color: theme.palette.primary.main}} onClick={() => handleDeleteRecipe(id)} >
          <DeleteIcon />
        </IconButton>

        </Box>

      </Card>
    </ThemeProvider>
  );
}

