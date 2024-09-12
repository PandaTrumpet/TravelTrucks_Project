import { NavLink } from "react-router-dom";
import css from "./Layout.module.css";
import Navigation from "../Navigation/Navigation.jsx";
export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}
