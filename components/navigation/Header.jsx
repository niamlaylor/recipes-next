import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';
import AppBar from '@mui/material/AppBar';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {

  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { data: session, status: sessionStatus } = useSession();

  const handleInputChange = async (event, value) => {
    setSearchQuery(value);
    if (!value) {
      setSearchResults([]);
      return;
    }
    const userId = session.user.id;
    const res = await fetch(`/api/search?q=${value}&userId=${userId}`);
    const data = await res.json();
    setSearchResults(data.map((recipe) => ({ id: recipe.id, title: recipe.title })));
  };

  if (sessionStatus === 'loading') {
    return (
      <Box>
        <AppBar position="static" style={{ backgroundColor: '#DCCCC0' }}>
          <Toolbar>
            <Link href="/" sx={{ flexGrow: 1 }}> 
              <Box
                component="img"
                sx={{ height: 54 }}
                alt="Logo"
                src="https://raw.githubusercontent.com/niamlaylor/recipes-next/main/public/sifterLogo.png"
              />
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

  if (session) {
    return (
      <Box>
        <AppBar position="static" style={{ backgroundColor: '#DCCCC0' }} sx={{ paddingTop: '5px' }}>
          <Toolbar>
            <Link href="/" sx={{ flexGrow: 1 }}> 
              <Box
                component="img"
                sx={{ height: 54 }}
                alt="Logo"
                src="https://raw.githubusercontent.com/niamlaylor/recipes-next/main/public/sifterLogo.png"
              />
            </Link>
  
            <Typography variant="h6" component="div" sx={{ color: '#542307' }}>
              {session.user.name}'s List
            </Typography>
  
            <Autocomplete
              onInputChange={handleInputChange}
              sx={{ pl: 3, minWidth: "200px" }}
              freeSolo
              options={searchQuery && searchResults.length < 1 ? [{ title: "No results" }] : searchResults}
              getOptionLabel={(option) => option.title}
              getOptionSelected={(option, value) => option.id === value.id}
              onChange={(event, value) => {
                if (value?.id) {
                  router.push(`/recipes/${value.id}`);
                }
              }}
              renderInput={(params) => <TextField {...params} label="Search..." />}
            />
  
            <Button sx={{ ml: 2 }} variant="outlined" onClick={signOut}>
              Sign out
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  } else {
    return (
      <Box>
        <AppBar position="static" style={{ backgroundColor: '#DCCCC0' }}>
          <Toolbar>
            <Link href="/" sx={{ flexGrow: 1 }}>
              <Box component="img" sx={{ height: 54 }} alt="Logo" src="https://raw.githubusercontent.com/niamlaylor/recipes-next/main/public/sifterLogo.png"/>
            </Link>
            <Button variant="outlined" href={"/login"} style={{ backgroundColor: '#DCCCC0', marginLeft: 'auto' }}>
              Sign up / Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    )
  };
}