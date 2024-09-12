# 70. Climbing Stairs
# September 09, 2024
# https://leetcode.com/problems/climbing-stairs

# Solution
class Solution:
    def climbStairs(self, n: int) -> int:
        one, two = 1, 1

        for i in range(n - 1):
            temp = one
            one = one + two
            two = temp
        
        return one
