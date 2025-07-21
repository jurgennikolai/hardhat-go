import { ethers } from "hardhat";

async function main() {
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const HelloWorld = await ethers.getContractFactory("HelloWorld");

  console.log(await ethers.getSigners());
  const signer = (await ethers.getSigners())[0];
  const hello = HelloWorld.attach(contractAddress).connect(signer);

  const currentGreet = await hello.greet();
  console.log("Current Greet: ", currentGreet);

  const tx = await hello.setGreeting("Hola desde Harhat! - v2 ");
  await tx.wait();

  const newGreet = await hello.greet();
  console.log("New greet: ", newGreet)

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});