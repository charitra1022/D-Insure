import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const EnrollPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hospitalData = location.state;

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    condition: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = { ...formData, hospitalName: hospitalData.name };
    navigate("/final", { state: finalData });
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
        Enroll at {hospitalData.name}
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
          name="age"
          label="Age"
          value={formData.age}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="condition"
          label="Condition"
          value={formData.condition}
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

export default EnrollPage;
