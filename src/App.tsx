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
        text,
        rating,
      },
    ]);
  };

  return (
    <Container
      maxWidth="xl"
      display="flex"
      flexDirection="column"
      alignItems="center"
      margin="200px auto"
    >
      <ReviewForm onReview={handleReview} />
      <Box width="80%" marginTop={5} height={0.25} bgcolor="#dcdcdc" />
      <ReviewContainer reviews={reviews} />
    </Container>
  );
}

export default App;
