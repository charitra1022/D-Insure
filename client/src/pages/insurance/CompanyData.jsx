import React from "react";
import {
  Typography,
  Paper,
  Box,
  List,
  ListItem,
  ListItemText,
  Button,
  Stack,
} from "@mui/material";

const InsuranceData = () => {
  // Dummy insurance companies data
  const insuranceCompanies = [
    {
      name: "Acme Insurance",
      description: "Trusted provider of comprehensive insurance solutions.",
      pricing: {
        basic: "$50/month",
        premium: "$100/month",
      },
    },
    {
      name: "SuperSafe Insurance",
      description: "Secure your future with our top-rated insurance plans.",
      pricing: {
        basic: "$75/month",
        premium: "$125/month",
      },
    },
    {
      name: "InsureAll",
      description:
        "Protect what matters most with our wide range of coverage options.",
      pricing: {
        basic: "$60/month",
        premium: "$120/month",
      },
    },
  ];

  const handleEnrollNow = (companyName) => {
    // Handle enrollment logic for the selected company
    console.log(`Enrolling in ${companyName}`);
  };

  return (
    <Paper
      elevation={3}
      sx={{ p: 5, mt: 0, justifyContent: "center", alignContent: "center" }}
    >
      <Typography variant="h5" gutterBottom>
        Insurance Options
      </Typography>
      <List>
        {insuranceCompanies.map((company, index) => (
          <ListItem
            key={index}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box>
              <Typography variant="h6">{company.name}</Typography>
              <Typography variant="body1">{company.description}</Typography>
              <Typography variant="body1">
                Basic Plan: {company.pricing.basic}
              </Typography>
              <Typography variant="body1">
                Premium Plan: {company.pricing.premium}
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleEnrollNow(company.name)}
            >
              Enroll Now
            </Button>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default InsuranceData;
