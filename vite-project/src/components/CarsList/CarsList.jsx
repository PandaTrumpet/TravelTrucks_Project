import css from "./CarsList.module.css";
import Car from "../Car/Car.jsx";
import { useSelector } from "react-redux";
import { carsSelector } from "../../redux/cars/selectors.js";
import { filteredCars, fullfiltered } from "../../Redux/cars/slice.js";
import LoadButton from "../LoadButton/LoadButton.jsx";
export default function CarsList() {
  // const cars = useSelector(carsSelector);
  // const cars = useSelector(filteredCars);
  const cars = useSelector(fullfiltered);
  console.log(cars);

  return (
    <div className={css.container}>
      <ul className={css.listCars}>
        {cars.length > 0 &&
          cars.map((car) => {
            return (
              <li key={car.id}>
                <Car car={car} />
              </li>
            );
          })}
      </ul>
      {/* <LoadButton /> */}
    </div>
  );
}
