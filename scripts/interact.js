const contractAddress = "YOUR_CONTRACT_ADDRESS";
const EveletToken = await ethers.getContractAt("EveletToken", contractAddress);

// Check total supply
(await EveletToken.totalSupply()).toString();

// Manually reduce supply
await EveletToken.reduceSupply();

// Check balance of the owner
const owner = "0x42dcA3085D260769B5D27eD2bcC3D8A13C570927";
(await EveletToken.balanceOf(owner)).toString();
