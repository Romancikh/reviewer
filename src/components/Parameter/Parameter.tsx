import { Box, Slider, Typography } from "tlp-ui-kit";

type ParameterProps = {
  name: string;
  label: string;
  value: number;
  onChange: (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => void;
};

function Parameter({ name, label, value, onChange }: ParameterProps) {
  return (
    <Box display="flex" gap={2} alignItems="center">
      <Slider
        name={name}
        marks
        valueLabelDisplay="auto"
        min={1}
        max={5}
        value={value}
        onChange={onChange}
        width="206px"
      />
      <Typography color="#404040" fontSize={20}>
        {label}
      </Typography>
    </Box>
  );
}

export default Parameter;
