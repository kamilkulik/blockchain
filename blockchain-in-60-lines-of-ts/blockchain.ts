import { Block } from './block';

export class Blockchain {
  chain: Block[];
  difficulty: number;

  constructor() {
    // genesis block
    this.chain = [new Block(Date.now().toString())];
    this.difficulty = 1;
  }

  addBlock(block: Block) {
    // Since we are adding a new block, prevHash will be the hash of the old latest block
    block.prevHash = this.getLastBlock().hash;
    // Since now prevHash has a value, we must reset the block's hash
    block.hash = block.getHash();
    block.mine(this.difficulty);

    // Object.freeze ensures immutability in our code
    this.chain.push(Object.freeze(block));
  }

  getLastBlock(): Block {
    return this.chain[this.chain.length - 1];
  }

  isValid() {
    // Iterate over the chain, we need to set i to 1
    // because there are nothing before the genesis block,
    // so we start at the second block.
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const prevBlock = this.chain[i - 1];

      // check validation
      if (currentBlock.hash !== currentBlock.getHash() || prevBlock.hash !== currentBlock.prevHash) {
        return false;
      }
    }

    return true;
  }
}
