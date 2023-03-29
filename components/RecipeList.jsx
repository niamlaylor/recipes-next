import styles from '../styles/RecipeList.module.css';
import { useRouter } from 'next/router';
import RecipeListItem from './RecipeListItem';

export default function RecipeList({ recipes }) {

  const recipeList = recipes.map(recipe => {
    return (
      <RecipeListItem
        key={recipe.id}
        id={recipe.id}
        name={recipe.name}
        website={recipe.website}
        duration={recipe.duration}
        labels={recipe.labels}
      />
    )
  })
  return (
    <section className={styles.recipeList}>
      <h2>My list</h2>
      <ul>
        {recipeList}
      </ul>
    </section>
  );
}