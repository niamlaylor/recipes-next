import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { useSession, signOut } from 'next-auth/react';
import NavLink from "./NavLink";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { useState } from 'react';


const Search = styled('form')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#DCCCC0",
  '&:hover': {
    backgroundColor: "white",
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#542307",
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Header() {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { data: session } = useSession();

  const handleSearch = async (event) => {
    event.preventDefault();
    const query = event.target.elements.search.value;
    setSearchQuery(query);
    const userId = session.user.id;
    const res = await fetch(`/api/search?q=${query}&userId=${userId}`);
    const data = await res.json();
    setSearchResults(data);
  };

  if (session) {
    return (
      <Box>
      <AppBar position="static" style={{ backgroundColor: '#DCCCC0' }}>
        <Toolbar>
          <Link href="/" sx={{flexGrow: 1}}> 
            <Box
              component="img"
              sx={{ height: 54 }}
              alt="Logo"
              src="https://raw.githubusercontent.com/niamlaylor/recipes-next/main/public/sifterLogo.png"/>
          </Link>

          <Typography variant="h6" component="div" sx={{color: '#542307' }} >
            {session.user.name}'s List
          </Typography>

          <Search onSubmit={handleSearch}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              name="search"
            />
          </Search>
          {searchResults.length > 0 && (
            <Box sx={{ marginTop: 2 }}>
              <Typography variant="h6" sx={{ marginBottom: 1 }}>
                Search results for "{searchQuery}":
              </Typography>
              <ul>
                {searchResults.map((recipe) => (
                  <li key={recipe.id}>
                    <NavLink href={`/recipes/${recipe.id}`}>
                      {recipe.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </Box>
          )}
          <Button sx={{ ml: 2 }} variant="outlined" onClick={() => signOut()}>Sign out</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );

} else {
  return (
    <Box>
    <AppBar position="static" style={{backgroundColor: '#DCCCC0'}}>
     
     <Toolbar>

    <Link href="/" sx = {{ flexGrow: 1 }}>
              <Box
        component="img"
        sx={{ height: 54 }}
        alt="Logo"
        src="https://raw.githubusercontent.com/niamlaylor/recipes-next/main/public/sifterLogo.png"/>
            </Link>

            <Typography variant="body1" component="div" sx={{color: '#542307'}}>
          </Typography>

          <Button variant="outlined" href={"/login"} style={{backgroundColor: '#DCCCC0'}}>Signup / Login</Button>

        </Toolbar>
      </AppBar>
      </Box>
  );
}
}


/* OLD HEADER

import { headerNav, headerNavList, headerNavItem } from "../../styles/Header.module.css"
import NavLink from "./NavLink"
import Link from "next/link";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSession, signOut } from 'next-auth/react';

export default function Header() {

  const { data: session } = useSession();
  console.log(session)

  if (session) {
    return (
      <header>
        <nav className={headerNav} role="navigation" aria-label="Site">
          <ul className={headerNavList}>
            <li className={headerNavItem}>
 H6 Typography for main links 
              <Typography variant ="h6" href={"/"} >My List</Typography>
            </li>
            <li id="sifterLogo">
              <Link href={"/"}>
                <img src="https://raw.githubusercontent.com/niamlaylor/recipes-next/main/public/sifterLogo.png"></img>
              </Link>
            </li>
 Button Styles for Login & Sign Up Links
            <li>
              <NavLink href={"/account"}>Welcome {session.user.name}</NavLink>
              <Button variant="contained" size="large" onClick={() => signOut()}>Sign out</Button>
            </li>
          </ul>
        </nav>
      </header>
    )
  } else {
    return (
      <header>
        <nav className={headerNav} role="navigation" aria-label="Site">
          <ul className={headerNavList}>
            <li className={headerNavItem}>
H6 Typography for main links
              <Typography variant ="h6" href={"/"} >My List</Typography>
            </li>
            <li id="sifterLogo">
              <Link href={"/"}>
                <img src="https://raw.githubusercontent.com/niamlaylor/recipes-next/main/public/sifterLogo.png"></img>
              </Link>
            </li>
            <li>
              <Button variant="contained" size="large" href={"/login"}>
                Login
              </Button>
              <Button variant="contained" size="large" href={"/signup"}>
                Sign up
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
};
*/