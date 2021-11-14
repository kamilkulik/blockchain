import json
from hashlib import sha256


class Block:
    def __init__(self, data=[], timestamp="") -> None:
        self.prev_hash = ""
        self.data = data
        self.timestamp = timestamp
        self.hash = self.getHash()
        # self.nonce = nonce

    def getHash(self):
        return sha256((self.prev_hash + self.timestamp + json.dumps(self.data)).encode("utf-8")).hexdigest()
