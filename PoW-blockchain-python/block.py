import json
from hashlib import sha256


class Block:
    def __init__(self, data=[], timestamp="") -> None:
        self.data = data
        self.nonce = 0
        self.prev_hash = ""
        self.timestamp = timestamp
        self.hash = self.getHash()

    def getHash(self):
        return sha256(
            (f"{self.nonce}{self.prev_hash}{self.timestamp}{json.dumps(self.data)}").encode("utf-8")
        ).hexdigest()

    def mine(self, difficulty):
        while not self.hash.startswith((difficulty + 1) * "0"):
            self.nonce += 1
            self.hash = self.getHash()
