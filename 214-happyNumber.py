# 202. Happy Number
# December 24, 2024
# https://leetcode.com/problems/happy-number

# Solution
class Solution:
  def isHappy(self, n: int) -> bool:
    visit = set() # store the visited numbers # MEMORY O(N)

    while n not in visit: # TIME O(N) where N is the number of digits in n
      visit.add(n)
      n = self.sumOfSquares(n) # sum of the squares of the digits of n

      if n == 1: # if n is 1, then n is a happy number
        return True
      
    return False
  
  def sumOfSquares(self, n: int) -> int:
    sum = 0
    while n:
      sum += (n % 10) ** 2 # add the square of the last digit of n
      n //= 10 # remove the last digit of n
    return sum
