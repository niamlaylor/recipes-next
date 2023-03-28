import styles from '../styles/RecipeList.module.css';
import RecipeListItem from './RecipeListItem';

export default function(props) {
  return (
    <section className={styles.recipeList}>
      <h2>My list</h2>
      <ul>
        <RecipeListItem recipeName={"Macaroni and cheese"}/>
        <RecipeListItem recipeName={"Salmon burgers"}/>
      </ul>
    </section>
  );
}