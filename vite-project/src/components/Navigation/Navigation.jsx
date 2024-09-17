import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
export default function Navigation() {
  const linkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <nav className={css.navigation}>
      <NavLink to="/" className={css.title}>
        Travel<span className={css.titleSpan}>Tracks</span>
      </NavLink>
      <ul className={css.navLink}>
        <li>
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog" className={linkClass}>
            Catalog
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/" className={linkClass}>
            Favourite
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
}
