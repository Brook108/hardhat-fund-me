require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomicfoundation/hardhat-verify");
require('solidity-coverage')
require('hardhat-deploy')

SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
PRIVATE_KEY = process.env.PRIVATE_KEY;
ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
COINMARKETCAP_KEY = process.env.COINMARKETCAP_KEY;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  //solidity: "0.8.0",
  solidity: {
    compilers: [
      { version: "0.8.0" },
      { version: "0.8.7" },
      { version: "0.8.8" },
      { version: "0.8.12" }
    ]
  },
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
      blockConfirmationss: 6
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    }
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    currency: "USD",
    coinmarketcap: COINMARKETCAP_KEY
  }
};