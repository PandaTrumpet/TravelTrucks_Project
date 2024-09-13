import css from "./Features.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { oneCarSelector } from "../../redux/cars/selectors.js";
export default function Features() {
  const { id } = useParams();
  const car = useSelector(oneCarSelector);
  // console.log(car);

  return <div>Features</div>;
}
