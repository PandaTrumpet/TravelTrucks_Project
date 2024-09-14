import css from "./CarInformation.module.css";
import sprite from "../../images/sprite.svg";
export default function CarInformation({ car }) {
  //   console.log(car.gallery);
  //   const foto = car.gallery.map((car) => console.log(car.original));
  const photos = car.gallery;
  console.log(car);

  return (
    <div>
      <h3 className={css.name}>{car.name}</h3>
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
      <p className={css.price}>€{car.price}</p>
      <ul className={css.fotoList}>
        {photos.length > 0 &&
          photos.map((photo, index) => {
            return (
              <li key={index}>
                <div
                  className={css.carFoto}
                  style={{ backgroundImage: `url(${photo.original})` }}
                ></div>
              </li>
            );
          })}
      </ul>
      <p className={css.description}>{car.description}</p>
    </div>
  );
}
