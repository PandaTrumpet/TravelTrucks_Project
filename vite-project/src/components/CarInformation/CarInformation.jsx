import css from "./CarInformation.module.css";
import sprite from "../../images/sprite.svg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCarId } from "../../Redux/cars/operation.js";
import { oneCarSelector } from "../../redux/cars/selectors.js";
export default function CarInformation() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchCarId(id));
  }, [dispatch, id]);
  const car = useSelector(oneCarSelector);
  const userReviews = car.reviews?.length || [];

  //   console.log(userReviews);

  const photos = car?.gallery || [];
  return (
    <div>
      <h3 className={css.name}>{car.name}</h3>
      <div className={css.details}>
        <svg className={css.iconStar}>
          <use href={`${sprite}#icon-star`}></use>
        </svg>
        <p>{car.rating}</p>
        <p>({userReviews} Reviews)</p>
        <svg className={css.iconMap}>
          <use href={`${sprite}#icon-map`}></use>
        </svg>
        <p>{car.location}</p>
      </div>
      <p className={css.price}>€{car.price}</p>
      <ul className={css.fotoList}>
        {photos &&
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
