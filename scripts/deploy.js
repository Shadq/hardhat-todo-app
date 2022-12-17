const { ethers, network } = require("hardhat");
const { verify } = require("../utils/verify");

const main = async () => {
  const todoFactory = await ethers.getContractFactory("Todo");
  const todo = await todoFactory.deploy();

  if (network.config.chainId === 5) {
    await todo.deployTransaction.wait(6);
    await verify(todo.address, []);
  }
};

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
