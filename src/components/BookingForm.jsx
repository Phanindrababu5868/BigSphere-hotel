import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import axios from "axios";
import useAppStore from "../store/useAppStore";

// Validation schema using Yup
const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Enter a valid 10-digit phone number")
    .required("Phone number is required"),
  adults: yup
    .number()
    .min(1, "At least 1 adult is required")
    .required("Number of adults is required"),
  children: yup
    .number()
    .min(0, "Children cannot be negative")
    .required("Number of children is required"),
  checkInDate: yup.date().required("Check-in date is required").nullable(),
  checkOutDate: yup
    .date()
    .required("Check-out date is required")
    .nullable()
    .min(
      yup.ref("checkInDate"),
      "Check-out date cannot be before check-in date"
    ),
});

function BookingForm() {
  const {
    name,
    phone,
    email,
    adults,
    children,
    checkInDate,
    checkOutDate,
    rooms,
    setRooms,
    setName,
    setEmail,
    setPhone,
    setAdults,
    setChildren,
    setCheckOutDate,
    setCheckInDate,
    roomCostForChildren,
    roomCostForAdults,
    totalCost,
    setTotalCost,
  } = useAppStore();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const calculateTotalCost = () => {
    if (
      checkInDate &&
      checkOutDate &&
      rooms > 0 &&
      adults >= 0 &&
      children >= 0
    ) {
      const days =
        (new Date(checkOutDate).getTime() - new Date(checkInDate).getTime()) /
        (1000 * 60 * 60 * 24);

      if (days > 0) {
        const adultCost = adults * roomCostForAdults * days;
        const childCost = children * roomCostForChildren * days;
        const roomCost = rooms * (adultCost + childCost);
        return roomCost;
      }
    }
    return 0;
  };

  useEffect(() => {
    setTotalCost(calculateTotalCost());
  }, [
    rooms,
    adults,
    children,
    checkInDate,
    checkOutDate,
    roomCostForAdults,
    roomCostForChildren,
  ]);

  const formik = useFormik({
    initialValues: {
      name: name || "",
      email: email || "",
      phone: phone || "",
      adults: adults || 1,
      children: children || 0,
      checkInDate: checkInDate || "",
      checkOutDate: checkOutDate || "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          {
            ...values,
            rooms,
            totalCost,
          }
        );
        console.log("Booking response:", response.data);

        setEmail(values.email);
        setPhone(values.phone);
        setName(values.name);
        navigate("/bookingConfirmation");
      } catch (error) {
        console.error("Error submitting booking:", error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
        mb: 3,
        m: 2,
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formik.values.name}
              onChange={(e) => {
                formik.handleChange(e);
                setName(e.target.value);
              }}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formik.values.email}
              onChange={(e) => {
                formik.handleChange(e);
                setEmail(e.target.value);
              }}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={formik.values.phone}
              onChange={(e) => {
                formik.handleChange(e);
                setPhone(e.target.value);
              }}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              fullWidth
              label="Adults"
              type="number"
              name="adults"
              value={formik.values.adults}
              onChange={(e) => {
                formik.handleChange(e);
                setAdults(parseInt(e.target.value, 10));
              }}
              error={formik.touched.adults && Boolean(formik.errors.adults)}
              helperText={formik.touched.adults && formik.errors.adults}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              fullWidth
              label="Children"
              type="number"
              name="children"
              value={formik.values.children}
              onChange={(e) => {
                formik.handleChange(e);
                setChildren(parseInt(e.target.value, 10));
              }}
              error={formik.touched.children && Boolean(formik.errors.children)}
              helperText={formik.touched.children && formik.errors.children}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Check-In"
              type="date"
              name="checkInDate"
              value={formik.values.checkInDate}
              onChange={(e) => {
                formik.handleChange(e);
                setCheckInDate(e.target.value);
              }}
              error={
                formik.touched.checkInDate && Boolean(formik.errors.checkInDate)
              }
              helperText={
                formik.touched.checkInDate && formik.errors.checkInDate
              }
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Check-Out"
              type="date"
              name="checkOutDate"
              value={formik.values.checkOutDate}
              onChange={(e) => {
                formik.handleChange(e);
                setCheckOutDate(e.target.value);
              }}
              error={
                formik.touched.checkOutDate &&
                Boolean(formik.errors.checkOutDate)
              }
              helperText={
                formik.touched.checkOutDate && formik.errors.checkOutDate
              }
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4} display="flex" alignItems="center">
            <Typography variant="body1">Rooms</Typography>
            <IconButton onClick={() => setRooms(Math.max(1, rooms - 1))}>
              <RemoveIcon />
            </IconButton>
            <Typography variant="body1">{rooms}</Typography>
            <IconButton onClick={() => setRooms(rooms + 1)}>
              <AddIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={8} display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              size="large"
              color="primary"
              sx={{ paddingX: 4 }}
              type="submit"
              disabled={loading}
            >
              {loading ? "Processing..." : `₹ ${totalCost}`}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default BookingForm;
