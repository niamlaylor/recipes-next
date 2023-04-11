//import styles from '../styles/RecipeListItem.module.css';
import {useState, useEffect} from 'react';
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

  //Helper function for deleting a recipe
  const handleDeleteRecipe = async (id) => {
    const res = await fetch('/api/recipes/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    });
    if (res.ok) {
      console.log('yay!')
    } else {
      console.log('oh no!')
    }
    toIndex();
  };

  //Handling favorite icon click
  const [favClicked, setFavClicked] = useState(false);

  const handleFavClick = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/recipes', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        favorite: !favClicked,
      }),
    });
    if (response.ok) {
      const updatedRecipe = await response.json();
      setFavClicked(updatedRecipe.favorite);
    } else {
      console.error('Failed to update favorite status.');
    }
  };

  useEffect(() => {
    const fetchFavorite = async () => {
      try {
        const response = await fetch(`/api/recipes?id=${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const recipe = await response.json();
          setFavClicked(recipe.favorite);
        } else {
          throw new Error('Failed to fetch favorite recipe');
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchFavorite();
  }, [id]);

    const truncateName = name.length > 50 ? name.substring(0, 50) + "..." : name;

    return (
      <ThemeProvider theme={theme}>
        <Card 
          style={{backgroundColor: theme.palette.secondary.main}} 
          sx={{ 
            width: 300, 
            height: 400,
            ':hover': {
              boxShadow: 10
            },
          }}
        >
          <CardMedia
            onClick={() => handleRecipeClick(id)}
            sx={{ height: 150 }}
            image={image}
            title="placeholder"
          />

          <CardContent sx={{position: 'relative'}} >
            <div onClick={() => handleRecipeClick(id)}>
              <Typography gutterBottom variant="h5" component="div">
                {truncateName}
              </Typography>
              <Typography variant="body2">
                From {url}
              </Typography>
              <Typography gutterBottom variant="body2" component="div">
                {duration !== 'undefined' ? `${duration} minutes` : ''}
              </Typography>
            </div>
            <Box sx={{
              flexDirection: 'row',
              position: 'absolute',
              mt: 5,
              mb: 0, }}
            >

            <IconButton
              aria-label="favorite"
              onClick={handleFavClick}
              sx={{
                color: favClicked ? 'red' : theme.palette.primary.main,
              }}
            >
              <FavoriteIcon />
            </IconButton>

            <IconButton aria-label="delete" sx={{color: theme.palette.primary.main}} onClick={() => handleDeleteRecipe(id)} >
              <DeleteIcon />
            </IconButton>

          </Box>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}

