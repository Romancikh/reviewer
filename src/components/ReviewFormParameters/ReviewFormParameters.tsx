import Stack from "@mui/material/Stack";
import { RatingParameters } from "../../types/RatingParameter";
import Parameter from "../Parameter/Parameter";

type ReviewFormParametersProps = {
  ratingParameters: RatingParameters;
  onChange: (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => void;
};

function ReviewFormParameters({
  ratingParameters,
  onChange,
}: ReviewFormParametersProps) {
  return (
    <Stack gap={4}>
      {Object.keys(ratingParameters).map((id) => (
        <Parameter
          key={id}
          name={ratingParameters[id].id}
          label={ratingParameters[id].label}
          value={ratingParameters[id].value}
          onChange={onChange}
        />
      ))}
    </Stack>
  );
}

export default ReviewFormParameters;
