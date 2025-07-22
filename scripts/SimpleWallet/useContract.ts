import { ethers } from "hardhat";
import * as dotenv from "dotenv";

dotenv.config();
const env = process.env;

async function main() {
  const privateLocalKey = env.PRIVATE_LOCAL_KEY as string;
  const provider = new ethers.JsonRpcProvider(env.RPC_PROVIDER);
  const myWallet = new ethers.Wallet(privateLocalKey, provider);

  console.log("Connected with wallet: ", myWallet.address);

  const contractAdress = env.CONTRACT_ADDRESS as string;

  const contractFactory = await ethers.getContractFactory("SimpleWallet");
  const contractWallet = contractFactory.attach(contractAdress);

  const depositTx = await myWallet.sendTransaction({
    to: await contractWallet.getAddress(),
    value: ethers.parseEther("1.0"),
  });

  await depositTx.wait();

  console.log("Deposit 1 ETH Successfully");

  const balanceContractWallet = await contractWallet.getBalance();
  const myBalance = await provider.getBalance(myWallet.address);

  console.log(
    "Balance of Contract Wallet: ",
    ethers.formatEther(balanceContractWallet),
    "ETH"
  );
  console.log("Balance of My Wallet:", ethers.formatEther(myBalance), "ETH");
}

main().catch((err) => console.error(err));
