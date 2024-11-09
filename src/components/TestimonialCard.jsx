import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Rating,
} from "@mui/material";

function TestimonialCard({ avatar, name, rating, description, locationImage }) {
  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {locationImage && (
        <Box
          component="img"
          src={locationImage}
          alt="Location"
          sx={{ width: "100%", height: "auto", borderRadius: 1 }}
        />
      )}
      <CardContent>
        <Box display="flex" alignItems="center" gap={2} mb={2}>
          <Avatar src={avatar} alt={name} />
          <Box>
            <Typography variant="h6">{name}</Typography>
            <Rating value={rating} readOnly precision={0.5} />
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary" mb={2}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;
