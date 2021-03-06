// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');
  
  const NFTMinter = await hre.ethers.getContractFactory("NFTMinter");
  const NFTminter = await NFTMinter.deploy();

  const NFTMinter1155 = await hre.ethers.getContractFactory("NFTMinter1155");
  const NFTminter1155 = await NFTMinter1155.deploy("minter","NM");


  
  await NFTminter.deployed();
  console.log("NFTminter deployed to:", NFTminter.address);

  await NFTminter1155.deployed();
  console.log("NFTminter1155 deployed to:", NFTminter1155.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
