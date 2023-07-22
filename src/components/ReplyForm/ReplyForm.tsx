import { ChangeEvent, useMemo, useState } from "react";
import Button from "../Button/Button";
import Parameter from "../Parameter/Parameter";
import Textarea from "../Textarea/Textarea";
import "./ReplyForm.css";

type ReplyFormProps = {
  onReply: (rating: number, text: string) => void;
};
4;

function ReplyForm({ onReply }: ReplyFormProps) {
  const initialRatingParameters = {
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

  const [ratingParameters, setRatingParameters] = useState<{
    [id: string]: { id: string; label: string; value: number };
  }>(initialRatingParameters);
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
    onReply(rating, text);
    resetForm();
  };

  return (
    <div className="reply-form">
      <h1 className="reply-form__title">How nice was my reply?</h1>
      <div className="reply-form__content">
        <div className="reply-form__fields">
          <div className="reply-form__parameters">
            {Object.keys(ratingParameters).map((id) => (
              <Parameter
                key={id}
                id={ratingParameters[id].id}
                label={ratingParameters[id].label}
                value={ratingParameters[id].value}
                onChange={handleChange}
              />
            ))}
          </div>
          <Textarea
            id="text"
            value={text}
            placeholder="What could we improve?"
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
          <Button className="reply-form__button" onClick={handleClick}>
            Send
          </Button>
        </div>
        <span className="reply-form__rating">{rating}/5</span>
      </div>
    </div>
  );
}

export default ReplyForm;
