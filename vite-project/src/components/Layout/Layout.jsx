import Navigation from "../Navigation/Navigation.jsx";
// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
