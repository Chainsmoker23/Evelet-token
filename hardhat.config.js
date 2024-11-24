require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.27", 
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/6e847c54356547a9b375e43edb2cf995", // Replace with your Infura project key
      accounts: ["e29e71edcaf6092e8b544c833b8432fec2c89cb7821b8f145f0da55c8b6141ad"], // Replace with your wallet private key
    },
  },
};
