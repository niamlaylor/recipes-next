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
### Account Creation
The first step is to create your Sifter account using your existing Gmail or Github login.
### Submit a Recipe
Next, copy the URL of a recipe you'd like to save, paste it in, and click the "GET RECIPE" button. 

*NOTE: Sifter works best with following websites:*
* https://www.skinnytaste.com
* https://healthyfitnessmeals.com
### Check out the Recipe Card
Take a look at the full recipe card. It contains everything you need, and nothing you don't!
### Add Tags
Tags from the original recipe will automatically be imported to the recipe card. Feel free to add or remove tags as you see fit.
### Print a Recipe
Click the printer icon to bring up a print-friendly version of the recipe. This is helpful if you don't want to bring your electronics into the kitchen!
### View the Full Recipe List
Click the arrow at the top of the card to return to the homepage and view the list of all of your recipes.
### Add a Recipe to Your Favourites
Click the heart icon to add a recipe to your favourites. You can also click the Favourites Filter button on the left to display only your favourite recipes.
### Delete a Recipe
If you want to delete a recipe, click the trash can icon. You will be asked if you are sure about this. Click "Confirm" to delete it, or "Cancel" to go back.
### Search for a Recipe
Use the Search bar at the top to search for a recipe. If there's a match, you'll see it appear in a dropdown. Click on that to view that recipe.
### Get Cooking!
Now that your recipes are organized, you're ready to get in the kitchen and start cooking!
