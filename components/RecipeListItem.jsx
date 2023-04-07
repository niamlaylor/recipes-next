//import styles from '../styles/RecipeListItem.module.css';
import LabelList from './LabelList';
import { useRouter } from 'next/router';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import CardActions from '@mui/material/CardActions';

const theme = createTheme({
  palette: {
    //Main colour, dark brown
    primary: {
      main: '#542307'
    },
    //Secondary colour, light brown with reduced opacity
    secondary: {
      main: 'rgba(220, 204, 192, 0.5)'
    }
  },
  //Nunito Sans font
  typography: {
    fontFamily: 'Nunito Sans',
    fontWeightRegular: 400,
    fontWeightBold: 700
  }
});

export default function RecipeListItem({id, name, website, duration, labels, image}) {

  const router = useRouter();

  const handleRecipeClick = (recipeId) => {
    router.push(`/recipes/${recipeId}`);
  }

  return (
    <ThemeProvider theme={theme}>
      <Card style={{backgroundColor: theme.palette.secondary.main}} 
        sx={{ maxWidth: 350, 
              minHeight: 400, 
              ':hover': {
                boxShadow: 10
              }, 
            }}
        onClick={() => handleRecipeClick(id)}>
      <CardMedia
        sx={{ height: 150 }}
        image={image}
        title="placeholder"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2">
          From {website}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          {duration} mins
        </Typography>

        <IconButton aria-label="edit" sx={{color: theme.palette.primary.main}}>
          <EditIcon />
        </IconButton>

        <IconButton aria-label="delete" sx={{color: theme.palette.primary.main}}>
          <DeleteIcon />
        </IconButton>

      </CardContent>
      </Card>
    </ThemeProvider>
  );
}
