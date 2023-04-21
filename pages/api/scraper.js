import { ScrapeUrls, ScrapeRecipes } from  'rethora-recipe-scraper';

const fetchRecipes = async url => {
  try {
      const res = await ScrapeRecipes(url);
      if (res.success.length > 0) {
        return res.success[0]; 
      } else {
        console.log(`Sorry! This recipe doesn't contain the correct formatting to parse.`)
      }
  } catch(error) {
      console.error(error.message);
  }
};

async function handler(req, res) {
  const recipeData = await fetchRecipes(req.body.url);
  res.status(200).json(recipeData);
}

export default handler;