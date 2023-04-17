import React from "react";
import { Typography, Box } from "@mui/material";
import styles from '../../styles/EmptyRecipes.module.css';

export default function EmptyRecipes() {
  return (
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", mt: 15, mb: 15}}>
      <img class={styles.sifterLogoEmpty} src="https://raw.githubusercontent.com/niamlaylor/recipes-next/main/public/favicon.ico"></img>
      <Typography variant="h4">No recipes added yet</Typography>
      <Typography variant="h6">Paste a recipe URL and get cookin'</Typography>
    </Box>
  );
}