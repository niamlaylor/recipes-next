export function formattedDomain (website) {
  const url = new URL(website).hostname;
  const prettyUrl = url.split('www.')[1];
  return prettyUrl;
};

// Creates an array of the user's recipe IDs then checks if the URL param id exists in the array
export const checkIfBelongsToUser = async (sessionValue, prisma, urlId) => {
  const userRecipes = await prisma.recipe.findMany({
    where: { 
      userId: sessionValue.user.id 
    },
  });

  const paths = userRecipes.map((recipe) => {
    return { id: recipe.id.toString() };
  });

  return paths.find(recipe => recipe.id == urlId );
};


export async function getRecipes(sessionValue, prismaClient) {
  const recipes = await prismaClient.recipe.findMany({
    where: {
      userId: sessionValue.user.id
    }
  });
  const recipesArray = recipes.map(recipe => {
    return {
      ...recipe,
      user_id: Number(recipe.userId),
      id: Number(recipe.id)
    }
  });
  return recipesArray;
};
