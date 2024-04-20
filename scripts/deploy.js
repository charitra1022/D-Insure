const hre = require("hardhat");

async function main() {
  const DInsure = await hre.ethers.getContractFactory("DInsure"); //fetching bytecode and ABI
  const DInsureContract = await DInsure.deploy(); //creating an instance of smart contract

  await DInsureContract.deployed(); //deploying smart contract


  // 0x5024ffB3285163AB05Ac690ACE60a9daBa58A7Ea
  console.log("Deployed contract address:",`${DInsureContract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
