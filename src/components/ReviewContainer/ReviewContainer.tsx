import { Stack, Typography } from "tlp-ui-kit";

import { Review as TReview } from "../../types/Review";
import Review from "../Review/Review";

type ReviewContainerProps = {
  reviews: TReview[];
};

function ReviewContainer({ reviews }: ReviewContainerProps) {
  return reviews.length ? (
    <Stack marginTop={5} spacing={5}>
      {reviews.map((review) => (
        <Review
          key={review.id}
          name={review.name}
          photo={review.photo}
          rating={review.rating}
          text={review.text}
        />
      ))}
    </Stack>
  ) : (
    <Typography color="#404040" marginTop={5} variant="h4">
      No reviews yet
    </Typography>
  );
}

export default ReviewContainer;
