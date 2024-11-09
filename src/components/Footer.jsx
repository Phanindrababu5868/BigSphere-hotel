import { Typography, Box, Button } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        padding: 4,
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Typography variant="h5" fontWeight={"bold"}>
        Brisphere
      </Typography>
      <Typography variant="body2">Spituk, Ladakh</Typography>
      <Typography variant="body2"> India, 194101</Typography>
      <Typography variant="body2">Contact: +91 - 7764997033 </Typography>
      <Typography variant="body2">amit.jha6700@gmail.com</Typography>
      <Button variant="contained" sx={{ maxWidth: "120px" }}>
        Location
      </Button>
    </Box>
  );
}

export default Footer;
