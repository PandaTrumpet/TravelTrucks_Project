import css from "./CarsList.module.css";
import Car from "../Car/Car.jsx";
import { useSelector } from "react-redux";
import { carsSelector } from "../../redux/cars/selectors.js";
export default function CarsList() {
  const cars = useSelector(carsSelector);
  console.log(cars);
  const findAC = cars.filter((car) => car.TV === true);
  // console.log(findAC);

  return (
    <div>
      <ul>
        {cars.length > 0 &&
          cars.map((car) => {
            return (
              <li key={car.id}>
                <Car car={car} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
