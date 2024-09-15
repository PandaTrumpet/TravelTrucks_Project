import css from "./Sidebar.module.css";
import sprite from "../../images/sprite.svg";
import { useId, useState } from "react";
export default function Sidebar() {
  const [isCheckedAC, setIsCheckedAC] = useState(false);
  const [isCheckedAutomatic, setIsCheckedAutomatic] = useState(false);
  const [isCheckedKitchen, setIsCheckedKitchen] = useState(false);
  const [isCheckedTV, setIsCheckedTV] = useState(false);
  const [isCheckedBathroom, setIsCheckedBathroom] = useState(false);
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
        <input
          type="text"
          className={css.location}
          id={locationId}
          placeholder="City"
        />
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
      <button type="submit">Search</button>
    </form>
  );
}
