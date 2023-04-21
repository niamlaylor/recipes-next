import RecipeList from '../components/RecipeList';
import EmptyRecipes from '../components/errors/EmptyRecipes';
import Header from '../components/navigation/Header';
import AddRecipeForm from '../components/forms/AddRecipeForm';
import Fab from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { getSession } from 'next-auth/react';
import { getRecipes } from '../utils/helpers';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getServerSideProps(context) {
  
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  };
  const recipes = await getRecipes(session, prisma);
  return {
    props: {
      recipes: JSON.parse(JSON.stringify(recipes)),
    },
  };
};

export default function Home({ recipes = [] } ) {

  const trigger = useScrollTrigger();
  
  return (
    <>
      <Header />
      <main className="mainList">
        <AddRecipeForm /> 
        {recipes.length > 0 && <RecipeList recipes={recipes}/>}
        {recipes.length === 0 && <EmptyRecipes/>}
       </main>

       <Slide in={!!trigger}>
          <Fab aria-label="back to top" href="#top" style={{ top:'auto', right: 20, bottom: 30, left: 'auto', position: 'fixed' } } >
            <ArrowUpwardIcon color="primary" fontSize='large'/>
          </Fab>            
        </Slide> 
          
    </>
  )
}
