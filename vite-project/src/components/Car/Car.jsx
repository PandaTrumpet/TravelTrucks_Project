import css from "./Car.module.css";
import sprite from "../../images/sprite.svg";
export default function Car({ car }) {
  console.log(car);

  const picture = car.gallery[0].thumb;
  return (
    <div className={css.container}>
      <div>
        <img src={picture} alt="" className={css.picture} />
      </div>
      <div className={css.infoContainer}>
        <div className={css.titleContainer}>
          <h3 className={css.name}>{car.name}</h3>
          <div className={css.priceContainer}>
            <p className={css.price}>€{car.price}</p>
            <svg className={css.iconHeart}>
              <use href={`${sprite}#icon-heart`}></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
