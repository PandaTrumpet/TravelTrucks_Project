import css from "./Car.module.css";
import sprite from "../../images/sprite.svg";
import { Link } from "react-router-dom";

export default function Car({ car }) {
  // console.log(car.id);

  const picture = car;

  return (
    <div className={css.container}>
      <div
        className={css.picture}
        style={{ backgroundImage: `url(${picture.gallery[0].original})` }}
      ></div>
      <div className={css.infoContainer}>
        <div className={css.titleContainer}>
          <h3 className={css.name}>{car.name}</h3>
          <div className={css.mainInfo}>
            <div className={css.priceContainer}>
              <p className={css.price}>€{car.price}</p>
              <svg className={css.iconHeart}>
                <use href={`${sprite}#icon-heart`}></use>
              </svg>
            </div>
          </div>
        </div>
        <div className={css.details}>
          <svg className={css.iconStar}>
            <use href={`${sprite}#icon-star`}></use>
          </svg>
          <p>{car.rating}</p>
          <p>({car.reviews.length} Reviews)</p>
          <svg className={css.iconMap}>
            <use href={`${sprite}#icon-map`}></use>
          </svg>
          <p>{car.location}</p>
        </div>
        <p className={css.description}>
          {car.description.length > 64
            ? car.description.slice(0, 64) + "..."
            : car.description}
        </p>
        {/* <ul>
          <li>
            <svg>
              <use></use>
            </svg>
            <p></p>
          </li>
          <li>
            <svg>
              <use></use>
            </svg>
            <p></p>
          </li>
        </ul> */}
        <Link
          to={`/catalog/${car.id}`}
          target="blank"
          rel="noopener noreferrer"
        >
          Show more
        </Link>
      </div>
    </div>
  );
}
