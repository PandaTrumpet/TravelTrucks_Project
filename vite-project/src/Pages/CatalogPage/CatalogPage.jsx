import { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarId, fetchCars } from "../../Redux/cars/operation.js";
import { carsSelector } from "../../redux/cars/selectors.js";
export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarId(2));
  }, [dispatch]);

  return (
    <>
      <Sidebar />
    </>
  );
}
