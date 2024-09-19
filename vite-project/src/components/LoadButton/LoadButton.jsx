import css from "./LoadButton.module.css";
import { useDispatch } from "react-redux";
import { plusPage } from "../../Redux/cars/slice.js";
export default function LoadButton() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(plusPage());
  };
  return (
    <button onClick={handleClick} className={css.btn}>
      Load more
    </button>
  );
}
