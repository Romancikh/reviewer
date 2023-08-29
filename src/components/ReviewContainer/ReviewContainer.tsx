import { Stack, Typography } from "tlp-ui-kit";
import { Review as TReview } from "../../types/Review";
import Review from "../Review/Review";

type ReviewContainerProps = {
  reviews: TReview[];
};

function ReviewContainer({ reviews }: ReviewContainerProps) {
  return reviews.length ? (
    <Stack spacing={5} marginTop={5}>
      {reviews.map((review) => (
        <Review
          key={review.id}
          photo={review.photo}
          name={review.name}
          text={review.text}
          rating={review.rating}
        />
      ))}
    </Stack>
  ) : (
    <Typography variant="h4" color="#404040" marginTop={5}>
      No reviews yet
    </Typography>
  );
}

export default ReviewContainer;
