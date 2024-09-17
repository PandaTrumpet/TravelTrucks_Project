import css from "./Car.module.css";
import sprite from "../../images/sprite.svg";
import { Link } from "react-router-dom";

export default function Car({ car }) {
  // console.log(car.AC);

  const picture = car;
  console.log(car.transmission);

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
        <ul className={css.iconList}>
          {car.transmission === "automatic" && (
            <li className={css.iconItem}>
              <svg className={css.icon}>
                <use href={`${sprite}#icon-diagram`}></use>
              </svg>
              <p className={css.iconText}>Automatic</p>
            </li>
          )}
          {car.gas && (
            <li className={css.iconItem}>
              <svg className={css.icon}>
                <use href={`${sprite}#icon-gaz`}></use>
              </svg>
              <p className={css.iconText}>Petrol</p>
            </li>
          )}
          {car.kitchen && (
            <li className={css.iconItem}>
              <svg className={css.icon}>
                <use href={`${sprite}#icon-cup-hot`}></use>
              </svg>
              <p className={css.iconText}>Kitchen</p>
            </li>
          )}
          {car.AC && (
            <li className={css.iconItem}>
              <svg className={css.icon}>
                <use href={`${sprite}#icon-wind`}></use>
              </svg>
              <p className={css.iconText}>AC</p>
            </li>
          )}
          {car.TV && (
            <li className={css.iconItem}>
              <svg className={css.icon}>
                <use href={`${sprite}#icon-tv`}></use>
              </svg>
              <p className={css.iconText}>TV</p>
            </li>
          )}
          {car.bathroom && (
            <li className={css.iconItem}>
              <svg className={css.icon}>
                <use href={`${sprite}#icon-bi_droplet`}></use>
              </svg>
              <p className={css.iconText}>Bathroom</p>
            </li>
          )}
          {car.radio && (
            <li className={css.iconItem}>
              <svg className={css.icon}>
                <use href={`${sprite}#icon-ui-radios`}></use>
              </svg>
              <p className={css.iconText}>Radio</p>
            </li>
          )}
          <li className={css.iconItem}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-edults`}></use>
            </svg>
            <p className={css.iconText}>2 adults</p>
          </li>
        </ul>
        <Link
          to={`/catalog/${car.id}`}
          target="blank"
          rel="noopener noreferrer"
          className={css.btn}
        >
          Show more
        </Link>
      </div>
    </div>
  );
}
