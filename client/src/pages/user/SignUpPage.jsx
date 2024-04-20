import React, { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { create } from "ipfs-http-client";
import Web3 from "web3";
import { contractAbi, contractAddress } from "../../constants/constant.js";
import { ethers } from "ethers";

// const ipfs = create({ host: "ipfs.infura.io", port: 5001, protocol: "https" });

const SignUpPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    emergencyPhoneNumber: "",
    homeAddress: "",
    bloodGroup: "",
    gender: "",
    aadharNumber: "",
    aadharFile: null,
    insuranceFiles: [],
    medicalFiles: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = async (e, fileType) => {
    const files = Array.from(e.target.files);
    const uploads = [];

    // for (const file of files) {
    //   try {
    //     const added = await ipfs.add(file);
    //     uploads.push(added.path);
    //   } catch (error) {
    //     console.error("Error uploading file to IPFS:", error);
    //   }
    // }

    setFormData({ ...formData, [fileType]: uploads });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // if (
      //   formData.aadharFile &&
      //   formData.insuranceFiles &&
      //   formData.medicalFiles
      // ) {
      //   // Upload files to IPFS and get their IPFS hashes
      //   const aadharFileHash = await ipfs.add(formData.aadharFile);
      //   const insuranceFilesHashes = await Promise.all(
      //     formData.insuranceFiles.map((file) => ipfs.add(file))
      //   );
      //   const medicalFilesHashes = await Promise.all(
      //     formData.medicalFiles.map((file) => ipfs.add(file))
      //   );
      // }

      // Check if MetaMask is installed and connected
      if (window.ethereum) {
        setLoading(true); // Start loading
        
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractAbi,
          signer
        );

        // Get the user's Ethereum address
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const customerAddress = accounts[0];

        // Call the registerCustomer function on the smart contract
        const tx = await contract.registerCustomer(
          customerAddress,
          formData.name,
          formData.dateOfBirth,
          formData.emergencyPhoneNumber,
          formData.homeAddress,
          formData.bloodGroup,
          formData.gender,
          formData.aadharNumber
        );

        await tx.wait(); // Wait for the transaction to be mined
        setLoading(false); // End loading

        navigate("/customerinfo", { state: formData });
      } else {
        console.error("MetaMask not installed or not connected.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false); // End loading
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
      {loading && (
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgcolor="rgba(255, 255, 255, 0.8)"
          zIndex={1}
        >
          <CircularProgress size={80} />
        </Box>
      )}
      <Typography
        variant="h4"
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "3rem",
          fontWeight: "bold",
          borderRadius: "2px",
          color: "#673AB7",
        }}
        gutterBottom
      >
        Customer Registration
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ mt: 2 }}
        disabled={loading}
      >
        <TextField
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          color="secondary"
          required
        />
        <TextField
          name="dateOfBirth"
          label="Date of Birth"
          type="date"
          value={formData.dateOfBirth}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          color="secondary"
          required
        />
        <TextField
          name="emergencyPhoneNumber"
          label="Emergency Phone Number"
          value={formData.emergencyPhoneNumber}
          onChange={handleChange}
          fullWidth
          margin="normal"
          color="secondary"
          required
        />
        <TextField
          name="homeAddress"
          label="Home Address"
          value={formData.homeAddress}
          onChange={handleChange}
          fullWidth
          margin="normal"
          color="secondary"
          required
        />
        <TextField
          name="bloodGroup"
          label="Blood Group"
          value={formData.bloodGroup}
          onChange={handleChange}
          fullWidth
          margin="normal"
          color="secondary"
          required
        />
        <TextField
          name="gender"
          label="Gender"
          value={formData.gender}
          onChange={handleChange}
          fullWidth
          margin="normal"
          color="secondary"
          required
        />
        <TextField
          name="aadharNumber"
          label="Aadhaar"
          value={formData.aadharNumber}
          onChange={handleChange}
          fullWidth
          margin="normal"
          color="secondary"
          required
        />
        <Box mt={2}>
          <Typography variant="subtitle1">Aadhar File</Typography>
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => handleFileUpload(e, "aadharFile")}
            disabled={loading}
            // required
          />
        </Box>
        <Box mt={2}>
          <Typography variant="subtitle1">Insurance Files</Typography>
          <input
            type="file"
            multiple
            accept=".pdf"
            onChange={(e) => handleFileUpload(e, "insuranceFiles")}
            disabled={loading}
            // required
          />
        </Box>
        <Box mt={2}>
          <Typography variant="subtitle1">Medical Files</Typography>
          <input
            type="file"
            multiple
            accept=".pdf"
            onChange={(e) => handleFileUpload(e, "medicalFiles")}
            disabled={loading}
            // required
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ mt: 2 }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Submit"}
        </Button>
      </Box>
    </Box>
  );
};

export default SignUpPage;
