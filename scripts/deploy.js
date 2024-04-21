const hre = require("hardhat");

async function main() {
  const DInsure = await hre.ethers.getContractFactory("DInsure"); //fetching bytecode and ABI
  const DInsureContract = await DInsure.deploy(); //creating an instance of smart contract

  await DInsureContract.deployed(); //deploying smart contract


  // 0x6A2bf6Db555a0af1615eFc256d238cA1E0cD1322
  console.log("Deployed contract address:",`${DInsureContract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
