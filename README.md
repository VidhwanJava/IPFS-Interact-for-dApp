# Chain-Cuffs
Blockchain dApp to store criminal records in IPFS and secure its hash with Blockchain.
Uses Solidity to script the smart contracts and React JS for implement the UI.

### **Architecture**


### **IPFS**
Basically, IPFS takes any files and objects, creates different chunks of the file and thier hashes are stored
decentralized manner in the nodes of IPFS network. The hash of whole file is stored somewere in a node itself, say in our computer itself.
while retriving with the hash, the chunks are retrived from the nodes in the network, by the addresses stored while uploading.

[Visit the official website of IPFS to know more detais on how they works.](https://ipfs.io)

### **Ganache | Truffle Suite**
Truffle Suite provides a virtual platform called [**Ganache**](https://www.trufflesuite.com/ganache) to run our Etherium Blockchain with 10 free dummy accounts preloaded with 100 eth on each. 
The host and port can be defined and transactions can be monitored and initiated by Metamask, which is the UI part for Blockchain credit transfer.

### **Metamask**
Metamask is nothing but a bridge that allows to acess the distributed blockchains. Available as Chrome/Firefox extensions to transfer cryptocurrencies and monitor blockchain accounts. Transaction can be done by knowing the public  key of the reciever. Also a gas price is to be allocated to make the transaction possible. This gas price is awarded for some miners who makes the blockchain complex by hashing our transaction in the blockchain.

Can be downloaded from [this link](https://metamask.io)

### **Hash form IPFS (SHA-256)**
IPFS returns a 256 bit hash of the file uploaded, using SHA-256 algorithm. (Will be represented in base 32)

Cryptographic hashes come with a couple of very important characteristics:

deterministic - the same input message always returns exactly the same output hash
uncorrelated - a small change in the message should generate a completely different hash
unique - it's infeasible to generate the same hash from two different messages
one-way - it's infeasible to guess or calculate the input message from its hash
It turns out these features also mean we can use a cryptographic hash to identify any piece of data: the hash is unique to the data we calculated it from and it’s not too long (a hash is a fixed length, so the SHA-256 hash of a one-gigabyte video file is still only 32 bytes), so sending it around the network doesn't take up a lot of resources.

That's critical for a distributed system like IPFS, where we want to be able to store and retrieve data from many places. A computer running IPFS can ask all the peers it's connected to whether they have a file with a particular hash and, if one of them does, they send back the whole file. Without a short, unique identifier like a cryptographic hash, that wouldn't be possible. This technique is called content addressing — because the content itself is used to form an address, rather than information about the computer and disk location it's stored at.

[See IPFS hash Docs](https://docs.ipfs.io/guides/concepts/hashes/)
