import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ChangeEvent } from "react";
import Button from "tlp-ui-kit/dist/Button/Button";
import { RatingParameters } from "../../types/RatingParameter";
import ReviewFormParameters from "../ReviewFormParameters/ReviewFormParameters";
type ReviewFormFieldsProps = {
  ratingParameters: RatingParameters;
  onChange: (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => void;
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
    <Box display="flex" flexDirection="column">
      <ReviewFormParameters
        ratingParameters={ratingParameters}
        onChange={onChange}
      />
      <TextField
        multiline
        value={text}
        placeholder="What could we improve?"
        minRows={5}
        margin="normal"
        onChange={onTextChange}
      />
      <Button variant="contained" onClick={onClick} alignSelf="flex-end">
        Send
      </Button>
    </Box>
  );
}

export default ReviewFormFields;
