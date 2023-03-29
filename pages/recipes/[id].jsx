'use client'
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { mockRecipes } from "../index";
import RecipeCard from "../../components/recipe-card/RecipeCard";

export default function Recipe() {

  const router = useRouter();
  const { id } = router.query;

  const recipe = mockRecipes.find((recipe) => {
    return recipe.id === Number(id)
  });

  if (!recipe) {
    return <div>Loading...</div>
  }

  return <RecipeCard recipe={recipe}/>
};