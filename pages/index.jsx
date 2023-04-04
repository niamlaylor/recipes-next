import { useEffect } from 'react';
import axios from 'axios';
import RecipeList from '../components/RecipeList';
import Header from '../components/navigation/Header';
import AddRecipeForm from '../components/forms/AddRecipeForm';

export const mockRecipes = [
  {
    id: 1,
    name: 'Macaroni and cheese',
    website: 'cooking.com',
    labels: ['Breakfast', 'Awesome'],
    duration: 60,
    image: 'https://www.allrecipes.com/thmb/55m3_k4qDl5NZsToQ6eNyOcQBT0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/11679-homemade-mac-and-cheese-chef-mo-3x2-1-f0f5582e8dd549d18e56b95cece93045.jpg',
    description: "This mac and cheese recipe with a buttered bread crumb topping is creamy and comforting. It's easy to make the cheese sauce from scratch on your stovetop, starting with a roux and adding milk, Cheddar, and Parmesan, resulting in a rich, decadent sauce that coats every nook and cranny of the noodles. Serve this comfort-food macaroni and cheese casserole with grilled meats, sloppy Joes, fried chicken or alongside a salad for a meatless dinner.",
    ingredients: [
      '8 ounces uncooked elbow macaroni',
      '¼ cup salted butter',
      '3 tablespoons all-purpose flour',
      '2 ½ cups milk, or more as needed',
      '2 cups shredded sharp Cheddar cheese',
      '½ cup finely grated Parmesan cheese',
      'salt and ground black pepper to taste (Optional)'
    ],
    steps: [
      'Preheat the oven to 350 degrees F (175 degrees C). Grease an 8-inch square baking dish.',
      'Make the macaroni and cheese: Bring a large pot of lightly salted water to a boil. Add macaroni and simmer, stirring occasionally, until tender yet firm to the bite, about 8 minutes; it will finish cooking in the oven. Drain and transfer to the prepared baking dish.',
      'While the macaroni is cooking, melt 1/4 cup butter in a medium skillet over low heat. Whisk in flour and stir until the mixture becomes paste-like and light golden brown, 3 to 5 minutes.',
      'Gradually whisk 2 1/2 cups milk into the flour mixture, and bring to a simmer. Stir in shredded Cheddar and finely grated Parmesan cheeses; season with salt and pepper. Cook and stir over low heat until cheese is melted and sauce has thickened, 3 to 5 minutes, adding up to 1/2 cup more milk if needed. Pour cheese sauce over macaroni and stir until well combined.',
      'Make the bread crumb topping: Melt 2 tablespoons butter in a skillet over medium heat. Add bread crumbs; cook and stir until well coated and browned. Spread bread crumbs over macaroni and cheese, then sprinkle with paprika.',
      'Bake in the preheated oven until topping is golden brown and macaroni and cheese is bubbling, about 30 minutes.'
    ]
  },
  {
    id: 2,
    name: 'Salmon burgers',
    website: 'marthastewart.com',
    labels: ['Dinner'],
    duration: 45,
    image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/5/4/2/FNM_060111-Perfect-Patties-009_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371597638336.jpeg',
    description: 'Looking for the perfect summertime recipe? No barbecue should do without these delicious salmon burgers!',
    ingredients: [
      '1 ¼ pounds center-cut salmon fillet, skin and pin bones removed',
      '2 tablespoons dijon mustard',
      '1 tablespoon mayonnaise',
      '1 tablespoon lemon juice',
      '½ teaspoon grated lemon zest',
      'Pinch of cayenne pepper',
      '2 scallions, chopped',
      '1 cup plus 2 tablespoons panko (Japanese breadcrumbs)',
      'Kosher salt and freshly ground black pepper',
      '2 tablespoons extra-virgin olive oil, plus more for brushing',
      '4 brioche buns, split',
      'Tartar sauce and arugula, for topping'
    ],
    steps: [
      'Cut three-quarters of the salmon into 1/4-inch pieces. Put in a large bowl. Cut the rest of the salmon into chunks; transfer the chunks to a food processor along with the mustard, mayonnaise, lemon juice, lemon zest and cayenne. Pulse to make a paste. Add the pureed salmon mixture to the bowl with the diced salmon. Add the scallions, 2 tablespoons panko, 1/2 teaspoon salt, and black pepper to taste. Gently mix until just combined.',
      'Line a baking sheet with parchment paper and brush with olive oil. Divide the salmon mixture into 4 mounds on the parchment paper. With damp hands, pat into 4-inch-wide, 3/4-inch-thick patties. Cover loosely with plastic wrap and refrigerate at least 30 minutes.',
      'Preheat the broiler. Spread the remaining 1 cup panko on a plate. Press both sides of the salmon patties in the panko. Heat the olive oil in a large nonstick or cast-iron skillet over medium-high heat. Add the patties (in batches if necessary) and cook until browned on the bottom, 3 to 4 minutes, adjusting the heat if necessary. Turn and cook until the other side is browned and the patties feel springy in the center, 3 to 4 more minutes. Transfer to a paper towel-lined plate to drain; season with salt.',
      'Meanwhile, arrange the buns, cut-side up, on a broiler pan and broil until toasted, 1 to 2 minutes. Serve the patties on the buns; top with tartar sauce and arugula.'
    ]
  }
];

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getServerSideProps() {
  // Get all homes
  let recipes = await prisma.recipe.findMany();
  // Pass the data to the Home page
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


export default function Home({ recipes = [] } ) {

  // Uncomment next line and pass into AddRecipeForm as an onSubmit prop once prisma is configured
  // const addRecipe = data => axios.post('/api/recipes', data);

  return (
    <>
      <Header />
      <main className="mainList">
        <RecipeList recipes={recipes}/>
        <AddRecipeForm />
      </main>
    </>
  )
}
