import { headerNav, headerNavList, headerNavItem } from "../../styles/Header.module.css"
import NavLink from "./NavLink"
import Link from "next/link";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Header( { userLoggedIn, onLoggedInPage } ) {
  return (
    <header>
      <nav className={headerNav} role="navigation" aria-label="Site">
        <ul className={headerNavList}>
          <li className={headerNavItem}>
          {/* H6 Typography for main links */}
            <Typography variant ="h6" href={"/"} >My List</Typography>
          </li>
          <li id="sifterLogo">
            <Link href={"/"}>
              <img src="https://raw.githubusercontent.com/niamlaylor/recipes-next/main/public/sifterLogo.png"></img>
            </Link>
          </li>
          { userLoggedIn && !onLoggedInPage && <li><NavLink href={"/"}>Welcome!</NavLink></li> }
          {/* Button Styles for Login & Sign Up Links */}
          { onLoggedInPage && <li><Button variant="contained" href={"/"}>Sign Up</Button></li> }
          { !onLoggedInPage && <li><Button variant="contained" href={"/login"}>Login</Button></li>}
    
        </ul>
      </nav>
    </header>
  );
};