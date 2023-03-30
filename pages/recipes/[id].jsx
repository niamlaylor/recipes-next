'use client'
import { useRouter } from 'next/router'
import { mockRecipes } from "../index";
import RecipeCard from "../../components/recipe-card/RecipeCard";
import Header from '../../components/navigation/Header';

export default function Recipe() {

  const router = useRouter();
  const { id } = router.query;

  const recipe = mockRecipes.find((recipe) => {
    return recipe.id === Number(id)
  });

  if (!recipe) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Header/>
      <RecipeCard recipe={recipe}/>
    </>
  
  )
};