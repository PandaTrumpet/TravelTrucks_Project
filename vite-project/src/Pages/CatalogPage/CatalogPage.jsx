import { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import { useDispatch } from "react-redux";
import { fetchCars } from "../../Redux/cars/operation.js";
import CarsList from "../../components/CarsList/CarsList.jsx";

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
      <Sidebar />
      <CarsList />
    </>
  );
}
