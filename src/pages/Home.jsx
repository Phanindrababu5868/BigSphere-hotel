import { Box, Grid2, Typography } from "@mui/material";

import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import Testimonials from "../components/Testimonials";

//icons
import FastfoodIcon from "@mui/icons-material/Fastfood";
import WifiIcon from "@mui/icons-material/Wifi";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import MapIcon from "@mui/icons-material/Map";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CarRentalIcon from "@mui/icons-material/CarRental";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Home() {
  return (
    <Box>
      <HeroSection />
      <Testimonials />
      <Box sx={{ padding: 4 }} id="services">
        <Typography variant="h4" sx={{ my: 4, textAlign: "center" }}>
          Services
        </Typography>
        <Grid2 container spacing={2} display={"flex"} justifyContent={"center"}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              Icon={service.icon}
            />
          ))}
        </Grid2>
      </Box>
    </Box>
  );
}

export default Home;

const services = [
  {
    title: "High Speed Internet",
    description:
      "Optical fiber connections provided not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas.",
    icon: WifiIcon,
  },
  {
    title: "Healthy Meals",
    description:
      "A healthy breakfast and pleasant dinner will be serviced at your space every single day for your entire duration of stay with the option of paid orders within BriSphere.",
    icon: FastfoodIcon,
  },
  {
    title: "Homely Stay",
    description:
      "Designed for working professionals with spacious interiors, comfortable beds, and sleekly attached kitchens are some of the comforts provided in your space.",
    icon: HomeIcon,
  },
  {
    title: "Transportation",
    description:
      "Transportation services are available to make commuting within BriSphere and to nearby destinations convenient and hassle-free.",
    icon: DirectionsCarIcon,
  },
  {
    title: "Food Delivery",
    description:
      "On-demand food delivery service is available throughout the BriSphere campus, allowing you to enjoy meals in your preferred space.",
    icon: DirectionsBikeIcon,
  },
  {
    title: "Tourism",
    description:
      "Enjoy local tourism packages organized to help you explore and experience the beautiful surroundings of BriSphere.",
    icon: MapIcon,
  },
  {
    title: "Job",
    description:
      "Job assistance services are available to connect residents with local employment opportunities tailored to their skills and experience.",
    icon: WorkOutlineIcon,
  },
  {
    title: "Rental Service",
    description:
      "Rental services provide access to additional amenities, including workspace equipment and recreational gear.",
    icon: CarRentalIcon,
  },
  {
    title: "Online Shop",
    description:
      "The BriSphere online shop offers a convenient way to purchase essentials and unique local products without leaving the campus.",
    icon: ShoppingCartIcon,
  },
];
