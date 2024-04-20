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
  const [web3, setWeb3] = useState(null);
  // const [contract, setContract] = useState(null);
  const [userAddress, setUserAddress] = useState(""); // Address of the user to check
  const [userExists, setUserExists] = useState(false);
  const navigate = useNavigate();
  const [metaMaskstate, setMetaMaskState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const checkUserExists = async () => {
    if (!web3 || !metaMaskstate) return;

    try {
      // Get the current MetaMask account address
      const accounts = await web3.eth.getAccounts();
      const userAddress = accounts[0];

      // Call the smart contract function to check if the user exists
      const isUserExists = await contract.methods
        .customers(userAddress)
        .exists()
        .call();

      setUserExists(isUserExists);
    } catch (error) {
      console.error("Error checking if user exists:", error);
    }
  };
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
    checkUserExists();
  }, []);

  const { contract } = metaMaskstate;
  console.log("contarct", contract);

  return (
    <div>
      <p style={{ marginTop: "10px", marginLeft: "5px" }}>
        <small>Connected Account - {account}</small>
      </p>
      Waiting for Meta-Mask Auth
      <div>
        {userExists ? (
          <p>User exists in the smart contract.</p>
        ) : (
          <p>User does not exist in the smart contract.</p>
        )}
      </div>
    </div>
  );
};

export default SignInPage;
