import { useState } from 'react';
import RecipeListItem from './RecipeListItem';
import Grid from '@mui/material/Grid';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ToggleButton from '@mui/material/ToggleButton';
import FilterListIcon from '@mui/icons-material/FilterList';

export default function RecipeList({ recipes }) {
  const [showFavorites, setShowFavorites] = useState(false);

  const handleToggleFavorites = () => {
    setShowFavorites(!showFavorites);
  }

  const filteredRecipes = showFavorites ? recipes.filter(recipe => recipe.favorite) : recipes;

  const recipeList = filteredRecipes.map((recipe) => (
    <Grid item xs="auto" key={recipe.id}>
      <RecipeListItem
        id={recipe.id}
        name={recipe.title}
        website={recipe.url}
        duration={recipe.duration}
        labels={recipe.labels}
        image={recipe.img_url}
      />
    </Grid>
  ));

  return (
    <section 
    style={{ marginLeft: '50px', marginRight: '50px' }}>
      
      <ToggleButton
        aria-label="favorite"
        onClick={handleToggleFavorites}
        sx={{
          flex: "none",
          color: showFavorites ? 'red' : '#DCCCC0',
        }}
      >
        <FilterListIcon style={{ color: '#542307' }} />   
        <FavoriteIcon  />
      </ToggleButton>
      <h3></h3>
      <Grid container spacing={2}>
        {recipeList}
      </Grid>
    </section>
  );
}