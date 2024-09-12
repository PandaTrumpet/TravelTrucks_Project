import css from "./Sidebar.module.css";
import { useState } from "react";
export default function Sidebar() {
  const [isChecked, setIsChecked] = useState(false);
  const handleDivClick = () => {
    setIsChecked((prevChecked) => {
      const newChecked = !prevChecked;
      console.log(newChecked ? "active" : "not active");
      return newChecked;
    });
  };
  return (
    <form className={css.sidebar}>
      <div>
        <p>Location</p>
        <input type="text" />
      </div>
      <p>Filters</p>
      <h3>Vehicle equipment</h3>
      <ul>
        <li>
          <div
            className={`${css.checkboxContainer} ${
              isChecked ? css.active : ""
            }`}
            onClick={handleDivClick}
          >
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleDivClick}
              className={css.hiddenCheckbox}
              name="TV"
            />
            <span className={css.icon}>✔</span>
            <span className={css.text}>Checkbox Label</span>
          </div>
        </li>
        <li>
          <button>Automatic</button>
        </li>
        <li>
          <button>Kitchen</button>
        </li>
        <li>
          <button>TV</button>
        </li>
        <li>
          <button>Bathroom</button>
        </li>
      </ul>
      <button type="submit">Search</button>
    </form>
  );
}
