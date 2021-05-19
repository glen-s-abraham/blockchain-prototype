const Blockchain = require('../dev/Blockchain');

const btc=new Blockchain();

const prev='OFOFFFIFKF99900FOOFOOF';
const cur=[
	{amount:1000,sender:'amy',reciever:'steve'},
	{amount:10,sender:'joe',reciever:'jeese'},

];
nonce=1100;
console.log(btc.hashBlock(prev,cur,nonce));