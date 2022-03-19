import React,{useContext} from "react";
import { SiEthereum } from "react-icons/si";
import { Loader } from "./index";
import { BsInfoCircle } from "react-icons/bs";
import addressShortner from "../utils/addressShortner";
import { TransactionContext } from "../context/TransactionContext";
const Input = ({ placeholder, name, type, value, handleChanhe }) => {
  return (
    <input
      placeholder={placeholder}
      name={name}
      type={type}
      value={value}
      onChange={(e) => handleChanhe(e,name)}
      className="my-2 w-full rounded-md p-2 outline-none bg-[#F7F8FA] text-sm"
    />
  );
};

const Payment = () => {
  const {connectWallet,currentAccount,formData,handleChange,payment,isLoading} = useContext(TransactionContext)
  const handleSubmit=(e)=>{
    const {toAddress,amount}=formData;
    e.preventDefault();

    if(!toAddress || !amount){
      window.alert("Please fill all info before make payment")
      return;
    }
    payment()
  }
  return (
    <div className="grid  md:grid-cols-2 grid-cols-1 items-center justify-items-center sm:py-20 py-10 ">
      <div className="p-3 md:w-[50%] w-[250px] sm:h-[250px] h-[170px] sm:mx-auto ml-5 eth-card white-glassmorphism">
        <div className="flex justify-between flex-col w-full h-full">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
              <SiEthereum fontSize={21} color="#fff" />
            </div>
            <BsInfoCircle fontSize={17} color="#fff" />
          </div>
          <div>
            <p className="text-white font-light text-sm">
              {currentAccount && addressShortner(currentAccount)}
              {!currentAccount && "No Acoount is Connected"}
            </p>
            <p className="text-white font-semibold text-lg mt-1">Ethereum</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:w-[80%] w-full justify-center items-center m-10 bg-[#FFFFFF] rounded-md p-4">
        <Input
          placeholder="Enter Address to Send (required!)"
          name="toAddress"
          type="text"
          handleChanhe={handleChange}
        ></Input>
        <Input
          placeholder="Enter Amout of Ether (required!)"
          name="amount"
          type="text"
          handleChanhe={handleChange}
        ></Input>
        {!currentAccount && <div className="w-full flex justify-center align-center my-4 bg-[#FAEAF1] py-4 rounded-md text-[#DA526D] text-xl cursor-pointer" onClick={connectWallet}>Connect</div>}
        {!isLoading && currentAccount && <div className="w-full flex justify-center align-center my-4 bg-[#FAEAF1] py-4 rounded-md text-[#DA526D] text-xl cursor-pointer" onClick={handleSubmit}>Pay</div>}
        {isLoading && currentAccount && <div className="w-full flex justify-center align-center my-4 bg-[#FAEAF1] py-4 rounded-md text-[#DA526D] text-xl cursor-pointer"><Loader/></div>}
      </div>
    </div>
  );
};

export default Payment;
