import styles from '../../styles/recipe-card/RecipeCard.module.css'
import IngredientList from './ingredients/IngredientList'
import StepList from './steps/StepList'

export default function RecipeCard({ recipe }) {
  return (
    <article className={styles.recipeFullCard}>
      <h3>{recipe.name}</h3>
      <label>from {recipe.website}</label>
      <div>
        <h5>Ingredients</h5>
        <IngredientList ingredients={recipe.ingredients}/>
      </div>
      <div>
        <h5>Steps</h5>
        <StepList steps={recipe.steps}/>
      </div>
    </article>

  );
};