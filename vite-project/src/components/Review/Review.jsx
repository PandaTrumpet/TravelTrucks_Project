import css from "./Review.module.css";

export default function Review({ review }) {
  const firstLetter = review.reviewer_name.charAt(0);
  const rating = review.reviewer_rating;
  const stars = Array(review.reviewer_rating).fill(0);
  console.log(stars);

  return (
    <div>
      <div>
        <p>{firstLetter}</p>
        <div>
          <ul>
            {stars.map((_, index) => (
              <span key={index}>★</span>
            ))}
          </ul>
          <h3>{review.reviewer_name}</h3>
        </div>
      </div>
      <p>{review.comment}</p>
    </div>
  );
}
