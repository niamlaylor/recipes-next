import styles from '../styles/RecipeList.module.css';
import { useRouter } from 'next/router';
import RecipeListItem from './RecipeListItem';
import Grid from '@mui/material/Grid';


export default function RecipeList({ recipes }) {

  console.log(recipes)

  const recipeList = recipes.map(recipe => {
    return (
        
      <Grid item xs={6} 
        key={recipe.id}
        md={3}
      >
        <RecipeListItem
          id={recipe.id}
          name={recipe.title}
          website={recipe.url}
          duration={recipe.duration}
          labels={recipe.labels}
          image={recipe.img_url}
        />
      </Grid>
    )
  })
  return (
    
    <section style= {{marginLeft:"50px", marginRight:"50px"}}>
      <h2>My List</h2>
      <Grid container spacing={2}>
        {recipeList}
        </Grid>
    </section>
  );
}