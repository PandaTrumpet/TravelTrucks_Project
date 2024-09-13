import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarId } from "../Redux/cars/operation.js";
import { carInfoSelector, carsSelector } from "../redux/cars/selectors.js";
export default function CatalogCamper() {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCarId(id));
  }, [dispatch, id]);
  const car = useSelector(carInfoSelector);
  console.log(car);

  return <div>Catalofg Camper</div>;
}
