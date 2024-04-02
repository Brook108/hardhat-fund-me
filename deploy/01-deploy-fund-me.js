const { network } = require("hardhat")
const { networkConfig } = require("../helper-hardhat-config")
require("dotenv").config()
const { verify } = require("../utils/verify")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    log("chainid:", chainId)
    const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
    const args = [ethUsdPriceFeedAddress]
    const fundMe = await deploy("FundMe", {
        contract: "FundMe",
        from: deployer,
        log: true,
        args: args,
        blockConfirmationss: network.config.blockConfirmationss || 1 // 1 means wait for 1 block if it not specified in hardhat.config
    })

    await verify(fundMe.address, args)

}

module.exports.tags = ["all", "fundme"]