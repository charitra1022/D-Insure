import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography, Paper, Box, Button } from "@mui/material";

const CustomerInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const customerData = location.state;
  console.log("customer Data",customerData);

  const handleApplyInsurance = () => {
    navigate("/companydata");
  };

  return (
    <Paper
      elevation={3}
      sx={{ p: 3, mt: 20, justifyContent: "center", alignContent: "center" }}
    >
      <Typography variant="h5" gutterBottom>
        Customer Information
      </Typography>
      <Box sx={{textAlign:'justify'}}>
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
        {/* <Typography variant="body1">
          Aadhar File: {formData.aadharFile.join(", ")}
        </Typography>
        <Typography variant="body1">
          Insurance Files: {formData.insuranceFiles.join(", ")}
        </Typography>
        <Typography variant="body1">
          Medical Files: {formData.medicalFiles.join(", ")}
        </Typography> */}
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleApplyInsurance}
        sx={{ mt: 2 }}
      >
        Apply for Insurance
      </Button>
    </Paper>
  );
};

export default CustomerInfo;
