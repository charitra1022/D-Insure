import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("");

  const handleUserTypeClick = (type) => {
    setUserType(type);
    switch (type) {
      case "user":
        navigate("/user");
        break;
      case "insurance":
        navigate("/insurance");
        break;
      case "hospital":
        navigate("/hospital");
        break;
      default:
        break;
    }
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
        Login Page
      </Typography>
      <Box mb={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleUserTypeClick("user")}
        >
          User
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleUserTypeClick("insurance")}
          sx={{ ml: 2 }}
        >
          Insurance Company
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleUserTypeClick("hospital")}
          sx={{ ml: 2 }}
        >
          Hospital
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
