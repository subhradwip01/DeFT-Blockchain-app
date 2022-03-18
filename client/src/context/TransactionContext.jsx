import React, {useEffect,useState,createContext} from "react";
import {ethers} from "ethers"

import {contractABI,contractAddress} from "../utils/constants"

export const TransactionContext = createContext()

const {ethereum } = window

const getEthereumContract=()=>{
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer=provider.getSigner();
    const transactionContract=new ethers.Contract(contractAddress,contractABI,signer)
    return transactionContract;
}

export const TransactionProvider=({children})=>{
   const [currentAccount,setCurrentAccount]=useState("")
   const [formData,setFormData]=useState({
       toAddress:"",
       amount:"",
   })

   const handleChange=(e,name)=>{
       setFormData(prev=>({...prev,[name]:e.target.value}))
   }

    const checkIfWalletIsConnected= async ()=>{
        try {
            
            if(!ethereum) return alert("Please Install Metamusk")
    
            const accounts= await ethereum.request({method:"eth_accounts"})
            if(accounts.length>0){
                setCurrentAccount(accounts[0])
            }else{
                console.log("Sorry no accouts found")
            }
        } catch (error) {
            console.log(error)
        }

    }

    const connectWallet=async ()=>{
        try{
            if(!ethereum) return alert("Please Install metamask");
            const accounts=await ethereum.request({method:"eth_requestAccounts"})
            setCurrentAccount(accounts[0])
        }catch(e){
            console.log()
        }
    }


    const payment=async ()=>{
        try {
            if(!ethereum) return alert("Please Install metamask")
            const {toAddress,amount}=formData;
            getEthereumContract()


        } catch (error) {
            
        }
    }



    useEffect(() => {
        checkIfWalletIsConnected()
      }, [])
    return (
        <TransactionContext.Provider value={{connectWallet,currentAccount,formData,setFormData,handleChange,payment}}>
            {children}
        </TransactionContext.Provider>
    )
}