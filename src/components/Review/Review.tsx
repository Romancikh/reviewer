import { Avatar, Box, Typography } from "tlp-ui-kit";

type ReviewProps = {
  name: string;
  photo: string;
  rating: number;
  text: string;
};

function Review({ name, photo, rating, text }: ReviewProps) {
  return (
    <Box display="flex">
      <Avatar alt="user" height="50px" src={photo} width="50px" />
      <Box
        display="flex"
        flexDirection="column"
        gap={1.25}
        marginLeft={2}
        marginTop={2}
      >
        <Typography color="#404040">{name}</Typography>
        <Typography color="#404040" variant="body2" width={451}>
          {text}
        </Typography>
      </Box>
      <Typography color="#404040" marginLeft={1.25} marginTop={2} variant="h5">
        {rating}
        /5
      </Typography>
    </Box>
  );
}

export default Review;
