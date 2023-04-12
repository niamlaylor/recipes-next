import RecipeListItem from './RecipeListItem';
import Grid from '@mui/material/Grid';

export default function RecipeList({ recipes }) {

  const recipeList = recipes.map((recipe) => (
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
    <section style={{ marginLeft: '50px', marginRight: '50px' }}>
      <h2 style={{ color: '#542307'}}>My List </h2>
      <Grid container spacing={2}>
        {recipeList}
      </Grid>
    </section>
  );
}