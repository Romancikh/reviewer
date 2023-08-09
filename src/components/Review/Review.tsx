import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type ReviewProps = {
  photo: string;
  name: string;
  text: string;
  rating: number;
};

function Review({ photo, name, text, rating }: ReviewProps) {
  return (
    <Box display="flex">
      <Avatar
        alt="user"
        src={photo}
        sx={{
          width: "50px",
          height: "50px",
        }}
      />
      <Box
        display="flex"
        flexDirection="column"
        marginLeft={2}
        marginTop={2}
        gap={1.25}
      >
        <Typography color="#404040">{name}</Typography>
        <Typography variant="body2" color="#404040" width={451}>
          {text}
        </Typography>
      </Box>
      <Typography color="#404040" variant="h5" marginLeft={1.25} marginTop={2}>
        {rating}/5
      </Typography>
    </Box>
  );
}

export default Review;
