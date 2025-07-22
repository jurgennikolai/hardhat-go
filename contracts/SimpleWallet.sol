// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract SimpleWallet {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    receive() external payable {}

    function deposit() public payable{}

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function withdraw(uint _amount) public {
        require(msg.sender == owner, "You aren't owner");
        payable(msg.sender).transfer(_amount);
    }
}
