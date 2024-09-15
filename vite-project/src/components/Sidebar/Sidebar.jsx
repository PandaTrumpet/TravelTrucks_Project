import css from "./Sidebar.module.css";
import sprite from "../../images/sprite.svg";
import { useId, useState } from "react";
export default function Sidebar() {
  const [isCheckedAC, setIsCheckedAC] = useState(false);
  const [isCheckedAutomatic, setIsCheckedAutomatic] = useState(false);
  const [isCheckedKitchen, setIsCheckedKitchen] = useState(false);
  const [isCheckedTV, setIsCheckedTV] = useState(false);
  const [isCheckedBathroom, setIsCheckedBathroom] = useState(false);
  const [isCheckedVan, setIsCheckedVan] = useState(false);
  const [isCheckedFull, setIsCheckedFull] = useState(false);
  const [isCheckedAlcove, setIsCheckedAlcove] = useState(false);

  const handleDivClickAlcove = () => {
    setIsCheckedAlcove((prevChecked) => {
      const newChecked = !prevChecked;
      // console.log(newChecked ? "active" : "not active");
      return newChecked;
    });
  };
  const handleDivClickFull = () => {
    setIsCheckedFull((prevChecked) => {
      const newChecked = !prevChecked;
      // console.log(newChecked ? "active" : "not active");
      return newChecked;
    });
  };
  const handleDivClickVan = () => {
    setIsCheckedVan((prevChecked) => {
      const newChecked = !prevChecked;
      // console.log(newChecked ? "active" : "not active");
      return newChecked;
    });
  };
  const handleDivClickBathroom = () => {
    setIsCheckedBathroom((prevChecked) => {
      const newChecked = !prevChecked;
      // console.log(newChecked ? "active" : "not active");
      return newChecked;
    });
  };
  const handleDivClickTV = () => {
    setIsCheckedTV((prevChecked) => {
      const newChecked = !prevChecked;
      // console.log(newChecked ? "active" : "not active");
      return newChecked;
    });
  };
  const handleDivClick = () => {
    setIsCheckedAC((prevChecked) => {
      const newChecked = !prevChecked;
      // console.log(newChecked ? "active" : "not active");
      return newChecked;
    });
  };
  const handleDivClickAutomatic = () => {
    setIsCheckedAutomatic((prevChecked) => {
      const newChecked = !prevChecked;
      // console.log(newChecked ? "active" : "not active");
      return newChecked;
    });
  };
  const handleDivClickKitchen = () => {
    setIsCheckedKitchen((prevChecked) => {
      const newChecked = !prevChecked;
      // console.log(newChecked ? "active" : "not active");
      return newChecked;
    });
  };

  const locationId = useId();
  return (
    <form className={css.sidebar}>
      <div className={css.locationCont}>
        <label htmlFor={locationId} className={css.locationText}>
          Location
        </label>
        <div className={css.inputWrapper}>
          <input
            type="text"
            className={css.location}
            id={locationId}
            placeholder="City"
          />
          <svg className={css.iconMap}>
            <use href={`${sprite}#icon-map`}></use>
          </svg>
        </div>
      </div>
      <p className={css.filterText}>Filters</p>
      <h3 className={css.vehicleTitle}>Vehicle equipment</h3>
      <ul className={css.list}>
        <li>
          <div
            className={`${css.checkboxContainer} ${
              isCheckedAC ? css.active : ""
            }`}
            onClick={handleDivClick}
          >
            <input
              type="checkbox"
              checked={isCheckedAC}
              onChange={handleDivClick}
              className={css.hiddenCheckbox}
              name="TV"
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-wind`}></use>
            </svg>
            <span className={css.text}>AC</span>
          </div>
        </li>
        <li>
          <div
            className={`${css.checkboxContainer} ${
              isCheckedAutomatic ? css.active : ""
            }`}
            onClick={handleDivClickAutomatic}
          >
            <input
              type="checkbox"
              checked={isCheckedAutomatic}
              onChange={handleDivClickAutomatic}
              className={css.hiddenCheckbox}
              name="TV"
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-diagram`}></use>
            </svg>
            <span className={css.text}>Automatic</span>
          </div>
        </li>
        <li>
          <div
            className={`${css.checkboxContainer} ${
              isCheckedKitchen ? css.active : ""
            }`}
            onClick={handleDivClickKitchen}
          >
            <input
              type="checkbox"
              checked={isCheckedKitchen}
              onChange={handleDivClickKitchen}
              className={css.hiddenCheckbox}
              name="TV"
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-cup-hot`}></use>
            </svg>
            <span className={css.text}>Kitchen</span>
          </div>
        </li>
        <li>
          <div
            className={`${css.checkboxContainer} ${
              isCheckedTV ? css.active : ""
            }`}
            onClick={handleDivClickTV}
          >
            <input
              type="checkbox"
              checked={isCheckedTV}
              onChange={handleDivClickTV}
              className={css.hiddenCheckbox}
              name="TV"
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-tv`}></use>
            </svg>
            <span className={css.text}>TV</span>
          </div>
        </li>
        <li>
          <div
            className={`${css.checkboxContainer} ${
              isCheckedBathroom ? css.active : ""
            }`}
            onClick={handleDivClickBathroom}
          >
            <input
              type="checkbox"
              checked={isCheckedBathroom}
              onChange={handleDivClickBathroom}
              className={css.hiddenCheckbox}
              name="TV"
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-bi_droplet`}></use>
            </svg>
            <span className={css.text}>Bathroom</span>
          </div>
        </li>
      </ul>
      <h3 className={css.vechileText}>Vehicle type</h3>
      <ul className={css.filterVechile}>
        <li>
          <div
            className={`${css.checkboxContainer} ${
              isCheckedVan ? css.active : ""
            }`}
            onClick={handleDivClickVan}
          >
            <input
              type="checkbox"
              checked={isCheckedVan}
              onChange={handleDivClickVan}
              className={css.hiddenCheckbox}
              name="TV"
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-bi_grid-1x2`}></use>
            </svg>
            <span className={css.text}>Van</span>
          </div>
        </li>
        <li>
          <div
            className={`${css.checkboxContainer} ${
              isCheckedFull ? css.active : ""
            }`}
            onClick={handleDivClickFull}
          >
            <input
              type="checkbox"
              checked={isCheckedFull}
              onChange={handleDivClickFull}
              className={css.hiddenCheckbox}
              name="TV"
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-bi_grid`}></use>
            </svg>
            <span className={css.text}>Fully Integrated</span>
          </div>
        </li>
        <li>
          <div
            className={`${css.checkboxContainer} ${
              isCheckedAlcove ? css.active : ""
            }`}
            onClick={handleDivClickAlcove}
          >
            <input
              type="checkbox"
              checked={isCheckedAlcove}
              onChange={handleDivClickAlcove}
              className={css.hiddenCheckbox}
              name="TV"
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-bi_grid-3x3-gap`}></use>
            </svg>
            <span className={css.text}>Alcove</span>
          </div>
        </li>
      </ul>
      <button type="submit" className={css.btn}>
        Search
      </button>
    </form>
  );
}
