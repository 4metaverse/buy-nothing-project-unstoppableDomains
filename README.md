# Challenge

Integrating “Login With Unstoppable” As A Dapp Login Option

# Project

Buy Nothing Project 🛍️🛍️

# Description

Buy Nothing Project is a social media platform that encourages people to give away things they no longer used. Buy Nothing Project's mission is to build community by connecting people through hyperlocal gifting and reducing our impact on the environment.

### Website Demo

- https://buynothingproject.netlify.app/

### Video Demo

- https://youtu.be/CwDsIA4IL5o

### Person of contact

- Discord ID: Izmar#4265
- UnstoppableDomain registered account email address: marcial.arturo@yahoo.com

![Main Page](https://raw.githubusercontent.com/4metaverse/buy-nothing-project-unstoppableDomains/main/newsfeed.png)

# How it's made

Decentralize application makes use of the following softwares:

- `NFTStorage`for data storage on IPFS that generates a transation hash used to create an NFT of a photo.

- `textile/eth-storage`: facilitated a fast way to store matadata for Garden comunities such: names, loocations, description, images, wallet address, and more. It was perfect for Garden comunities problem case to save their needs on the textile storage.

- `NFTPort` smooth the path of minting and donating NFTs for Garden comunities. This is a win win situation for our Garden comunities because they don't have to pay to contribute or mint NFTs.

- `Pocket Portal` smooth the path of deploying and hussle of paying such a big transactions to deploy our Garden comunitie's contract to a node using the Rinkeby network.

- `Solidity` for the smart contract.

- `OpenZeppelin ERC721` we use the ERC721 template for a faster development of the PetGram smart contract.

- `Ganache` for local blockchain development.

- `Rinkeby Network` the network that we deployed our dApp.

- `React Js, Material-ui, Web3` React Js for the frontend, Material-ui and Web3 to connect to blockchain.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.

## Here is the steps I followed

- clone starter project
- install npm i -D hardhat
- initialize hardhat: npx hardhat
- install .env: npm i -D dotenv
- install etherscaner: npm i -D @nomiclabs/hardhat-etherscan
- build your smart contract
- after finishing your smart contract prepare your deploy script file
- prepare your .env file & add your API_KEY, POLYGON_MUMBAI, PRIVATE_KEY
- prepare your hardhat.config.js & add the networks to connect your contract
- prepare to compile & deploy: npx hardhat compile => itn should return Compiled 2 Solidity files successfully


- Create a server that syncs with the smart contract & moralis db. Constantly keep looking @ the smart contract transaction & it will be record them on moralis database server. To create one go to https://admin.moralis.io/servers
  To create one follow this video https://youtu.be/MI_Se26Sfmo?t=3095

- queries Vote class & creates a subscription on any moralis rows update. Then gets an obj to check if the update is on ETH, LINK, or BTC

- deployed to Netlify
