import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Typography,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import useAppStore from "../store/useAppStore";

function HeroSection() {
  const {
    setCheckOutDate,
    setCheckInDate,
    rooms,
    checkInDate,
    checkOutDate,
    setRooms,
  } = useAppStore();

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleRoomChange = (delta) => {
    setRooms((prevRooms) => Math.max(1, prevRooms + delta));
  };

  const validateForm = () => {
    const errors = {};
    const today = new Date().toISOString().split("T")[0];

    // Validate Check-In Date
    if (!checkInDate) {
      errors.checkInDate = "Check-In date is required";
    } else if (checkInDate < today) {
      errors.checkInDate = "Check-In date cannot be in the past";
    }

    // Validate Check-Out Date
    if (!checkOutDate) {
      errors.checkOutDate = "Check-Out date is required";
    } else if (checkOutDate <= checkInDate) {
      errors.checkOutDate = "Check-Out date must be after Check-In date";
    }

    // Validate Rooms
    if (rooms < 1) {
      errors.rooms = "At least one room is required";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      navigate("/bookingSummary");
    } else {
    }
  };

  return (
    <Box position={"relative"} display={"flex"} flexDirection={"column"}>
      {/* Text and Social Media Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          p: 3,

          borderRadius: 2,
          overflow: "hidden",
          position: "relative",
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            flex: 1,
            p: 4,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#f5f5f5",
          }}
        >
          <Box>
            <Typography variant="h4" gutterBottom>
              Work from Ladakh
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              India's first true digital tourism ecosystem
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <IconButton color="inherit" href="https://facebook.com">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" href="https://instagram.com">
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Image Section */}
        <Box
          component="img"
          src="https://th.bing.com/th/id/OIP.QIKyrL--L5L56dZzF5YNUQHaE8?w=278&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Ladakh Scenic View"
          sx={{
            flex: 1,
            objectFit: "cover",
            height: "100%",
            display: { xs: "none", md: "block" },
          }}
        />
      </Box>

      {/* Booking Section */}
      <Box
        sx={{
          flex: 1,
          p: 3,
          bgcolor: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignSelf: "center",
          borderRadius: "10px",
          bottom: 0,
          boxShadow: 2,
          width: "80%",
          position: { md: "absolute" },
          margin: "auto",
        }}
      >
        <Grid container spacing={2} p={2}>
          {/* Check-in Date */}
          <Grid item xs={12} sm={6} md={3} margin={"auto"} p={1}>
            <Typography variant="body1" gutterBottom>
              Check-In
            </Typography>
            <TextField
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              error={!!errors.checkInDate}
              helperText={errors.checkInDate}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          {/* Check-out Date */}
          <Grid item xs={12} sm={6} md={3} p={1}>
            <Typography variant="body1" gutterBottom>
              Check-Out
            </Typography>
            <TextField
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              error={!!errors.checkOutDate}
              helperText={errors.checkOutDate}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          {/* Room Selector */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            margin={"auto"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography variant="body1" gutterBottom>
              Rooms
            </Typography>
            <Box display="flex" alignItems="center">
              <IconButton
                onClick={() => handleRoomChange(-1)}
                disabled={rooms <= 1}
              >
                <RemoveIcon />
              </IconButton>
              <Typography variant="body1" sx={{ mx: 2 }}>
                {rooms}
              </Typography>
              <IconButton onClick={() => handleRoomChange(1)}>
                <AddIcon />
              </IconButton>
            </Box>
            {errors.rooms && (
              <Typography color="error" variant="caption">
                {errors.rooms}
              </Typography>
            )}
          </Grid>

          {/* Book Button */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSubmit}
            >
              Book
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default HeroSection;
