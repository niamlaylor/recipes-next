import IngredientListItem from "./IngredientListItem";

export default function IngredientList ({ ingredients = [] }) {

  const ingredientListItems = ingredients.map((ingredient, index) => {
    return(
      <IngredientListItem
        key={index}
        ingredient={ingredient}
      />
    );
  });

  return (
    <ul>
      {ingredientListItems}
    </ul>
  );
}