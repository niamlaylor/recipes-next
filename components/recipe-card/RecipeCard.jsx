import IngredientList from './ingredients/IngredientList'
import StepList from './steps/StepList'
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
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


{/* Recipe card wrapped in div to center whole thing */}
  return (
    <div 
    style={{ display:'flex', justifyContent:'center' }}>

    <Card sx={{ maxWidth: 900 }}
          style={{backgroundColor: '#DCCCC0'}}>
      
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={recipe.name}
      />
      
      <CardMedia
        component="img"
        height="194"
        image="https://gifdb.com/images/high/anime-food-cooking-breakfast-3fpdmic4i3og5dxe.webp"
        alt="anime food"
      />

{/* Recipe description */}      
      <CardContent>

        <Typography 
        variant="body1"
        color="text.secondary">
        The Instant Pot® truly shines in this quick and simple dish. Chicken thighs are sautéed first and then cook alongside long-grain rice until moist and tender. The rice gets added flavor from the chicken and is perfectly done at the same time thanks to the ease of using the Instant Pot®. The best part of this simple dish? It's all ready to eat in under an hour!
        </Typography>

      </CardContent>
      <CardActions disableSpacing>

{/* Recipe source website */}
  <CardContent>

        <Typography>
        <IconButton aria-label="recipe source">
          <RestaurantIcon />
        </IconButton>
        {recipe.website}
        </Typography>

{/* Recipe duration */}        
        <Typography>
        <IconButton aria-label="recipe duration">
          <AccessTimeIcon />
        </IconButton>
        {recipe.duration} mins
        </Typography>

  </CardContent>


{/* SAVE to My List */}

        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

{/* DELETE from My List */}
        <IconButton aria-label="delete from My List">
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
          unmountOnExit>
            
{/* INGREDIENTS */}        
        <CardContent>

          <Typography paragraph 
                      variant="h4">
            Ingredients
          </Typography>

          <Typography paragraph>
          <IngredientList ingredients={recipe.ingredients}/>
          </Typography>

{/* METHOD */}
          <Typography paragraph
                      variant="h4">
            Method
          </Typography>

          <Typography paragraph>
          <StepList steps={recipe.steps}/>
          </Typography>

        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
}