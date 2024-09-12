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
      <div className={css.navLink}>
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={linkClass}>
          Catalog
        </NavLink>
      </div>
    </nav>
  );
}
