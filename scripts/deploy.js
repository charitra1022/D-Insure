const hre = require("hardhat");

async function main() {
  const DInsure = await hre.ethers.getContractFactory("DInsure"); //fetching bytecode and ABI
  const DInsureContract = await DInsure.deploy(); //creating an instance of smart contract

  await DInsureContract.deployed(); //deploying smart contract


  // 0x97817527999F47D561d3263C10466a7643c06ac5
  console.log("Deployed contract address:",`${DInsureContract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
