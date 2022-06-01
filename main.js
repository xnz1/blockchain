const {Blockchain, Transaction} = require('./blockchain');

const EC= require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('3c3f5a328a026db3aa9f1d0958fb7eecfe8e80ec5c109ca5aa4a827df438f0c6');
const myWalletAddress = myKey.getPublic('hex');


            let PLOCOIN = new Blockchain();

             const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
             tx1.signTransaction(myKey);
             PLOCOIN.addTransaction(tx1);


            console.log('\n Starting the miner...');
            PLOCOIN.minePendingTransactions(myWalletAddress);
             

            console.log('\n Balance  of Pedro is', PLOCOIN.getBalanceOfAddress(myWalletAddress));
            

            
            
            
           