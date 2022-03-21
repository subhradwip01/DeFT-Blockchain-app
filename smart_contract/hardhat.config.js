// https://eth-ropsten.alchemyapi.io/v2/KBUpIOT_J1mD9HQ-pIWbZlxq39z0Iq3S



require("@nomiclabs/hardhat-waffle")

module.exports={
  solidity:"0.8.0",
  networks:{
    ropsten:{
      url: "https://eth-ropsten.alchemyapi.io/v2/KBUpIOT_J1mD9HQ-pIWbZlxq39z0Iq3S",
      accounts: ["PRIVATE_KEY"]

    }
  }
}