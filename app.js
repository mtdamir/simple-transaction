const Web3 = require('web3');

const web3 = new Web3('http://127.0.0.1:7545');

const account1 = '0x2EB5F733262b1e61D9F780Ab7FF00BdE05aDD87f';

const account2 = '0x73E3D2174145Ee762745456Ad9356E0A72Fc8e46';

web3.eth.getBalance(account1, (err, result) => {
    console.log(result);
});

web3.eth.sendTransaction({from: account1, to: account2, value: web3.utils.toWei('1','ether')})

