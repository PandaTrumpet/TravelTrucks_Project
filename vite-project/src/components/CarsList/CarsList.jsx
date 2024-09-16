import css from "./CarsList.module.css";
import Car from "../Car/Car.jsx";
import { useSelector } from "react-redux";
import { carsSelector } from "../../redux/cars/selectors.js";
import { filteredCars } from "../../Redux/cars/slice.js";
export default function CarsList() {
  // const cars = useSelector(carsSelector);
  const cars = useSelector(filteredCars);
  // console.log(cars);

  const findAC = cars.filter(
    (car) =>
      car.AC === true &&
      car.TV === true &&
      car.bathroom === true &&
      car.location.includes("Kha")
  );
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
