import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { Typography, Paper, Box, Button } from "@mui/material";
import { contractAbi, contractAddress } from "../../constants/constant";

const HospitalLoginPage = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState("Not connected");
  const [hospitalData, setHospitalData] = useState();

  useEffect(() => {
    const showHospitalData = async () => {
      try {
        const { ethereum } = window;
        if (!ethereum) return; // MetaMask not installed
        await ethereum.enable(); // Request MetaMask authentication
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractAbi,
          signer
        );
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const hospitalAddress = accounts[0];
        
        // adds a hospital to chain
        // const tx = await contract.registerHospital(
        //   hospitalAddress,
        //   "Apollo India",
        //   "hospital-license-01",
        // );
        // await tx.wait(); // Wait for the transaction to be mined

        const hospitalDataTmp = await contract.getHospital(hospitalAddress);
        console.log(hospitalDataTmp);
        setHospitalData(hospitalDataTmp);
      } catch (error) {
        console.error("Error checking if user exists:", error);
      }
    };

    const connectToMetaMask = async () => {
      try {
        const { ethereum } = window;
        if (!ethereum) return; // MetaMask not installed
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        setAccount(accounts[0] || "Not connected");
        showHospitalData();
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    };

    connectToMetaMask();
  }, []);


  if(!hospitalData) {
    return (
      <Paper
        elevation={3}
        sx={{ p: 3, mt: 20, justifyContent: "center", alignContent: "center" }}
      >
        <Typography variant="h5" gutterBottom>
          Error: Hospital Data Not Found
        </Typography>
      </Paper>
    )
  }


  return (
    <Paper
      elevation={3}
      sx={{ p: 3, mt: 20, justifyContent: "center", alignContent: "center" }}
    >
      <Typography variant="h5" gutterBottom>
        Hospital Information
      </Typography>
      <Box sx={{ textAlign: "justify" }}>
        <Typography variant="body1">Name: {hospitalData.hospitalName}</Typography>
        <Typography variant="body1">
          License: {hospitalData.hospitalLicense}
        </Typography>
      </Box>
    </Paper>
  );
};

export default HospitalLoginPage;
