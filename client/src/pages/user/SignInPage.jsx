import React, { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Typography, Button, Box, TextField, Alert } from "@mui/material";
import Web3 from "web3";

// Connect to the Ethereum network (replace with your network details)
// const web3 = new Web3("https://mainnet.infura.io/v3/YOUR_PROJECT_ID");

// Your Solidity contract instance
// const contract = new web3.eth.Contract(
//   // Replace with your contract ABI
//   [/* ... */],
//   // Replace with your contract address
//   "0x..."
// );

const SignInPage = () => {
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const walletNumberRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const walletNumber = walletNumberRef.current.value;

    try {
      // Call the Solidity contract function to verify the user credentials
      // const isValidUser = await contract.methods.verifyUser(name, walletNumber).call();
      // if (isValidUser) {
      //   // User is valid, navigate to the desired page
      //   navigate("/final");
      // } else {
      //   setLoginError("Invalid name or wallet number. Please try again.");
      // }
    } catch (error) {
      console.error("Error verifying user:", error);
      setLoginError("An error occurred. Please try again.");
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      padding="20px"
    >
      <Box
        sx={{
          width: "400px",
          padding: "40px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            type="text"
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            inputRef={nameRef}
            required
          />
          <TextField
            type="text"
            name="walletNumber"
            label="Wallet Number"
            variant="outlined"
            fullWidth
            margin="normal"
            inputRef={walletNumberRef}
            required
          />
          {loginError && (
            <Box mt={2}>
              <Alert severity="error">{loginError}</Alert>
            </Box>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Login
          </Button>
        </Box>
        <Box mt={3} textAlign="center">
          <Typography variant="body2">
            Don't have an account?{" "}
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <Typography
                component="span"
                sx={{ color: "#673AB7", cursor: "pointer" }}
              >
                Sign Up
              </Typography>
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignInPage;
