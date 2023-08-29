import { useMemo, useState } from "react";
import { Box, Typography } from "tlp-ui-kit";
import { RatingParameters } from "../../types/RatingParameter";
import ReviewFormFields from "../ReviewFormFields/ReviewFormFields";

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

  const handleChange = (event: Event, value: number | number[]) => {
    if (
      event.target !== null &&
      "name" in event.target &&
      typeof event.target.name === "string"
    ) {
      const id = event.target.name;
      const newValue = value;
      console.log(value);
      if (typeof newValue === "number")
        setRatingParameters({
          ...ratingParameters,
          [id]: { ...ratingParameters[id], value: newValue },
        });
    }
  };

  const handleClick = () => {
    onReview(rating, text);
    resetForm();
  };

  return (
    <Box width={504} display="flex" flexDirection="column" gap={5}>
      <Typography variant="h4" color="#404040">
        How nice was my reply?
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <ReviewFormFields
          ratingParameters={ratingParameters}
          onChange={handleChange}
          text={text}
          onTextChange={(event) => {
            setText(event.target.value);
          }}
          onClick={handleClick}
        />
        <Typography variant="h3" color="#404040">
          {rating}/5
        </Typography>
      </Box>
    </Box>
  );
}

export default ReviewForm;
