import styles from '../../styles/forms/AddRecipeForm.module.css'
import { useState } from "react";

export default function AddRecipeForm(props) {

  const [website, setWebsite] = useState(props.website || "");

  return (
    <section className={styles.formSection}>
      <form className={styles.addRecipeForm} onSubmit={event => event.preventDefault()} autoComplete="off">
        <input
          className ={styles.addRecipeInput}
          name="url"
          type="url"
          placeholder="Paste a recipe URL"
          value={website}
          onChange={event => setWebsite(event.target.value)}
        />
        <button className={styles.addRecipeButton}>Submit</button>
      </form>
    </section>
  );
};