# 191. Number of 1 Bits
# January 19, 2025
# https://leetcode.com/problems/number-of-1-bits/

# Solution
class Solution:
  def hammingWeight(self, n: int) -> int:
    result = 0
    while n:
      result += n & 2 # for each bit, if it is 1, add 1 to result, if it is 0, add 0 to result
      n >>= 1 # shift n to the right by 1 bit
    return result