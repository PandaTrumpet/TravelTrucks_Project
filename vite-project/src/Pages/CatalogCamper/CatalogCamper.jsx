import {
  useParams,
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import clsx from "clsx";
import css from "./CatalogCamper.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarId } from "../../Redux/cars/operation.js";
import CarInformation from "../../components/CarInformation/CarInformation.jsx";
import BookingForm from "../../components/BookingForm/BookingForm.jsx";
import { Suspense } from "react";
export default function CatalogCamper() {
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchCarId(id));

    if (location.pathname === `/catalog/${id}`) {
      navigate("features", { replace: true });
    }
  }, [dispatch, id, location.pathname, navigate]);

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
