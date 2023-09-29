import { useState } from "react";
import { Box, Container } from "tlp-ui-kit";
import { v4 as uuid } from "uuid";

import ReviewContainer from "./components/ReviewContainer/ReviewContainer";
import ReviewForm from "./components/ReviewForm/ReviewForm";
import { Review } from "./types/Review";

function App() {
  const [reviews, setReviews] = useState<Review[]>([]);

  const handleReview = (rating: number, text: string) => {
    setReviews([
      ...reviews,
      {
        id: uuid(),
        name: "John Doe",
        photo: `https://lipsum.app/random/50x50?=${uuid()}`,
        rating,
        text,
      },
    ]);
  };

  return (
    <Container
      alignItems="center"
      display="flex"
      flexDirection="column"
      margin="200px auto"
      maxWidth="xl"
    >
      <ReviewForm onReview={handleReview} />
      <Box bgcolor="#dcdcdc" height={0.25} marginTop={5} width="80%" />
      <ReviewContainer reviews={reviews} />
    </Container>
  );
}

export default App;
