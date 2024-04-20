import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { create } from "ipfs-http-client";
import Web3 from "web3";

// Create an instance of the IPFS client
const ipfs = create({ host: "ipfs.infura.io", port: 5001, protocol: "https" });

// Connect to the Ethereum network (replace with your network details)
// const web3 = new Web3("https://mainnet.infura.io/v3/YOUR_PROJECT_ID");

// // Your Solidity contract instance
// const contract = new web3.eth.Contract(
//   // Replace with your contract ABI
//   [
//     /* ... */
//   ],
//   // Replace with your contract address
//   "0x..."
// );

const SignUpPage = () => {
  const navigate = useNavigate();
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

    for (const file of files) {
      try {
        const added = await ipfs.add(file);
        uploads.push(added.path);
      } catch (error) {
        console.error("Error uploading file to IPFS:", error);
      }
    }

    setFormData({ ...formData, [fileType]: uploads });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (
        formData.aadharFile &&
        formData.insuranceFiles &&
        formData.medicalFiles
      ) {
        // Upload files to IPFS and get their IPFS hashes
        const aadharFileHash = await ipfs.add(formData.aadharFile);
        const insuranceFilesHashes = await Promise.all(
          formData.insuranceFiles.map((file) => ipfs.add(file))
        );
        const medicalFilesHashes = await Promise.all(
          formData.medicalFiles.map((file) => ipfs.add(file))
        );

        // Call your Solidity contract function to store the user data
        // await contract.methods
        //   .storeUserData(
        //     formData.name,
        //     formData.dateOfBirth,
        //     formData.age,
        //     formData.phoneNumber,
        //     formData.emergencyPhoneNumber,
        //     formData.homeAddress,
        //     aadharFileHash.path,
        //     insuranceFilesHashes.map((hash) => hash.path),
        //     medicalFilesHashes.map((hash) => hash.path)
        //   )
        //   .send({ from: "YOUR_ETHEREUM_ADDRESS" });
      }
      console.log(formData);
      navigate("/customerinfo", { state: formData });
    } catch (error) {
      console.error("Error submitting form:", error);
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
      <Typography
        variant="h4"
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "3rem",
          fontWeight: "bold",
          // p: "0.5rem 1rem",
          borderRadius: "2px",
          color: "#673AB7",
        }}
        gutterBottom
      >
        Customer Registration
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
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
          />
        </Box>
        <Box mt={2}>
          <Typography variant="subtitle1">Insurance Files</Typography>
          <input
            type="file"
            multiple
            accept=".pdf"
            onChange={(e) => handleFileUpload(e, "insuranceFiles")}
          />
        </Box>
        <Box mt={2}>
          <Typography variant="subtitle1">Medical Files</Typography>
          <input
            type="file"
            multiple
            accept=".pdf"
            onChange={(e) => handleFileUpload(e, "medicalFiles")}
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default SignUpPage;
