import React from "react";
import { Box, Typography, Grid, Button, Grid2 } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import useAppStore from "../store/useAppStore";

function BookingConfirmation() {
  const {
    name,
    phone,
    email,
    adults,
    children,
    checkInDate,
    checkOutDate,
    rooms,
    totalCost,
  } = useAppStore();

  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
        m: 4,
        mb: 8,
        position: "relative",
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2">{phone}</Typography>
          <Typography variant="body2">{email}</Typography>
          <Typography variant="body2">
            {adults} Adults and {children} Children
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          textAlign={{ sm: "center" }}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <CheckCircleIcon
            color="success"
            sx={{
              fontSize: { xs: 48, sm: 70, md: 120 },
              color: "#117711",
              mr: 2,
            }}
          />
          <Box>
            <Typography variant="h6">Order Complete</Typography>
            <Typography variant="body2">
              Have questions? <a href="#contact">Contact us</a>
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container display={"flex"} flexDirection={"column"} my={2}>
        <Grid
          container
          spacing={2}
          sx={{
            bgcolor: "white",
            boxShadow: 2,
            borderRadius: 2,
            p: 2,
            my: 2,
            position: { md: "absolute" },
            bottom: 0,
            marginBottom: "-30px",
            maxWidth: { xs: "60%", md: "80%" },
            alignSelf: "center",
          }}
        >
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle2">CHECK-IN</Typography>
            <Typography>{checkInDate || "Select Date"}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle2">CHECK-OUT</Typography>
            <Typography>{checkOutDate || "Select Date"}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle2">ROOMS</Typography>
            <Typography>{rooms}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button variant="contained">₹ {totalCost}</Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BookingConfirmation;
