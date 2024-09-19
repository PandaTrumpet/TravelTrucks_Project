import { useEffect } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import { useDispatch } from "react-redux";
import { fetchCars } from "../../Redux/cars/operation.js";
import CarsList from "../../components/CarsList/CarsList.jsx";
import css from "./CatalogPage.module.css";
import { useState } from "react";
import { pageSelector } from "../../redux/cars/selectors.js";
export default function CatalogPage() {
  const dispatch = useDispatch();
  const page = useSelector(pageSelector);
  console.log(page);

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);
  // const handlePage = () => {
  //   setPage((prevPage) => prevPage + 1); // Увеличиваем номер страницы
  // };
  console.log(page);

  return (
    <div className={css.container}>
      <Sidebar />
      <CarsList />
    </div>
  );
}
