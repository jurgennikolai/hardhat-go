// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract HelloWorld {
    string public greet = "Hello, World!";

    function setGreeting(string memory _greet) public {
        greet = _greet;
    }
}