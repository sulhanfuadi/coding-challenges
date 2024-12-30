# 1046. Last Stone Weight
# December 30, 2024
# https://leetcode.com/problems/last-stone-weight

# Solution
import heapq
from typing import List

class Solution:
  def lastStoneWeight(self, stones: List[int]) -> int:
    stones = [-stone for stone in stones] # convert to negative values`
    heapq.heapify(stones) # convert to heap
    
    while len(stones) > 1: # while there are more than 1 stones
      first = heapq.heappop(stones) # get the first stone, the heaviest
      second = heapq.heappop(stones) # get the second stone, the second heaviest

      if first != second: # if the stones are not equal
        heapq.heappush(stones, first - second) # push the difference back to the heap

    return abs(stones[0]) if stones else 0 # return the last stone if there is one, else return 0
