import RecipeCard from "../../components/recipe-card/RecipeCard";
import Header from '../../components/navigation/Header';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getServerSideProps(context) {
  const { id } = context.params;

  const recipe = await prisma.recipe.findUnique({
    where: { id: Number(id) },
  });

  if (!recipe) {
    return { notFound: true };
  }

  const recipeJSON = JSON.stringify(recipe, (key, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  });

  return {
    props: {
      recipe: JSON.parse(recipeJSON),
    },
  };
}


export default function Recipe({ recipe = [] }) {
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