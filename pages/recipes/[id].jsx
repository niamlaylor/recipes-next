import RecipeCard from "../../components/recipe-card/RecipeCard";
import Header from '../../components/navigation/Header';
import { getSession } from 'next-auth/react';
import { checkIfBelongsToUser } from "../../utils/helpers";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getServerSideProps(context) {

  // Context passes the session object from the FE over to BE so we can check if it exists
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  };

  const { id } = context.params;

  if (!Number(id)) {
    return { notFound: true };
  }
  const recipe = await prisma.recipe.findUnique({
    where: { id: Number(id) },
  });

  // If no recipe found, trigger 404 page
  if (!recipe) {
    return { notFound: true };
  }

  // Make sure /recipe/[id] value belongs to the user
  const belongsToUser = await checkIfBelongsToUser(session, prisma, id);
  if (!belongsToUser) {
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