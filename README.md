## **Sifter** is a recipe parser designed to save you time when browsing online recipes - by cutting out all the extra stuff, and giving you _just_ the recipe.

No profound stories, no ads, no pop-ups. (Maybe - cookies.)

Enter the URL of a great recipe, and we'll send it back with what you need - so you can spend less time scrolling, and more time sautéeing.

## Created by Cassandra Keddis, Chelsea Dwarika, Liam Naylor & Paige Nelmes - April 2023

*NOTE: This project was created as part of our learning with Lighthouse Labs. It is not intended for use in production-grade software.*

## Getting Started

1. Clone this repository onto your local device.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run dev` command.
4. Check out **Sifter** at <http://localhost:/>.
## Run a Production Bbuild
Make sure the development server isn't running. Open your terminal and run this command:
```
npm run build && npm run start
```
## Dependencies

- Next.js
- React
- Prisma
- NextAuth
- MUI
## **Sifter** in Action
### Sign Up or Sign In
![Sign Up or Sign In](https://user-images.githubusercontent.com/106767962/233485128-029bfdca-c406-4c6f-95b6-63287a09b2be.gif)

The first step is to sign up or sign in using either Gmail or Github.

### Submit a Recipe
![Submit a Recipe](https://user-images.githubusercontent.com/106767962/233485289-a901c6a1-a98d-47ad-8cf1-96f29ce1a147.gif)

Next, copy the URL of a recipe you'd like to save, paste it in the box at the top, and click the "GET RECIPE" button. Now you can check out the full recipe card. It contains everything you need, and nothing you don't!

*NOTE: Sifter works best with following websites:*
* https://www.skinnytaste.com
* https://healthyfitnessmeals.com

### Add & Remove Tags
![Add & Remove Tags](https://user-images.githubusercontent.com/106767962/233485598-2ad60c68-7e2d-41af-83b0-57b55d39ccc7.gif)

Tags from the original recipe will automatically be imported to the recipe card. Feel free to add or remove tags as you see fit.
### Print a Recipe
![Print a Recipe](https://user-images.githubusercontent.com/106767962/233485716-8921fa8d-a3c9-48d2-8fc7-bf235f030cb2.gif)

Click the printer icon to bring up a print-friendly version of the recipe. This is helpful if you don't want to bring your electronics into the kitchen!
### View the Full Recipe List
![Full Recipe List](https://user-images.githubusercontent.com/106767962/233485836-37dcbe0f-c7a3-485f-a54d-fae37b5fba03.gif)

Click the arrow at the top of the card to return to the homepage and view the list of all of your recipes.
### Add a Recipe to Your Favourites
![Recipe Favourites](https://user-images.githubusercontent.com/106767962/233485985-628d4b5e-4fb1-4f01-9830-2dcdddca6dec.gif)

Click the heart icon to add a recipe to your favourites. You can also click the Favourites Filter button on the left to display only your favourite recipes.
### Delete a Recipe
![Delete a Recipe](https://user-images.githubusercontent.com/106767962/233486155-47b7e987-d241-415e-8f5a-bb9bdd3cde7f.gif)

If you want to delete a recipe, click the trash can icon. You will be asked if you are sure about this. Click "Confirm" to delete it, or "Cancel" to go back.
### Search for a Recipe
![Recipe Search](https://user-images.githubusercontent.com/106767962/233486296-75fdbbf3-f298-4c55-8c74-1c9987e16dc2.gif)

Use the Search bar at the top to search for a recipe. If there's a match, you'll see it appear in a dropdown. Click on that to view that recipe.
### Get Cooking!
Now that your recipes are organized, you're ready to get in the kitchen and start cooking!