import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import * as dotenv from "dotenv";
import { HardhatUserConfig, task } from "hardhat/config";
import * as process from "process";

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.14",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    // rinkeby: {
    //   url: process.env.RINKEBY_URL || "",
    //   accounts: [
    //     process.env.PRIVATE_KEY || "",
    //     process.env.TEST_WALLET_PRIVATE_KEY || "",
    //   ],
    //   gas: 2100000,
    //   gasPrice: 8000000000,
    // },
    goerli: {
      url: process.env.GOERLI_URL || "",
      accounts: [
        process.env.PRIVATE_KEY || "",
      ],
      gas: 2100000,
      gasPrice: 8000000000,
    },
    // ropsten: {
    //   url: process.env.ROPSTEN_URL || "",
    //   accounts: [
    //     process.env.PRIVATE_KEY || "",
    //     process.env.TEST_WALLET_PRIVATE_KEY || "",
    //   ],
    // },
    bscTestnet: {
      url: process.env.BSC_TESTNET_URL || "",
      accounts: [
        process.env.PRIVATE_KEY || "",
        process.env.DONATER1_PRIVATE_KEY || "",
        process.env.DONATER2_PRIVATE_KEY || "", 
        process.env.FUNDRAISER1_PRIVATE_KEY || "", 
        process.env.FUNDRAISER2_PRIVATE_KEY || "", 
        process.env.CHARITY1_PRIVATE_KEY || ""
      ],
    },
    // mainnet: {
    //   url: process.env.ETHEREUM_URL || "",
    //   accounts: [
    //     process.env.PRIVATE_KEY || "",
    //     process.env.TEST_WALLET_PRIVATE_KEY || "",
    //   ],
    // },
    // bsc: {
    //   url: process.env.BSC_URL || "",
    //   accounts: [
    //     process.env.PRIVATE_KEY || "",
    //     process.env.TEST_WALLET_PRIVATE_KEY || "",
    //   ],
    //   gas: 2100000,
    //   gasPrice: 8000000000,
    // },
    // polygonMumbai: {
    //   url: process.env.MUMBAI_URL || "",
    //   accounts: [
    //     process.env.PRIVATE_KEY || "",
    //     process.env.TEST_WALLET_PRIVATE_KEY || "",
    //   ],
    //   gas: 2100000,
    //   gasPrice: 8000000000,
    // },
  },
  mocha: {
    timeout: 1000000
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: {
      // @ts-ignore
      mainnet: process.env.ETHERSCAN_API_KEY,
      // @ts-ignore
      goerli: process.env.GOERLI_API_KEY,
      // @ts-ignore
      bsc: process.env.BSCSCAN_API_KEY,
      // @ts-ignore
      rinkeby: process.env.ETHERSCAN_API_KEY,
      // @ts-ignore
      bscTestnet: process.env.BSCSCAN_API_KEY,
      // @ts-ignore
      polygonMumbai: process.env.POLYGONSCAN_API_KEY,
    },
  },
};

export default config;
