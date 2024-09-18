import { useSelector } from "react-redux";
import { favouriteCarsSelector } from "../../redux/cars/selectors.js";
export default function VafouriteCars() {
  const favouriteCars = useSelector(favouriteCarsSelector);
  console.log(favouriteCars);

  return <div>FavouriteCars</div>;
}
