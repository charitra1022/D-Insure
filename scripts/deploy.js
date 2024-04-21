const hre = require("hardhat");

async function main() {
  const DInsure = await hre.ethers.getContractFactory("DInsure"); //fetching bytecode and ABI
  const DInsureContract = await DInsure.deploy(); //creating an instance of smart contract

  await DInsureContract.deployed(); //deploying smart contract


  // 0xEd26E8F886B80BC7979584EED78AeA0cD302B8f5
  console.log("Deployed contract address:",`${DInsureContract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
