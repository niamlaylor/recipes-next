import IngredientListItem from "./IngredientListItem";

export default function IngredientList ({ ingredients = [] }) {

  const ingredientListItems = ingredients.map((ingredient, index) => {
    return(
      <IngredientListItem
        key={index}
        // if a checkbox is used in the ingredient list, remove it
        ingredient={ingredient.replace('▢', '')}
      />
    );
  });

  return (
    <ul>
      {ingredientListItems}
    </ul>
  );
}