const express = require('express');
const bodyParser = require('body-parser');
const Blockchain = require('./BlockChain');
const {v4 : uuidv4} = require('uuid')

const btc=new Blockchain();
const nodeAddress=uuidv4().split('-').join('');

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const port = 3000

app.get('/blockchain', (req, res) => {
  res.send(btc);
});

app.post('/transaction', (req, res) => {
  
  const blockIndex=btc.createNewTransaction(req.body.amount,req.body.sender,req.body.reciever);
  res.json({note:`Transaction will be added in block ${blockIndex}.`})


});

app.get('/mine', (req, res) => {
	prev=btc.getLastBlock();
	const prevHash=prev.hash;
	const currentBlockData={
		transactions:btc.newTransactions,
		index:prev.index+1
	}
	const nonce=btc.proofOfWork(prevHash,currentBlockData);
	const hash=btc.hashBlock(prevHash,currentBlockData,nonce);
	const newBlock=btc.createNewBlock(nonce,prevHash,hash);
	btc.createNewTransaction(12.5,"00",nodeAddress);
  	res.json({note:"New Block mined successfully",
  					block:newBlock
  });
});





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})