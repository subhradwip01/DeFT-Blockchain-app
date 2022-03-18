
const hre = require("hardhat");

const main=async () => {
  const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
  const transactions = await transactionsFactory.deploy();

  await transactions.deployed();

  console.log("Transactions deployed to:", transactions.address);
}


const run=async () =>{
  try{
    await main();
    process.exit(0);
  }
  catch(e){
    console.log(e.message)
    process.exit(1);
  }

}
run()