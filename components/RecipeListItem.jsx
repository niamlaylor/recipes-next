import styles from '../styles/RecipeListItem.module.css';
import LabelList from './LabelList';
import { useRouter } from 'next/router';

export default function RecipeListItem({id, name, website, duration, labels, image}) {

  const router = useRouter();

  const handleRecipeClick = (recipeId) => {
    router.push(`/recipes/${recipeId}`);
  }

  return (
    <li className={styles.recipeListCard} onClick={() => handleRecipeClick(id)}>
      <div className={styles.recipeTitleSource}>
        <h3>{name}</h3>
        <label>from {website}</label>
        <label>{duration}m</label>
        <LabelList labels={labels}/>
      </div>
      <img className={styles.recipeImage} src={image}></img>
    </li>
  );
}