import { headerNav, headerNavList, headerNavItem } from "../../styles/Header.module.css"
import NavLink from "./NavLink"
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className={headerNav} role="navigation" aria-label="Site">
        <ul className={headerNavList}>
          <li className={headerNavItem}>
            <NavLink href={"/"}>My list</NavLink>
          </li>
          <li id="sifterLogo">
            <Link href={"/"}>
              <img src="https://raw.githubusercontent.com/niamlaylor/recipes-next/main/public/sifterLogo.png"></img>
            </Link>
          </li>
          <li>
            <NavLink href={"/login"}>Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};