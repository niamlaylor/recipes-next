import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { useSession, signOut } from 'next-auth/react';
import NavLink from "./NavLink"


export default function Header() {

  const { data: session } = useSession();

  if (session) {
    return (
      <Box>
      <AppBar position="static" style={{backgroundColor: '#DCCCC0'}}>
        <Toolbar>

            <Link href="/" sx={{flexGrow: 1}}> 
              <Box
        component="img"
        sx={{ height: 54 }}
        alt="Logo"
        src="https://raw.githubusercontent.com/niamlaylor/recipes-next/main/public/sifterLogo.png"/>
            </Link>

            <Typography variant="h6" component="div" sx={{color: '#542307' }}>
          <NavLink href={"/account"}>{session.user.name}</NavLink>'s List
          </Typography>

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

          <Button variant="outlined" href={"/login"} style={{backgroundColor: '#DCCCC0'}}>Login</Button>
          <Button sx={{ ml: 2 }} variant="outlined" href={"/signup"} style={{backgroundColor: '#DCCCC0'}}>Sign Up</Button>

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