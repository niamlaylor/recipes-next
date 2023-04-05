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
      <p>from {recipe.website}</p>
      <p>The Instant Pot® truly shines in this quick and simple dish. Chicken thighs are sautéed first and then cook alongside long-grain rice until moist and tender. The rice gets added flavor from the chicken and is perfectly done at the same time thanks to the ease of using the Instant Pot®. The best part of this simple dish? It's all ready to eat in under an hour!</p>
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
