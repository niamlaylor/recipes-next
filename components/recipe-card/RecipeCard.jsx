import styles from '../../styles/recipe-card/RecipeCard.module.css'
import IngredientList from './ingredients/IngredientList'
import StepList from './steps/StepList'

export default function RecipeCard({ recipe }) {
  return (
    <div className={styles.recipeFullCard}>
    <div className={styles.recipe}>

      <div className={styles.circle_recipe}>
      <p>Cooking Time</p>
        <h2>{recipe.duration} mins</h2>
      </div>
      <div className={styles.circle_recipe}>
        <p>Serves</p>
        <h2>12</h2>
      </div>
      
    <div className={styles.content}>



    <div className={styles.row}>
    <div className={styles.description}>
      <h2>{recipe.name}</h2>
      <p>{recipe.website}</p>
    </div>


      <div className={styles.column} 
          id="ingredients">
      <h2>Ingredients</h2>
      <IngredientList ingredients={recipe.ingredients}/>
       </div>
       
      <div className={styles.column}
          id="method">
      <h2>Method</h2>
    <StepList steps={recipe.steps}/>
      </div>
</div>
</div>
      </div>
    </div>
  );
};
