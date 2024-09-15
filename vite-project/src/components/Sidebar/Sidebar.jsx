// import css from "./Sidebar.module.css";
// import sprite from "../../images/sprite.svg";
// import { useDispatch, useSelector } from "react-redux";
// import { useId, useState } from "react";
// import { filterSelector } from "../../redux/filter/selectors.js";
// export default function Sidebar() {
//   const [isCheckedAC, setIsCheckedAC] = useState(false);
//   const [isCheckedAutomatic, setIsCheckedAutomatic] = useState(false);
//   const [isCheckedKitchen, setIsCheckedKitchen] = useState(false);
//   const [isCheckedTV, setIsCheckedTV] = useState(false);
//   const [isCheckedBathroom, setIsCheckedBathroom] = useState(false);
//   const [isCheckedVan, setIsCheckedVan] = useState(false);
//   const [isCheckedFull, setIsCheckedFull] = useState(false);
//   const [isCheckedAlcove, setIsCheckedAlcove] = useState(false);
//   const selectorFilter = useSelector(filterSelector);
//   console.log(selectorFilter);

//   const onSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const selectedValues = Array.from(formData.entries())
//       .filter(([key, value]) => key === "vehicleType" && value)
//       .map(([key, value]) => value);

//     console.log("Selected checkboxes values:", selectedValues);
//   };
//   const handleDivClickAlcove = () => {
//     setIsCheckedAlcove((prevChecked) => {
//       const newChecked = !prevChecked;
//       // console.log(newChecked ? "active" : "not active");
//       return newChecked;
//     });
//   };
//   const handleDivClickFull = () => {
//     setIsCheckedFull((prevChecked) => {
//       const newChecked = !prevChecked;
//       // console.log(newChecked ? "active" : "not active");
//       return newChecked;
//     });
//   };
//   const handleDivClickVan = () => {
//     setIsCheckedVan((prevChecked) => {
//       const newChecked = !prevChecked;
//       // console.log(newChecked ? "active" : "not active");
//       return newChecked;
//     });
//   };
//   const handleDivClickBathroom = () => {
//     setIsCheckedBathroom((prevChecked) => {
//       const newChecked = !prevChecked;
//       // console.log(newChecked ? "active" : "not active");
//       return newChecked;
//     });
//   };
//   const handleDivClickTV = () => {
//     setIsCheckedTV((prevChecked) => {
//       const newChecked = !prevChecked;
//       // console.log(newChecked ? "active" : "not active");
//       return newChecked;
//     });
//   };
//   const handleDivClick = () => {
//     setIsCheckedAC((prevChecked) => {
//       const newChecked = !prevChecked;
//       // console.log(newChecked ? "active" : "not active");
//       return newChecked;
//     });
//   };
//   const handleDivClickAutomatic = () => {
//     setIsCheckedAutomatic((prevChecked) => {
//       const newChecked = !prevChecked;
//       // console.log(newChecked ? "active" : "not active");
//       return newChecked;
//     });
//   };
//   const handleDivClickKitchen = () => {
//     setIsCheckedKitchen((prevChecked) => {
//       const newChecked = !prevChecked;
//       // console.log(newChecked ? "active" : "not active");
//       return newChecked;
//     });
//   };

//   const locationId = useId();
//   return (
//     <form className={css.sidebar} onSubmit={onSubmit}>
//       <div className={css.locationCont}>
//         <label htmlFor={locationId} className={css.locationText}>
//           Location
//         </label>
//         <div className={css.inputWrapper}>
//           <input
//             type="text"
//             className={css.location}
//             id={locationId}
//             placeholder="City"
//             name="vehicleType"
//           />
//           <svg className={css.iconMap}>
//             <use href={`${sprite}#icon-map`}></use>
//           </svg>
//         </div>
//       </div>
//       <p className={css.filterText}>Filters</p>
//       <h3 className={css.vehicleTitle}>Vehicle equipment</h3>
//       <ul className={css.list}>
//         <li>
//           <div
//             className={`${css.checkboxContainer} ${
//               isCheckedAC ? css.active : ""
//             }`}
//             onClick={handleDivClick}
//           >
//             <input
//               type="checkbox"
//               checked={isCheckedAC}
//               onChange={handleDivClick}
//               className={css.hiddenCheckbox}
//               name="vehicleType"
//               value="AC"
//             />
//             <svg className={css.icon}>
//               <use href={`${sprite}#icon-wind`}></use>
//             </svg>
//             <span className={css.text}>AC</span>
//           </div>
//         </li>
//         <li>
//           <div
//             className={`${css.checkboxContainer} ${
//               isCheckedAutomatic ? css.active : ""
//             }`}
//             onClick={handleDivClickAutomatic}
//           >
//             <input
//               type="checkbox"
//               checked={isCheckedAutomatic}
//               onChange={handleDivClickAutomatic}
//               className={css.hiddenCheckbox}
//               name="vehicleType"
//               value="automatic"
//             />
//             <svg className={css.icon}>
//               <use href={`${sprite}#icon-diagram`}></use>
//             </svg>
//             <span className={css.text}>Automatic</span>
//           </div>
//         </li>
//         <li>
//           <div
//             className={`${css.checkboxContainer} ${
//               isCheckedKitchen ? css.active : ""
//             }`}
//             onClick={handleDivClickKitchen}
//           >
//             <input
//               type="checkbox"
//               checked={isCheckedKitchen}
//               onChange={handleDivClickKitchen}
//               className={css.hiddenCheckbox}
//               name="vehicleType"
//               value="kitchen"
//             />
//             <svg className={css.icon}>
//               <use href={`${sprite}#icon-cup-hot`}></use>
//             </svg>
//             <span className={css.text}>Kitchen</span>
//           </div>
//         </li>
//         <li>
//           <div
//             className={`${css.checkboxContainer} ${
//               isCheckedTV ? css.active : ""
//             }`}
//             onClick={handleDivClickTV}
//           >
//             <input
//               type="checkbox"
//               checked={isCheckedTV}
//               onChange={handleDivClickTV}
//               className={css.hiddenCheckbox}
//               name="vehicleType"
//               value="TV"
//             />
//             <svg className={css.icon}>
//               <use href={`${sprite}#icon-tv`}></use>
//             </svg>
//             <span className={css.text}>TV</span>
//           </div>
//         </li>
//         <li>
//           <div
//             className={`${css.checkboxContainer} ${
//               isCheckedBathroom ? css.active : ""
//             }`}
//             onClick={handleDivClickBathroom}
//           >
//             <input
//               type="checkbox"
//               checked={isCheckedBathroom}
//               onChange={handleDivClickBathroom}
//               className={css.hiddenCheckbox}
//               name="vehicleType"
//               value="bathroom"
//             />
//             <svg className={css.icon}>
//               <use href={`${sprite}#icon-bi_droplet`}></use>
//             </svg>
//             <span className={css.text}>Bathroom</span>
//           </div>
//         </li>
//       </ul>
//       <h3 className={css.vechileText}>Vehicle type</h3>
//       <ul className={css.filterVechile}>
//         <li>
//           <div
//             className={`${css.checkboxContainer} ${
//               isCheckedVan ? css.active : ""
//             }`}
//             onClick={handleDivClickVan}
//           >
//             <input
//               type="checkbox"
//               checked={isCheckedVan}
//               onChange={handleDivClickVan}
//               className={css.hiddenCheckbox}
//               value="panelTruck"
//               name="vehicleType"
//             />
//             <svg className={css.icon}>
//               <use href={`${sprite}#icon-bi_grid-1x2`}></use>
//             </svg>
//             <span className={css.text}>Van</span>
//           </div>
//         </li>
//         <li>
//           <div
//             className={`${css.checkboxContainer} ${
//               isCheckedFull ? css.active : ""
//             }`}
//             onClick={handleDivClickFull}
//           >
//             <input
//               type="checkbox"
//               checked={isCheckedFull}
//               onChange={handleDivClickFull}
//               className={css.hiddenCheckbox}
//               name="vehicleType"
//               value="fullyIntegrated"
//             />
//             <svg className={css.icon}>
//               <use href={`${sprite}#icon-bi_grid`}></use>
//             </svg>
//             <span className={css.text}>Fully Integrated</span>
//           </div>
//         </li>
//         <li>
//           <div
//             className={`${css.checkboxContainer} ${
//               isCheckedAlcove ? css.active : ""
//             }`}
//             onClick={handleDivClickAlcove}
//           >
//             <input
//               type="checkbox"
//               checked={isCheckedAlcove}
//               onChange={handleDivClickAlcove}
//               className={css.hiddenCheckbox}
//               name="vehicleType"
//               value="alcove"
//             />
//             <svg className={css.icon}>
//               <use href={`${sprite}#icon-bi_grid-3x3-gap`}></use>
//             </svg>
//             <span className={css.text}>Alcove</span>
//           </div>
//         </li>
//       </ul>
//       <button type="submit" className={css.btn}>
//         Search
//       </button>
//     </form>
//   );
// }

import css from "./Sidebar.module.css";
import sprite from "../../images/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { useId, useState } from "react";
import { filterSelector } from "../../redux/filter/selectors.js";

export default function Sidebar() {
  const [checkedValues, setCheckedValues] = useState({
    AC: false,
    Automatic: false,
    Kitchen: false,
    TV: false,
    Bathroom: false,
    Van: false,
    Full: false,
    Alcove: false,
  });

  const selectorFilter = useSelector(filterSelector);
  console.log(selectorFilter);

  const handleCheckboxChange = (value) => {
    setCheckedValues((prevCheckedValues) => ({
      ...prevCheckedValues,
      [value]: !prevCheckedValues[value],
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const selectedValues = Object.entries(checkedValues)
      .filter(([key, value]) => value)
      .map(([key]) => key);

    console.log("Selected checkboxes values:", selectedValues);
  };

  const locationId = useId();

  return (
    <form className={css.sidebar} onSubmit={onSubmit}>
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
            name="vehicleType"
          />
          <svg className={css.iconMap}>
            <use href={`${sprite}#icon-map`}></use>
          </svg>
        </div>
      </div>
      <p className={css.filterText}>Filters</p>
      <h3 className={css.vehicleTitle}>Vehicle equipment</h3>
      <ul className={css.list}>
        {Object.keys(checkedValues)
          .slice(0, 6)
          .map((key) => (
            <li key={key}>
              <div
                className={`${css.checkboxContainer} ${
                  checkedValues[key] ? css.active : ""
                }`}
                onClick={() => handleCheckboxChange(key)}
              >
                <input
                  type="checkbox"
                  checked={checkedValues[key]}
                  onChange={() => handleCheckboxChange(key)}
                  className={css.hiddenCheckbox}
                  value={key}
                  name="vehicleType"
                />
                <svg className={css.icon}>
                  <use href={`${sprite}#icon-${key.toLowerCase()}`}></use>
                </svg>
                <span className={css.text}>{key}</span>
              </div>
            </li>
          ))}
      </ul>
      <h3 className={css.vechileText}>Vehicle type</h3>
      <ul className={css.filterVechile}>
        {Object.keys(checkedValues)
          .slice(6)
          .map((key) => (
            <li key={key}>
              <div
                className={`${css.checkboxContainer} ${
                  checkedValues[key] ? css.active : ""
                }`}
                onClick={() => handleCheckboxChange(key)}
              >
                <input
                  type="checkbox"
                  checked={checkedValues[key]}
                  onChange={() => handleCheckboxChange(key)}
                  className={css.hiddenCheckbox}
                  value={key}
                  name="vehicleType"
                />
                <svg className={css.icon}>
                  <use href={`${sprite}#icon-${key.toLowerCase()}`}></use>
                </svg>
                <span className={css.text}>{key}</span>
              </div>
            </li>
          ))}
      </ul>
      <button type="submit" className={css.btn}>
        Search
      </button>
    </form>
  );
}
