import { Block } from './block';
import { Blockchain } from './blockchain';

const KamilChain = new Blockchain();
// Add a new block
KamilChain.addBlock(new Block(Date.now().toString(), { from: 'John', to: 'Bob', amount: 100 }));

console.log(KamilChain);
