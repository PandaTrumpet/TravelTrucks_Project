import css from "./Hero.module.css";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className={css.hero}>
      <div>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.heroText}>
          You can find everything you want in our catalog
        </p>
        <button className={css.btn}>
          <Link to="/catalog" className={css.btnLink}>
            View Now
          </Link>
        </button>
      </div>
    </section>
  );
}
