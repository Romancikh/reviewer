import { ChangeEvent, ChangeEventHandler } from "react";
import { RatingParameters } from "../../types/RatingParameter";
import Button from "../Button/Button";
import ReviewFormParameters from "../ReviewFormParameters/ReviewFormParameters";
import Textarea from "../Textarea/Textarea";
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
      <Textarea
        id="text"
        value={text}
        placeholder="What could we improve?"
        onChange={onTextChange}
      />
      <Button className="review-form__button" onClick={onClick}>
        Send
      </Button>
    </div>
  );
}

export default ReviewFormFields;
