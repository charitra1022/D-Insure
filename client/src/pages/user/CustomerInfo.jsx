import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography, Paper, Box, Button } from "@mui/material";

const CustomerInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const customerData = location.state;

  // Check if customerData exists and is not null
  if (!customerData) {
    return (
      <Paper
        elevation={3}
        sx={{ p: 3, mt: 20, justifyContent: "center", alignContent: "center" }}
      >
        <Typography variant="h5" gutterBottom>
          Error: Customer Data Not Found
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() =>navigate("/signup")}
          sx={{ mt: 2 }}
        >
          Go to signUp page
        </Button>
      </Paper>
    );
  }

  return (
    <Paper
      elevation={3}
      sx={{ p: 3, mt: 20, justifyContent: "center", alignContent: "center" }}
    >
      <Typography variant="h5" gutterBottom>
        Customer Information
      </Typography>
      <Box sx={{ textAlign: "justify" }}>
        <Typography variant="body1">Name: {customerData.customerName}</Typography>
        <Typography variant="body1">
          Date of Birth: {customerData.customerDOB}
        </Typography>
        <Typography variant="body1">
          Phone Number: {customerData.customerPhone}
        </Typography>
        <Typography variant="body1">
          Home Address: {customerData.customerHomeAddress}
        </Typography>
        <Typography variant="body1">
          Customer Aadhar: {customerData.customerAadhar}
        </Typography>
        <Typography variant="body1">
          Customer Blood Group: {customerData.customerBloodGrp}
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/companydata")}
        sx={{ mt: 2 }}
      >
        Apply for Insurance
      </Button>
    </Paper>
  );
};

export default CustomerInfo;
