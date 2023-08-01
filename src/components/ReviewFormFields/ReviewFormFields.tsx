import { ChangeEvent, ChangeEventHandler } from "react";
import { RatingParameters } from "../../types/RatingParameter";
import ReviewFormParameters from "../ReviewFormParameters/ReviewFormParameters";
import "./ReviewFormFields.css";

type ReviewFormFieldsProps = {
  ratingParameters: RatingParameters;
  onChange: ChangeEventHandler<HTMLInputElement>;
  text: string;
  onTextChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClick: () => void;
};

function ReviewFormFields({
  ratingParameters,
  onChange,
  text,
  onTextChange,
  onClick,
}: ReviewFormFieldsProps) {
  return (
    <div className="review-form__fields">
      <ReviewFormParameters
        ratingParameters={ratingParameters}
        onChange={onChange}
      />
      <textarea
        name="text"
        id="text"
        value={text}
        placeholder="What could we improve?"
        className="textarea review-form__textarea"
        onChange={onTextChange}
      />
      <button className="button review-form__button" onClick={onClick}>
        Send
      </button>
    </div>
  );
}

export default ReviewFormFields;
