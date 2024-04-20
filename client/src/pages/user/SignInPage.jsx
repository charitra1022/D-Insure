import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { contractAbi, contractAddress } from "../../constants/constant";

const SignInPage = () => {
  const navigate = useNavigate();
  const [userExists, setUserExists] = useState(false);
  const [account, setAccount] = useState("Not connected");

  useEffect(() => {
    const checkUserExists = async () => {
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
        const userAddress = accounts[0];

        const customerData = await contract.getCustomer(userAddress);

        setUserExists(customerData.exists);
        if( customerData.exists ){
          navigate("/customerinfo");
        }else{
          navigate("/signup");
        } 
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
        checkUserExists();
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    };

    connectToMetaMask();
  }, []);

  return (
    <div>
      <p style={{ marginTop: "10px", marginLeft: "5px" }}>
        <small>Connected Account - {account}</small>
      </p>
      {userExists ? (
        <p>User exists in the smart contract.</p>
      ) : (
        <p>User does not exist in the smart contract.</p>
      )}
    </div>
  );
};

export default SignInPage;
