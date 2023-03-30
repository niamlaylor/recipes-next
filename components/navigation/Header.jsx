import NavLink from "./NavLink"

export default function Header() {
  return (
    <header>
      <nav role="navigation" aria-label="Site">
        <ul>
          <li>
            <NavLink href={"/recipes/1"}>View Recipe</NavLink>
          </li>
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};