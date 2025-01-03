# 263. Ugly Number
# January 03, 2025
# https://leetcode.com/problems/ugly-number

# Solution
class Solution:
  def isUgly(self, n: int) -> bool:
    if n <= 0: # if n is less than or equal to 0, return False
      return False
    
    for p in [2, 3, 5]: # iterate through the prime numbers
      while n % p == 0: # while n is divisible by p
        n //= p # divide n by p
    
    return n == 1 # return True if n is equal to 1, else False