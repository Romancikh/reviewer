import { Stack } from "tlp-ui-kit";

import { RatingParameters } from "../../types/RatingParameter";
import Parameter from "../Parameter/Parameter";

type ReviewFormParametersProps = {
  onChange: (
    event: Event,
    value: number | number[],
    activeThumb: number,
  ) => void;
  ratingParameters: RatingParameters;
};

function ReviewFormParameters({
  onChange,
  ratingParameters,
}: ReviewFormParametersProps) {
  return (
    <Stack spacing={4}>
      {Object.keys(ratingParameters).map((id) => (
        <Parameter
          key={id}
          label={ratingParameters[id].label}
          name={ratingParameters[id].id}
          onChange={onChange}
          value={ratingParameters[id].value}
        />
      ))}
    </Stack>
  );
}

export default ReviewFormParameters;
