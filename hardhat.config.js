require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");
require("solidity-coverage");
require("hardhat-gas-reporter");
require("hardhat-contract-sizer");
require("dotenv").config();

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL;
const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;
ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31377,
      forking: {
        url: MAINNET_RPC_URL,
      },
    },
    rinkeby: {
      chainId: 4,
      blockConfirmations: 6,
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  gasReporter: {
    enabled: false,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  },
  solidity: {
    compilers: [
      { version: "0.8.7" },
      { version: "0.6.12" },
      { version: "0.6.6" },
      { version: "0.4.19" },
    ],
  },

  namedAccounts: {
    deployer: {
      default: 0,
    },
    player: {
      default: 1,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },

  mocha: {
    timeout: 300000, // 300s max
  },
};
