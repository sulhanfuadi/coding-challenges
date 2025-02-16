# 136. Single Number
# February 16, 2025
# https://leetcode.com/problems/single-number

# Solution
class Solution:
  def singleNumber(self, nums: List[int]) -> int:
    result = 0

    for num in nums:
      result ^= num # XOR operator, if the number is repeated, it will cancel out
    
    return result # the only number that is not repeated will be left
