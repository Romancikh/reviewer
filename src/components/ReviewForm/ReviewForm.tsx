import { ChangeEvent, useMemo, useState } from "react";
import "./ReviewForm.css";
import ReviewFormContent from "../ReviewFormContent/ReviewFormContent";
import { RatingParameters } from "../../types/RatingParameter";

type ReviewFormProps = {
  onReview: (rating: number, text: string) => void;
};

function ReviewForm({ onReview }: ReviewFormProps) {
  const initialRatingParameters: RatingParameters = {
    cleanliness: {
      id: "cleanliness",
      label: "Cleanliness",
      value: 1,
    },
    customerService: {
      id: "customerService",
      label: "Customer Service",
      value: 1,
    },
    speed: {
      id: "speed",
      label: "Speed",
      value: 1,
    },
    location: {
      id: "location",
      label: "Location",
      value: 1,
    },
    facilities: {
      id: "facilities",
      label: "Facilities",
      value: 1,
    },
  };

  const [ratingParameters, setRatingParameters] = useState<RatingParameters>(
    initialRatingParameters
  );
  const [text, setText] = useState("");

  const resetForm = () => {
    setRatingParameters(initialRatingParameters);
    setText("");
  };

  const rating = useMemo(() => {
    let sum = 0;
    Object.keys(ratingParameters).forEach((id) => {
      sum += ratingParameters[id].value;
    });
    return sum / Object.keys(ratingParameters).length;
  }, [ratingParameters]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    const newValue = parseInt(event.target.value);
    setRatingParameters({
      ...ratingParameters,
      [id]: { ...ratingParameters[id], value: newValue },
    });
  };

  const handleClick = () => {
    onReview(rating, text);
    resetForm();
  };

  return (
    <div className="review-form">
      <h1 className="review-form__title">How nice was my reply?</h1>
      <ReviewFormContent
        ratingParameters={ratingParameters}
        onChange={handleChange}
        text={text}
        onTextChange={(event) => {
          setText(event.target.value);
        }}
        onClick={handleClick}
        rating={rating}
      />
    </div>
  );
}

export default ReviewForm;
