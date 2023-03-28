import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import RecipeList from '../components/RecipeList';

export default function Home() {
  return (
    <main className={styles.recipeList}>
      <section>
        <RecipeList />
      </section>
    </main>
  )
}
