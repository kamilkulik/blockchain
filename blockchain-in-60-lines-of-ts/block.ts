import * as crypto from 'crypto';

const SHA256 = (message: string) => crypto.createHash('sha256').update(message).digest('hex');

export class Block {
  data: Object;
  hash: string;
  nonce: number;
  prevHash: string;
  timestamp: string;

  constructor(timestamp: string = '', data: Object = []) {
    this.data = data;
    this.hash = this.getHash();
    this.nonce = 0;
    this.prevHash = '';
    this.timestamp = timestamp;
  }

  public getHash(): string {
    return SHA256(this.prevHash + this.timestamp + JSON.stringify(this.data) + this.nonce);
  }

  public mine(difficulty: number) {
    // Basically, it loops until our hash starts with
    // the string 0...000 with length of <difficulty>.
    while (!this.hash.startsWith(Array(difficulty + 1).join('0'))) {
      this.nonce++;
      // Update our new hash with the new nonce value.
      this.hash = this.getHash();
    }
  }
}
