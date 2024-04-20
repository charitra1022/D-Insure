import React, { useState } from "react";
import {
  Button,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleUserTypeClick = (type) => {
    setUserType(type);
    if (type === "user") {
      setOpenModal(true);
    } else {
      switch (type) {
        case "insurance":
          navigate("/insurance");
          break;
        case "hospital":
          navigate("/hospital");
          break;
        default:
          break;
      }
    }
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleSignInClick = () => {
    navigate("/signin");
    // Handle sign-in logic here
    handleModalClose();
  };

  const handleSignUpClick = () => {
    // Handle sign-up logic here
    navigate("/signup");
    handleModalClose();
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
      <Dialog open={openModal} onClose={handleModalClose}>
        {/* <DialogTitle align="center">User Login</DialogTitle> */}

        <DialogActions sx={{ p: 5 }}>
          <Button
            variant={"contained"}
            color="secondary"
            onClick={handleSignInClick}
          >
            Sign In
          </Button>
          <Button
            variant={"contained"}
            color="secondary"
            onClick={handleSignUpClick}
          >
            Sign Up
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DashBoard;
