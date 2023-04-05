import { ScrapeUrls, ScrapeRecipes } from  'rethora-recipe-scraper';

const url = 'http://www.myrecipes.com/recipe/instant-pot-chicken-and-rice'


const fetchRecipes = async url => {
  try {
      const res = await ScrapeRecipes(url);
      console.log(res.success[0]); 
  } catch(error) {
      console.error(error.message);
  }
};