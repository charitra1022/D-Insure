import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { Typography, Paper, Box, Button } from "@mui/material";
import { contractAbi, contractAddress } from "../../constants/constant";

const CompanyLoginPage = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState("Not connected");
  const [companyData, setCompanyData] = useState();

  useEffect(() => {
    const showCompanyData = async () => {
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
        const companyAddress = accounts[0];
        
        // adds a company to chain
        // const tx = await contract.registerInsuranceCompany(
        //   companyAddress,
        //   "Policy Bazar",
        //   "+1-8891-56132032",
        // );
        // await tx.wait(); // Wait for the transaction to be mined

        const companyDataTmp = await contract.getInsuranceCompany(companyAddress);
        console.log(companyDataTmp);
        setCompanyData(companyDataTmp);
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
        showCompanyData();
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    };

    connectToMetaMask();
  }, []);


  if(!companyData) {
    return (
      <Paper
        elevation={3}
        sx={{ p: 3, mt: 20, justifyContent: "center", alignContent: "center" }}
      >
        <Typography variant="h5" gutterBottom>
          Error: Insurance Company Data Not Found
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
        Insurance Company Information
      </Typography>
      <Box sx={{ textAlign: "justify" }}>
        <Typography variant="body1">Name: {companyData.companyName}</Typography>
        <Typography variant="body1">
          
        </Typography>
      </Box>
    </Paper>
  );
};

export default CompanyLoginPage;
