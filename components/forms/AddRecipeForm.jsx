import styles from '../../styles/forms/AddRecipeForm.module.css'
import { useState } from "react";
import axios from 'axios';

export default function AddRecipeForm(props) {

  const [website, setWebsite] = useState(props.website || "");

  const getRecipe = async (event) => {
    event.preventDefault();
    const fetchOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({
        url: event.target.url.value
      })
    };
    const recipeData = await fetch("/api/get-recipe/", fetchOptions).then(
      (res) => {
        res.json().then((recipeJson) => {
          console.log(typeof recipeJson);
          axios.post('/api/recipes', recipeJson).then((response) => {
            console.log("Axios request successful");
            console.log(response);
          }).catch((error) => {
            console.log("Axios request error");
            console.log(error);
          });
        });
      }
    );
    return recipeData;
  };

  return (
    <section className={styles.formSection}>
      <form className={styles.addRecipeForm} onSubmit={getRecipe} autoComplete="off">
        <input
          className ={styles.addRecipeInput}
          name="url"
          type="url"
          placeholder="Paste a recipe URL"
          value={website}
          onChange={event => setWebsite(event.target.value)}
        />
        <button className={styles.addRecipeButton} type="submit">Submit</button>
      </form>
    </section>
  );
};