# 605. Can Place Flowers
# January 28, 2025
# https://leetcode.com/problems/can-place-flowers

# Solution
class Solution:
  def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
    f = [0] + flowerbed + [0] # add 0 to the start and end of the flowerbed

    for i in range(1, len(f) - 1): # loop through the flowerbed
      if f[i - 1] == f[i] == f[i + 1] == 0: # if the current, previous, and next flowerbed are empty, plant a flower
        f[i] = 1
        n -= 1 # decrement the number of flowers to plant
    
    return n <= 0 # return if the number of flowers to plant is less than or equal to 0
