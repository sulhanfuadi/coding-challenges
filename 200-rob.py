# 198. House Robber
# August 29, 2024
# https://leetcode.com/problems/house-robber

# Solution
class Solution:
    def rob(self, nums: List[int]) -> int:
        rob1, rob2 = 0, 0
        # [rob1, rob2, n, n+1, ...]
        for n in nums:
            temp = max(n + rob1, rob2) # meaning: if we rob this house, we can't rob the previous house
            rob1 = rob2
            rob2 = temp
        return rob2
    # Time complexity: O(n)
    # Space complexity: O(1)