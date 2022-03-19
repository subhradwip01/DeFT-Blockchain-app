import React, { useEffect, useState, createContext } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  return transactionContract;
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({
    toAddress: "",
    amount: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );
  const [allTxn, setAllTxn] = useState([]);
  const handleChange = (e, name) => {
    setFormData((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please Install Metamusk");

      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length > 0) {
        setCurrentAccount(accounts[0]);
        getAvialAllTransactions();
      } else {
        console.log("Sorry no accouts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please Install metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (e) {
      console.log();
    }
  };

  const payment = async () => {
    try {
      if (!ethereum) return alert("Please Install metamask");
      const { toAddress, amount } = formData;
      const transactionC = getEthereumContract();
      const parsedAmount = ethers.utils.parseEther(amount);
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: toAddress,
            gas: "0x5208", //21000 gwei
            value: parsedAmount._hex, //
          },
        ],
      });

      const txn_hash = await transactionC.addToBlockChain(
        toAddress,
        parsedAmount
      );
      setIsLoading(true);
      await txn_hash.wait();
      setIsLoading(false);

      const transactionCount = await transactionC.getTheTransactionCount();
      setTransactionCount(transactionCount.toNumber());
      
      window.reload()
    } catch (error) {
      console.log(error);
    }
  };

  const getAvialAllTransactions = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");

      const transactionC = getEthereumContract();
      const availableTxn = await transactionC.getAllTransactions();
      const sTxn = availableTxn.map((txn) => ({
        addressTo: txn.reciever,
        addressFrom: txn.from,
        timestamp: new Date(txn.timestamp.toNumber() * 1000).toLocaleString(),
        amount: parseInt(txn.amount._hex) / 10 ** 18,
      }));
      setAllTxn(sTxn);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        setFormData,
        handleChange,
        payment,
        allTxn,
        isLoading
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
