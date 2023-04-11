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
            {/* H6 Typography for main links */}
              <Typography variant ="h6" href={"/"} >My List</Typography>
            </li>
            <li id="sifterLogo">
              <Link href={"/"}>
                <img src="https://raw.githubusercontent.com/niamlaylor/recipes-next/main/public/sifterLogo.png"></img>
              </Link>
            </li>
            {/* Button Styles for Login & Sign Up Links */}
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
            {/* H6 Typography for main links */}
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