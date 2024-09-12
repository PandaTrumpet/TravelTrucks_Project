import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import { showCars, showCarsId } from "../../components/fetchCars.js";

export default function CatalogPage() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // const fetchCars = async () => {
    //   const data = await showCars();
    //   console.log(data);

    //   if (data) {
    //     setCars(data);
    //   }
    // };

    // fetchCars();
    const fetchCars = async () => {
      const data = await showCarsId(2);
      console.log(data);
    };
    fetchCars();
  }, []);
  return (
    <>
      <Sidebar />
    </>
  );
}
