import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography, Paper, Box, Button } from "@mui/material";

const CustomerInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Dummy form data
  const formData = {
    name: "John Doe",
    dateOfBirth: "1990-05-15",
    age: 33,
    phoneNumber: "+1 234 567 890",
    emergencyPhoneNumber: "+1 987 654 321",
    homeAddress: "123 Main Street, Anytown USA",
    aadharFile: ["aadhar_card.pdf"],
    insuranceFiles: ["insurance_policy.pdf", "insurance_claim.pdf"],
    medicalFiles: ["medical_report.pdf", "test_results.pdf"],
  };

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
      <Box>
        <Typography variant="body1">Name: {formData.name}</Typography>
        <Typography variant="body1">
          Date of Birth: {formData.dateOfBirth}
        </Typography>
        <Typography variant="body1">Age: {formData.age}</Typography>
        <Typography variant="body1">
          Phone Number: {formData.phoneNumber}
        </Typography>
        <Typography variant="body1">
          Emergency Phone Number: {formData.emergencyPhoneNumber}
        </Typography>
        <Typography variant="body1">
          Home Address: {formData.homeAddress}
        </Typography>
        <Typography variant="body1">
          Aadhar File: {formData.aadharFile.join(", ")}
        </Typography>
        <Typography variant="body1">
          Insurance Files: {formData.insuranceFiles.join(", ")}
        </Typography>
        <Typography variant="body1">
          Medical Files: {formData.medicalFiles.join(", ")}
        </Typography>
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
