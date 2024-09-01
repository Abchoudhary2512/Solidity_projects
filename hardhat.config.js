const ALCHEMY_API_KEY = "https://polygonzkevm-cardona.g.alchemy.com/v2/ccOD3ImSvdI8-qfQtKRNYGPDpKgg4d89"
const networks = "dbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97"
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    goerli: {
      url: process.env.GOERLI_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
