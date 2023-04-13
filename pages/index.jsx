import { useEffect } from 'react';
import axios from 'axios';
import RecipeList from '../components/RecipeList';
import Header from '../components/navigation/Header';
import AddRecipeForm from '../components/forms/AddRecipeForm';
import { getSession } from 'next-auth/react';
import Fab from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
  let recipes = await prisma.recipe.findMany({
    where: {
      userId: session.user.id
    }
  });
  recipes = recipes.map(recipe => {
    return {
      ...recipe,
      user_id: Number(recipe.user_id),
      id: Number(recipe.id)
    }
  })
  return {
    props: {
      recipes: JSON.parse(JSON.stringify(recipes)),
    },
  };
}

const style = {
  top: 'auto',
  right: 20,
  bottom: 30,
  left: 'auto',
  position: 'fixed'
};


export default function Home({ recipes = [] } ) {

  return (
    <>
      <Header />
      <main className="mainList">
        <AddRecipeForm /> 
        <RecipeList recipes={recipes}/>
       </main>
       <Fab aria-label="back to top" href="#top" style={style} >
            <ArrowUpwardIcon color="primary" fontSize='large'/>
          </Fab>
              
    </>
  )
}
