// SPDX-License-Identifier: MIT
pragma solidity 0.8.27;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EveletToken is ERC20 {
    address public owner;

    uint256 public lastReductionTimestamp;

    constructor() ERC20("Evelet", "EVT") {
        owner = msg.sender;
        _mint(msg.sender, 10000000 * 10 ** decimals()); // Initial supply of 10 million
        lastReductionTimestamp = block.timestamp;
    }

    function reduceSupply() external {
        require(block.timestamp >= lastReductionTimestamp + 2 * 365 days, "Reduction not due yet");
        require(totalSupply() > 0, "No tokens left to burn");

        uint256 reductionAmount = 1000 * 10 ** decimals();
        if (totalSupply() >= reductionAmount) {
            _burn(owner, reductionAmount);
        } else {
            _burn(owner, totalSupply()); // Burn remaining tokens if less than 1000
        }

        lastReductionTimestamp = block.timestamp;
    }
}
