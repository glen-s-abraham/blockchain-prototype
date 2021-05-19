const Blockchain = require('../dev/Blockchain');

const btc=new Blockchain();

btc.createNewTransaction(10,'A10123','B19090');

prev=btc.getLastBlock();

const nonce=btc.proofOfWork(prev.hash,btc.newTransactions);
const hash=btc.hashBlock(prev.hash,btc.newTransactions,nonce);
btc.createNewBlock(nonce,prev.hash,hash);

console.log(btc);

