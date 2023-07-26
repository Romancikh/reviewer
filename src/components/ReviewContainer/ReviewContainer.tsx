import "./ReviewContainer.css";
import { Review as TReview } from "../../types/Review";
import Review from "../Review/Review";

type ReviewContainerProps = {
  reviews: TReview[];
};

function ReviewContainer({ reviews }: ReviewContainerProps) {
  return reviews.length ? (
    <div className="review-container">
      {reviews.map((review) => (
        <Review
          key={review.id}
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
