import css from "./Review.module.css";

export default function Review({ review }) {
  const firstLetter = review.reviewer_name.charAt(0);
  return (
    <div>
      <div>
        <p>{firstLetter}</p>
      </div>
      <h3>{review.reviewer_name}</h3>
    </div>
  );
}
