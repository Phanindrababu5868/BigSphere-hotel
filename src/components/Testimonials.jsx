import { Box, Typography } from "@mui/material";
import TestimonialCard from "./TestimonialCard";

// Sample testimonial data
const testimonials = [
  {
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Arjun Raghav",
    rating: 4.5,
    description:
      "I am writing this after reflecting on my one-month stay with Brisphere in Ladakh...",
    locationImage:
      "https://th.bing.com/th/id/OIP.QIKyrL--L5L56dZzF5YNUQHaE8?w=278&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    name: "Anand Solanki",
    rating: 4,
    description:
      "Right from picking us up at the airport to dropping us back after a month, Urgan was very responsible...",
  },
];

function Testimonials() {
  return (
    <Box sx={{ padding: 4 }} id={"discover"}>
      <Typography variant="h4" align="center" gutterBottom>
        Discover
      </Typography>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            avatar={testimonial.avatar}
            name={testimonial.name}
            rating={testimonial.rating}
            description={testimonial.description}
            locationImage={testimonial.locationImage}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Testimonials;
