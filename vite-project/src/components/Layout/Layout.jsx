import Navigation from "../Navigation/Navigation.jsx";
// eslint-disable-next-line react/prop-types
import css from "./Layout.module.css";
export default function Layout({ children }) {
  return (
    <>
      <header className={css.nav}>
        <Navigation />
      </header>
      {children}
    </>
  );
}
