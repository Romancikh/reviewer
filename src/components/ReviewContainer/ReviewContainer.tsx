import "./ReviewContainer.css";
import Review, { ReviewProps } from "../Review/Review";

type ReviewContainerProps = {
  reviews: ReviewProps[];
};

function ReviewContainer({ reviews }: ReviewContainerProps) {
  return reviews.length ? (
    <div className="review-container">
      {reviews.map((review) => (
        <Review
          key={review.key}
          photo={review.photo}
          name={review.name}
          text={review.text}
          rating={review.rating}
        />
      ))}
    </div>
  ) : (
    <h1 className="review-container review-container_empty">No reviews yet</h1>
  );
}

export default ReviewContainer;
