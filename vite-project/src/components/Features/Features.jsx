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
        <li className={css.listItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-diagram`}></use>
          </svg>
          <p>Automatic</p>
        </li>
        <li className={css.listItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-wind`}></use>
          </svg>
          <p>AC</p>
        </li>
        <li className={css.listItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-gaz`}></use>
          </svg>
          <p>Petrol</p>
        </li>
        <li className={css.listItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-cup-hot`}></use>
          </svg>
          <p>Kitchen</p>
        </li>
        <li className={css.listItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-ui-radios`}></use>
          </svg>
          <p>Radio</p>
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
