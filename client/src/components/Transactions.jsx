import React, { useState } from "react";
import dummydata from "../utils/dummydata";
import { FiArrowUpRight } from "react-icons/fi";
import addressShortner from "../utils/addressShortner";
const TransactionCard = ({ addressFrom, addressTo, amount, timestamp }) => {
  return (
    <div
      className="shadow-xl rounded-md bg-[#FAEAF1]  2xl:min-w-[450px]
    2xl:max-w-[500px]
    sm:min-w-[270px]
    sm:max-w-[300px]
    min-w-full px-10 py-12 m-3"
    >
      <div className="flex justify-between mb-3">
        <p className="font-semibold">From:</p>
        <p>{addressShortner(addressFrom)}</p>
      </div>
      <div className="flex justify-between mb-3">
        <p className="font-semibold">To:</p>
        <p>{addressShortner(addressTo)}</p>
      </div>
      <div className="flex justify-between mb-3">
        <p className="font-semibold">Amount:</p>
        <p>{amount} ETH</p>
      </div>
      <div className="flex justify-between mb-3">
        <p className="font-semibold">Time:</p>
        <p>{timestamp}</p>
      </div>
      <div className="w-full bg-[#E37C91] py-5 text-white font-semibold">
        <a
          className="flex justify-center"
          href="http://google.com"
          target="_blank"
          rel="noreferrer"
        >
          See more
          <sup>
            <FiArrowUpRight />
          </sup>
        </a>
      </div>
    </div>
  );
};

const Transactions = ({smplified}) => {
  const [currentAccount, setCurrentAcconut] = useState(true);
  return (
    <>
      <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
        <div className="flex flex-col md:p-12 py-12 px-4">
          {currentAccount ? (
            <h3 className="text-black text-3xl text-center my-2">
              {smplified ? "Latest Transactions" : "All Transactions"}
            </h3>
          ) : (
            <h3 className="text-black text-3xl text-center my-2">
              Connect your account to see the latest transactions
            </h3>
          )}
          {currentAccount && (
            <div className="flex flex-wrap justify-center items-center mt-10">
              {[...dummydata].reverse().map((transaction, i) => (
                <TransactionCard
                  key={i}
                  addressFrom={transaction.addressFrom}
                  addressTo={transaction.addressTo}
                  amount={transaction.amount}
                  timestamp={transaction.timestamp}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Transactions;
