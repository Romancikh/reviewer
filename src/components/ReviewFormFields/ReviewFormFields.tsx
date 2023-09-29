import { ChangeEvent } from "react";
import { Box, Button, TextField } from "tlp-ui-kit";

import { RatingParameters } from "../../types/RatingParameter";
import ReviewFormParameters from "../ReviewFormParameters/ReviewFormParameters";

type ReviewFormFieldsProps = {
  onChange: (
    event: Event,
    value: number | number[],
    activeThumb: number,
  ) => void;
  onClick: () => void;
  onTextChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  ratingParameters: RatingParameters;
  text: string;
};

function ReviewFormFields({
  onChange,
  onClick,
  onTextChange,
  ratingParameters,
  text,
}: ReviewFormFieldsProps) {
  return (
    <Box display="flex" flexDirection="column">
      <ReviewFormParameters
        onChange={onChange}
        ratingParameters={ratingParameters}
      />
      <TextField
        margin="normal"
        minRows={5}
        multiline
        onChange={onTextChange}
        placeholder="What could we improve?"
        value={text}
      />
      <Button alignSelf="flex-end" onClick={onClick} variant="contained">
        Send
      </Button>
    </Box>
  );
}

export default ReviewFormFields;
