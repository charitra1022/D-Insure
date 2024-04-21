import React, { useState } from "react";
import { Typography, Paper, Box, Button, MenuItem, Select } from "@mui/material";

const InsurancePage = () => {
  // Sample data for insurance companies and their insurances
  const insuranceCompanies = [
    {
      name: "Insurance Company 1",
      insurances: [
        { type: "Health Insurance", amount: 5000 },
        { type: "Health Insurance premimum", amount: 10000 },
      ],
    },
    {
      name: "Insurance Company 2",
      insurances: [
        { type: "Life Insurance", amount: 20000 },
        { type: "Home Insurance", amount: 15000 },
      ],
    },
  ];

  // State to track the selected insurance option for each company
  const [selectedInsurances, setSelectedInsurances] = useState({});

  const handleClaimInsurance = (insuranceType, companyName) => {
    // Logic to handle claiming insurance
    console.log("Claiming insurance:", insuranceType, "from", companyName);
    
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 20 }}>
      <Typography variant="h5" gutterBottom>
        Insurance Companies
      </Typography>
      {insuranceCompanies.map((company, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            {company.name}
          </Typography>
          <Select
            value={selectedInsurances[company.name] || ""}
            onChange={(e) => setSelectedInsurances({ ...selectedInsurances, [company.name]: e.target.value })}
            displayEmpty
            fullWidth
            sx={{ mb: 2 }}
          >
            <MenuItem value="" disabled>
              Select Insurance
            </MenuItem>
            {company.insurances.map((insurance, idx) => (
              <MenuItem key={idx} value={insurance.type}>
                {insurance.type} - ${insurance.amount}
              </MenuItem>
            ))}
          </Select>
          <Button
            variant="contained"
            color="primary"
            disabled={!selectedInsurances[company.name]}
            onClick={() => handleClaimInsurance(selectedInsurances[company.name], company.name)}
          >
            Claim
          </Button>
        </Box>
      ))}
    </Paper>
  );
};

export default InsurancePage;
