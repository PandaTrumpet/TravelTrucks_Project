import { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import { useDispatch } from "react-redux";
import { fetchCars } from "../../Redux/cars/operation.js";
import CarsList from "../../components/CarsList/CarsList.jsx";
import css from "./CatalogPage.module.css";
import { useState } from "react";
export default function CatalogPage() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);
  const handlePage = () => {
    setPage((prevPage) => prevPage + 1); // Увеличиваем номер страницы
  };
  console.log(page);

  return (
    <div className={css.container}>
      <Sidebar />
      <CarsList handlePage={handlePage} />
    </div>
  );
}
