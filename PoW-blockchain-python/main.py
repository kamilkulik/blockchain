import time
from block import Block
from blockchain import BlockChain

kamil_coin = BlockChain()
kamil_coin.add_block(Block({"founder": "Kamil", "supply": "21 mln"}, round(time.time() * 1000)))


print(kamil_coin.chain)
