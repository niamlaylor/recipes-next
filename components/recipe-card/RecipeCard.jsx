import IngredientList from './ingredients/IngredientList'
import StepList from './steps/StepList'
import Tags from './Tags'
import { useRouter } from 'next/router';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import PrintIcon from '@mui/icons-material/Print';
import { Box } from '@mui/material';
import { formattedDomain } from '../../utils/helpers';

export default function RecipeCard({ recipe }) {

  console.log(recipe.labels);

  const router = useRouter();

  const website = formattedDomain(recipe.url);
  
  const toIndex = () => {
    router.push(`/`);
  }
  
{/*DELETE HELPER  */}
  const handleDeleteRecipe = async (id) => {
    const res = await fetch('/api/recipes/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    });
    if (res.ok) {
      console.log('woo!')
    } else {
      console.log('oh no!')
    }
    toIndex();
  };

  {/*IMAGE SIZING HELPER */}
  const removeImageDimensions = (url) => {
    let lastDash = url.lastIndexOf("-");
    let lastDot = url.lastIndexOf(".");
    return url.replace(url.substring(lastDash, lastDot), "");
  };

{/* FULL Recipe card wrapped in box to center whole thing */}
  return (
    <Box style={{ display:'flex', justifyContent:'center'}} pt={7}>
     
    <Card sx={{ maxWidth: 900 }}
          style={{backgroundColor: '#DCCCC0'}}>

{/* TITLE & BACK ARROW  */}      
      <CardHeader
      action={
          <IconButton aria-label="back to home" onClick={toIndex}>
            <ArrowBackIcon  />
          </IconButton>
        }
        title={recipe.title}
      />

{/* IMAGE  */}
      <CardMedia
        component="img"
        height="350"
        image={removeImageDimensions(recipe.img_url)}
        alt={recipe.title}
      />

{/* DESCRIPTION  */}
      <CardContent>

        <Typography 
        variant="body1"
        color="text.secondary">
        {recipe.description}
        </Typography>

      </CardContent>

      <CardActions disableSpacing>
  <CardContent>

{/* SOURCE  */}
    <Typography>
    <IconButton aria-label="recipe source">
      <RestaurantIcon />
    </IconButton>
    <a style={{ color: '#542307'}} target="_blank" rel="noopener noreferrer" href={recipe.url}>{website}</a>
    </Typography>

{/* DURATION?  */}
    <Typography>
      {recipe.duration === undefined ?
        <IconButton aria-label="recipe duration">
          <AccessTimeIcon />
        </IconButton>
        :
        <span></span>
      }
      {recipe.duration === undefined ? `${recipe.duration} minutes` : ''}
    </Typography>

  </CardContent>

{/* LABELS  */}
              <Stack direction="row" spacing={1} sx={{ pr: 1 }}>
                {recipe.labels.map((label) => (
                  <Chip label={label} key={label} />
                ))}
              </Stack>

              <Tags style={{ backgroundcolor: '#542307'}} />


{/* PRINT */}
              <IconButton aria-label="print Recipe Card" onClick={() => window.print()}>
                <PrintIcon />
              </IconButton>

{/* DELETE */}
              <IconButton aria-label="delete from My List" onClick={() => handleDeleteRecipe(recipe.id)}>
                <DeleteIcon />
              </IconButton>

        </CardActions>

{/* INGREDIENTS */}
          <CardContent>

            <Typography paragraph variant="h4">
              Ingredients
            </Typography>

            <Typography paragraph>
              <IngredientList ingredients={recipe.ingredients}/>
            </Typography>
{/* METHOD  */}

            <Typography paragraph variant="h4">
              Method
            </Typography>

            <Typography paragraph>
              <StepList steps={recipe.instructions}/>
            </Typography>

          </CardContent>

      </Card>
    </Box>
  );
}