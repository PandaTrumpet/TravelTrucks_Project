import css from "./Features.module.css";
import sprite from "../../images/sprite.svg";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { oneCarSelector } from "../../redux/cars/selectors.js";
import clsx from "clsx";
export default function Features() {
  const { id } = useParams();
  const car = useSelector(oneCarSelector);
  console.log(car);

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {car.transmission === "automatic" && (
          <li className={css.listItem}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-diagram`}></use>
            </svg>
            <p className={css.iconText}>Automatic</p>
          </li>
        )}
        {car.gas && (
          <li className={css.listItem}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-gaz`}></use>
            </svg>
            <p className={css.iconText}>Petrol</p>
          </li>
        )}
        {car.kitchen && (
          <li className={css.listItem}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-cup-hot`}></use>
            </svg>
            <p className={css.iconText}>Kitchen</p>
          </li>
        )}
        {car.AC && (
          <li className={css.listItem}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-wind`}></use>
            </svg>
            <p className={css.iconText}>AC</p>
          </li>
        )}
        {car.TV && (
          <li className={css.listItem}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-tv`}></use>
            </svg>
            <p className={css.iconText}>TV</p>
          </li>
        )}
        {car.bathroom && (
          <li className={css.listItem}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-bi_droplet`}></use>
            </svg>
            <p className={css.iconText}>Bathroom</p>
          </li>
        )}
        {car.radio && (
          <li className={css.listItem}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-ui-radios`}></use>
            </svg>
            <p className={css.iconText}>Radio</p>
          </li>
        )}
        <li className={css.listItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-edults`}></use>
          </svg>
          <p className={css.iconText}>2 adults</p>
        </li>
      </ul>
      <h3 className={css.titleDetails}>Vehicle details</h3>
      <ul className={css.listDetails}>
        <li className={css.item}>
          <div className={css.itemContainer}>
            <p className={css.name}>Form</p>
            <p className={clsx(css.details, css.form)}>{car.form}</p>
          </div>
        </li>
        <li className={css.item}>
          <div className={css.itemContainer}>
            <p className={css.name}>Length</p>
            <p className={css.details}>{car.length}</p>
          </div>
        </li>
        <li className={css.item}>
          <div className={css.itemContainer}>
            <p className={css.name}>Width</p>
            <p className={css.details}>{car.width}</p>
          </div>
        </li>
        <li className={css.item}>
          <div className={css.itemContainer}>
            <p className={css.name}>Height</p>
            <p className={css.details}>{car.width}</p>
          </div>
        </li>
        <li className={css.item}>
          <div className={css.itemContainer}>
            <p className={css.name}>Tank</p>
            <p className={css.details}>{car.tank}</p>
          </div>
        </li>
        <li className={css.item}>
          <div className={css.itemContainer}>
            <p className={css.name}>Consumption</p>
            <p className={css.details}>{car.consumption}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
