import { headerNav, headerNavList, headerNavItem } from "../../styles/Header.module.css"
import NavLink from "./NavLink"

export default function Header() {
  return (
    <header>
      <nav className={headerNav} role="navigation" aria-label="Site">
        <ul className={headerNavList}>
          <li className={headerNavItem}>
            <NavLink href={"/"}>My list</NavLink>
          </li>
          <li>
            <NavLink href={"/recipes/1"}>Sifter</NavLink>
            <img src=""></img>
          </li>
          <li>
            <NavLink href={"/login"}>Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};