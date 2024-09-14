import { useParams, NavLink, Outlet } from "react-router-dom";
import { useEffect } from "react";
import css from "./CatalogCamper.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarId } from "../../Redux/cars/operation.js";
import { oneCarSelector } from "../../redux/cars/selectors.js";
import CarInformation from "../../components/CarInformation/CarInformation.jsx";
export default function CatalogCamper() {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCarId(id));
  }, [dispatch, id]);
  const car = useSelector(oneCarSelector);
  console.log(car);

  return (
    <div className={css.container}>
      <div>
        <CarInformation car={car} />
      </div>
      <ul>
        <li>
          <NavLink to="features">Features</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
