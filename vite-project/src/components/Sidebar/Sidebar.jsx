import css from "./Sidebar.module.css";
import sprite from "../../images/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { useId, useState } from "react";
import {
  filterSelector,
  locationSelector,
} from "../../redux/filter/selectors.js";
import { filterCars, filterCity } from "../../redux/filter/slice.js";
import { carsSelector } from "../../redux/cars/selectors.js";

export default function Sidebar() {
  const [isCheckedAC, setIsCheckedAC] = useState(false);
  const [isCheckedAutomatic, setIsCheckedAutomatic] = useState(false);
  const [isCheckedKitchen, setIsCheckedKitchen] = useState(false);
  const [isCheckedTV, setIsCheckedTV] = useState(false);
  const [isCheckedBathroom, setIsCheckedBathroom] = useState(false);
  const [selectedVehicleType, setSelectedVehicleType] = useState(null); // Use single state for selected vehicle type
  // const [city, setCity] = useState("");
  // console.log(city);

  const dispatch = useDispatch();
  const cars = useSelector(carsSelector); // Получаем автомобили
  const filters = useSelector(filterSelector); // Получаем фильтры
  // console.log(isCheckedAutomatic);
  const onSubmit = (e) => {
    e.preventDefault();
    // const formData = new FormData(e.target);

    const selectedFilters = {
      AC: isCheckedAC,
      transmission: isCheckedAutomatic && "automatic",
      kitchen: isCheckedKitchen,
      TV: isCheckedTV,
      bathroom: isCheckedBathroom,
      form: selectedVehicleType, // Single selected vehicle type
    };

    dispatch(filterCars(selectedFilters));
    dispatch(filterCity(e.target.location.value));

    // console.log("Selected filters:", selectedFilters);
  };

  const locationName = useSelector(locationSelector);
  console.log(locationName);

  // const apartments = [
  //   { id: 1, TV: true, AC: true, area: 50 },
  //   { id: 2, TV: false, AC: true, area: 30 },
  //   { id: 3, TV: true, AC: true, area: 45 },
  //   { id: 4, TV: false, AC: false, area: 70 },
  // ];
  // const filterCriteria = {
  //   TV: true,
  //   AC: true,
  // };
  // const filterApartments = (array, criteria) => {
  //   return array.filter((apartment) => {
  //     return Object.keys(criteria).every((key) => {
  //       return apartment[key] === criteria[key];
  //     });
  //   });
  // };
  // const filteredApartments = filterApartments(apartments, filterCriteria);

  // console.log(filteredApartments);
  const handleDivClick = (filterName) => {
    switch (filterName) {
      case "AC":
        setIsCheckedAC((prev) => !prev);
        break;
      case "transmission":
        setIsCheckedAutomatic((prev) => !prev);
        break;
      case "kitchen":
        setIsCheckedKitchen((prev) => !prev);
        break;
      case "TV":
        setIsCheckedTV((prev) => !prev);
        break;
      case "bathroom":
        setIsCheckedBathroom((prev) => !prev);
        break;
      default:
        break;
    }
  };

  const handleDivClickType = (vehicleType) => {
    setSelectedVehicleType(vehicleType); // Set the selected vehicle type
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
            // onChange={(e) => {
            //   setCity(e.target.value);
            // }}
            name="location" // Change name to "location" to avoid confusion with vehicleType
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
            onClick={() => handleDivClick("AC")}
          >
            <input
              type="checkbox"
              checked={isCheckedAC}
              onChange={() => handleDivClick("AC")}
              className={css.hiddenCheckbox}
              name="AC"
              value="AC"
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
            onClick={() => handleDivClick("transmission")}
          >
            <input
              type="checkbox"
              checked={isCheckedAutomatic}
              onChange={() => handleDivClick("transmission")}
              className={css.hiddenCheckbox}
              name="transmission"
              value="automatic"
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
            onClick={() => handleDivClick("kitchen")}
          >
            <input
              type="checkbox"
              checked={isCheckedKitchen}
              onChange={() => handleDivClick("kitchen")}
              className={css.hiddenCheckbox}
              name="kitchen"
              value="kitchen"
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
            onClick={() => handleDivClick("TV")}
          >
            <input
              type="checkbox"
              checked={isCheckedTV}
              onChange={() => handleDivClick("TV")}
              className={css.hiddenCheckbox}
              name="TV"
              value="TV"
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
            onClick={() => handleDivClick("bathroom")}
          >
            <input
              type="checkbox"
              checked={isCheckedBathroom}
              onChange={() => handleDivClick("bathroom")}
              className={css.hiddenCheckbox}
              name="bathroom"
              value="bathroom"
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
              selectedVehicleType === "panelTruck" ? css.active : ""
            }`}
            onClick={() => handleDivClickType("panelTruck")}
          >
            <input
              type="checkbox"
              checked={selectedVehicleType === "panelTruck"}
              onChange={() => handleDivClickType("panelTruck")}
              className={css.hiddenCheckbox}
              value="panelTruck"
              name="form"
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
              selectedVehicleType === "fullyIntegrated" ? css.active : ""
            }`}
            onClick={() => handleDivClickType("fullyIntegrated")}
          >
            <input
              type="checkbox"
              checked={selectedVehicleType === "fullyIntegrated"}
              onChange={() => handleDivClickType("fullyIntegrated")}
              className={css.hiddenCheckbox}
              value="fullyIntegrated"
              name="form"
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
              selectedVehicleType === "alcove" ? css.active : ""
            }`}
            onClick={() => handleDivClickType("alcove")}
          >
            <input
              type="checkbox"
              checked={selectedVehicleType === "alcove"}
              onChange={() => handleDivClickType("alcove")}
              className={css.hiddenCheckbox}
              value="alcove"
              name="form"
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
