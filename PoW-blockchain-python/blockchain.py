import time
from block import Block


class BlochChain:
    def __init__(self) -> None:
        self.chain = [Block(round(time.time() * 1000))]

    def get_latest_block(self) -> Block:
        return self.chain[-1]

    def add_block(self, block: Block) -> None:
        block.prev_hash = self.get_latest_block().hash
        block.hash = block.getHash()
        # TODO make the block immutable
        # potentially: https://www.blog.pythonlibrary.org/2014/01/17/how-to-create-immutable-classes-in-python/
        self.chain.append(block)

    def is_valid(self) -> bool:
        for i in range(1, len(self.chain)):
            current_block = self.chain[i]
            prev_block = self.chain[i - 1]

            if prev_block.hash != current_block.prev_hash or current_block.hash != current_block.getHash():
                return False

        return True
