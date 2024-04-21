const hre = require("hardhat");

async function main() {
  const DInsure = await hre.ethers.getContractFactory("DInsure"); //fetching bytecode and ABI
  const DInsureContract = await DInsure.deploy(); //creating an instance of smart contract

  await DInsureContract.deployed(); //deploying smart contract


  // 0xfe2c9bcA8D5d97353E9a302616EAEc2136f1E102
  console.log("Deployed contract address:",`${DInsureContract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
