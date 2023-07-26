import { ChangeEventHandler } from "react";
import { RatingParameters } from "../../types/RatingParameter";
import Parameter from "../Parameter/Parameter";
import "./ReviewFormParameters.css";

type ReviewFormParametersProps = {
  ratingParameters: RatingParameters;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

function ReviewFormParameters({
  ratingParameters,
  onChange,
}: ReviewFormParametersProps) {
  return (
    <div className="review-form__parameters">
      {Object.keys(ratingParameters).map((id) => (
        <Parameter
          key={id}
          id={ratingParameters[id].id}
          label={ratingParameters[id].label}
          value={ratingParameters[id].value}
          onChange={onChange}
        />
      ))}
    </div>
  );
}

export default ReviewFormParameters;
