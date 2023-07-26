import { ChangeEventHandler, ChangeEvent } from "react";
import { RatingParameters } from "../../types/RatingParameter";
import ReviewFormFields from "../ReviewFormFields/ReviewFormFields";
import "./ReviewFormContent.css";

type ReviewFormContentProps = {
  ratingParameters: RatingParameters;
  onChange: ChangeEventHandler<HTMLInputElement>;
  text: string;
  onTextChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClick: () => void;
  rating: number;
};

function ReviewFormContent({
  ratingParameters,
  onChange,
  text,
  onTextChange,
  onClick,
  rating,
}: ReviewFormContentProps) {
  return (
    <div className="review-form__content">
      <ReviewFormFields
        ratingParameters={ratingParameters}
        onChange={onChange}
        text={text}
        onTextChange={onTextChange}
        onClick={onClick}
      />
      <span className="review-form__rating">{rating}/5</span>
    </div>
  );
}

export default ReviewFormContent;
