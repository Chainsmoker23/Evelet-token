const hre = require("hardhat");

async function main() {
  const EveletToken = await hre.ethers.getContractFactory("EveletToken");
  const token = await EveletToken.deploy();

  await token.deployed();
  console.log("Evelet Token deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
