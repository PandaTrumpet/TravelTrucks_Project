import { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import { useDispatch } from "react-redux";
import { fetchCars } from "../../redux/cars/operation.js";
import CarsList from "../../components/CarsList/CarsList.jsx";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <div className={css.sideBarContainer}>
        <Sidebar />
      </div>

      <CarsList />
    </div>
  );
}
