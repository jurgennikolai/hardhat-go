import { ethers } from "hardhat";

async function main() {
  const SimpleWallet = await ethers.getContractFactory("SimpleWallet");
  const Contract = await SimpleWallet.deploy();
  await Contract.waitForDeployment();

  console.log("SimpleWallet deployed to:", await Contract.getAddress());
}

main().catch(err=>console.error(err));
