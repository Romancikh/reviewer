import { Box, Slider, Typography } from "tlp-ui-kit";

type ParameterProps = {
  label: string;
  name: string;
  onChange: (
    event: Event,
    value: number | number[],
    activeThumb: number,
  ) => void;
  value: number;
};

function Parameter({ label, name, onChange, value }: ParameterProps) {
  return (
    <Box alignItems="center" display="flex" gap={2}>
      <Slider
        marks
        max={5}
        min={1}
        name={name}
        onChange={onChange}
        value={value}
        valueLabelDisplay="auto"
        width="206px"
      />
      <Typography color="#404040" fontSize={20}>
        {label}
      </Typography>
    </Box>
  );
}

export default Parameter;
