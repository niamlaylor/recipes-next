import { useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';
import RecipeList from '../components/RecipeList';

export const mockRecipes = [
  {
    id: 1,
    name: 'Macaroni and cheese',
    website: 'cooking.com',
    labels: ['Breakfast', 'Awesome'],
    duration: 60,
    image: 'https://www.allrecipes.com/thmb/55m3_k4qDl5NZsToQ6eNyOcQBT0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/11679-homemade-mac-and-cheese-chef-mo-3x2-1-f0f5582e8dd549d18e56b95cece93045.jpg'
  },
  {
    id: 2,
    name: 'Salmon burgers',
    website: 'marthastewart.com',
    labels: ['Dinner'],
    duration: 45,
    image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/5/4/2/FNM_060111-Perfect-Patties-009_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371597638336.jpeg'
  }
];

export default function Home() {

  return (
    <main className={styles.recipeList}>
      <section>
        <RecipeList recipes={mockRecipes}/>
      </section>
    </main>
  )
}
