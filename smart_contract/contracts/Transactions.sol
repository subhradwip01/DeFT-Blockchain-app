// SPDX-License-Identifier: UNLICENCED

pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCounter;

    event Transfar(
        address from,
        address reciever,
        uint256 amount,
        uint256 timestamp
    );

    struct TransfarStruct {
        address from;
        address reciever;
        uint256 amount;
        uint256 timestamp;
    }

    TransfarStruct[] transactions;

    function addToBlockChain(address payable reciever,uint amount) public {
        transactionCounter+=1;
        transactions.push(TransfarStruct(msg.sender,reciever,amount,block.timestamp));
        emit Transfar(msg.sender, reciever, amount, block.timestamp);
    } 

    function getAllTransactions() public view returns (TransfarStruct[] memory) {
        return transactions;
    }

    function getTheTransactionCount() public view returns (uint256){
        return transactionCounter;
    } 
}
