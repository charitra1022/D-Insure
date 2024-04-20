import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const InsurancePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    walletNo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/final", { state: formData });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Typography variant="h4" gutterBottom>
        Insurance Page
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="walletNo"
          label="Wallet No."
          value={formData.walletNo}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default InsurancePage;
