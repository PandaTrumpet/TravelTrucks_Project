import { useParams, NavLink, Outlet } from "react-router-dom";
import { useEffect } from "react";
import clsx from "clsx";
import css from "./CatalogCamper.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarId } from "../../Redux/cars/operation.js";
import { oneCarSelector } from "../../redux/cars/selectors.js";
import CarInformation from "../../components/CarInformation/CarInformation.jsx";
import BookingForm from "../../components/BookingForm/BookingForm.jsx";
import { Suspense } from "react";
export default function CatalogCamper() {
  const { id } = useParams();
  // const location = useLocation();
  // console.log(location);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCarId(id));
  }, [dispatch, id]);

  const activeClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div className={css.container}>
      <div>
        <CarInformation />
      </div>
      <ul className={css.list}>
        <li>
          <NavLink to="features" className={activeClass}>
            Features
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={activeClass}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <div className={css.outletContainer}>
        <div className={css.outlet}>
          <Suspense fallback={<div>Please wait...</div>}>
            <Outlet />
          </Suspense>
        </div>
        <div className={css.formContainer}>
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
