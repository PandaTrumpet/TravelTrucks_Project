import css from "./Hero.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className={css.hero}>
      <div>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.heroText}>
          You can find everything you want in our catalog
        </p>

        <Link to="/catalog" className={css.btn}>
          View Now
        </Link>
      </div>
    </section>
  );
}
