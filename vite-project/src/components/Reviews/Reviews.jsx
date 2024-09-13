import css from "./Reviews.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { oneCarSelector } from "../../redux/cars/selectors.js";
import Review from "../Review/Review.jsx";
export default function Reviews() {
  const { id } = useParams();
  const car = useSelector(oneCarSelector);
  const reviews = car.reviews;
  console.log(reviews);

  return (
    <div>
      <ul>
        {reviews.length > 0 &&
          reviews.map((review, index) => {
            return (
              <li key={index}>
                <Review review={review} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
