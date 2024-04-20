import React from "react";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const FinalPage = () => {
  const location = useLocation();
  const formData = location.state;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Typography variant="h4" gutterBottom>
        Final Page
      </Typography>
      {formData && (
        <Box>
          <Typography variant="body1">Name: {formData.name}</Typography>
          <Typography variant="body1">
            Wallet No: {formData.walletNo}
          </Typography>
          {formData.hospitalName && (
            <Typography variant="body1">
              Hospital: {formData.hospitalName}
            </Typography>
          )}
          {formData.age && (
            <Typography variant="body1">Age: {formData.age}</Typography>
          )}
          {formData.condition && (
            <Typography variant="body1">
              Condition: {formData.condition}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default FinalPage;
