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

  def hammingWeight2(self, n: int) -> int:
    result = 0
    while n:
      n &= n - 1 # n & (n - 1) will remove the rightmost 1 in n and update n
      result += 1 # count the number of 1s removed
    return result

  def hammingWeight3(self, n: int) -> int:
    return bin(n).count('1') # convert n to binary and count the number of 1s