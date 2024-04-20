import React, { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Typography, Button, Box, TextField, Alert } from "@mui/material";
import Web3 from "web3";

import { ethers } from "ethers";
import { contractAbi, contractAddress } from "../../constants/constant";

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
  const [metaMaskstate, setMetaMaskState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("Not connected");
  useEffect(() => {
    const template = async () => {
      //Metamask part
      //1. In order do transactions on goerli testnet
      //2. Metmask consists of infura api which actually help in connectig to the blockhain
      try {
        const { ethereum } = window;
        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("Ethereum", ethereum);
        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        setAccount(account);
        console.log(account);
        const provider = new ethers.providers.Web3Provider(ethereum); //read the Blockchain
        const signer = provider.getSigner(); //write the blockchain

        const contract = new ethers.Contract(
          contractAddress,
          contractAbi,
          signer
        );
        console.log(contract);
        setMetaMaskState({ provider, signer, contract });
      } catch (error) {
        console.log(error);
      }
    };
    template();
  }, []);

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
    <div>
      <p style={{ marginTop: "10px", marginLeft: "5px" }}>
        <small>Connected Account - {account}</small>
      </p>
      Waiting for Meta-Mask Auth
    </div>
  );
};

export default SignInPage;
