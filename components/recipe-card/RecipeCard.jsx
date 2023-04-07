import IngredientList from './ingredients/IngredientList'
import StepList from './steps/StepList'
import { useRouter } from 'next/router';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

{/* drop down menu function */}
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeCard({ recipe }) {

  const router = useRouter();

  let website = new URL(recipe.url).hostname;
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const toIndex = () => {
    router.push(`/`);
  }
  
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

  {/* Recipe card wrapped in div to center whole thing */}
  return (
    <div 
    style={{ display:'flex', justifyContent:'center' }}>

    <Card sx={{ maxWidth: 900 }}
          style={{backgroundColor: '#DCCCC0'}}>
      
      <CardHeader
      action={
          <IconButton aria-label="back to home" onClick={toIndex}>
            <ArrowBackIcon  />
          </IconButton>
        }

        title={recipe.title}
      />
      
      <CardMedia
        component="img"
        height="250"
        image={recipe.img_url}
        alt={recipe.title}
      />

      <CardContent>

        <Typography 
        variant="body1"
        color="text.secondary">
        {recipe.description}
        </Typography>

      </CardContent>
      <CardActions disableSpacing>

  <CardContent>

    <Typography>
    <IconButton aria-label="recipe source">
      <RestaurantIcon />
    </IconButton>
    <a href={recipe.url}>{website}</a>
    </Typography>
    
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

              <Stack direction="row" spacing={1}>
                <Chip label="keto"  />
                <Chip label="< 60 mins"  />
                <Chip label="brunch"  />
                <Chip label="gluten free"  />
                <Chip label="kid friendly"  />
              </Stack>

              <IconButton aria-label="delete from My List" onClick={() => handleDeleteRecipe(recipe.id)}>
                <DeleteIcon />
              </IconButton>

              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse 
          in={expanded}
          timeout="auto"
          unmountOnExit
        >

          <CardContent>
            <Typography paragraph variant="h4">
              Ingredients
            </Typography>

            <Typography paragraph>
              <IngredientList ingredients={recipe.ingredients}/>
            </Typography>

            <Typography paragraph variant="h4">
              Method
            </Typography>

            <Typography paragraph>
              <StepList steps={recipe.instructions}/>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}