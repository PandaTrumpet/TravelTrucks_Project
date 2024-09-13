import css from "./NotFoundPage.module.css";
import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
    <div>
      <p>Page is not found...</p>
      <p>
        Please, visit out <Link to="/">Home Page</Link>
      </p>
    </div>
  );
}
