import { v4 as uuid } from "uuid";
import { useState } from "react";
import "./App.css";
import ReviewContainer from "./components/ReviewContainer/ReviewContainer";
import ReviewForm from "./components/ReviewForm/ReviewForm";
import { Review } from "./types/Review";

function App() {
  const [reviews, setReviews] = useState<Review[]>([]);

  const handleReview = (rating: number, text: string) => {
    setReviews([
      ...reviews,
      {
        key: uuid(),
        name: "John Doe",
        photo: `https://lipsum.app/random/50x50?=${uuid()}`,
        text,
        rating,
      },
    ]);
  };

  return (
    <>
      <ReviewForm onReview={handleReview} />
      <div className="divisor" />
      <ReviewContainer reviews={reviews} />
    </>
  );
}

export default App;
