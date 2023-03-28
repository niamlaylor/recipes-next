import styles from '../styles/RecipeListItem.module.css';
import LabelList from './LabelList';

export default function(props) {
  return (
    <li className={styles.recipeListCard}>
      <div className={styles.recipeTitleSource}>
        <h3>{props.recipeName}</h3>
        <label>from cooking.com</label>
        <label>2h 30m</label>
        <LabelList />
      </div>
      <img className={styles.recipeImage} src={'https://www.allrecipes.com/thmb/55m3_k4qDl5NZsToQ6eNyOcQBT0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/11679-homemade-mac-and-cheese-chef-mo-3x2-1-f0f5582e8dd549d18e56b95cece93045.jpg'}></img>
    </li>
  );
}