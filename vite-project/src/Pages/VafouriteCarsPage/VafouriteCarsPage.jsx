import css from "./VafouriteCarsPage.module.css";
import { useSelector } from "react-redux";
import { favouriteCarsSelector } from "../../redux/cars/selectors.js";
import Car from "../../components/Car/Car.jsx";
export default function VafouriteCars() {
  const favouriteCars = useSelector(favouriteCarsSelector);
  console.log(favouriteCars);

  return (
    <div className={css.container}>
      <ul>
        {favouriteCars.length > 0 ? (
          favouriteCars.map((car) => {
            return (
              <li key={car.id}>
                <Car car={car} />
              </li>
            );
          })
        ) : (
          <div>There is no favourite car...Choose the car in catalog!</div>
        )}
      </ul>
    </div>
  );
}
