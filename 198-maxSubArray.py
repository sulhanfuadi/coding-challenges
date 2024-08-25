# 53. Maximum Subarray
# August 24, 2024
# https://leetcode.com/problems/maximum-subarray

# Solution
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxSub = nums[0]
        curSum = 0
        
        for num in nums:
            if curSum < 0:
                curSum = 0
            curSum += num
            maxSub = max(maxSub, curSum)
        
        return maxSub
