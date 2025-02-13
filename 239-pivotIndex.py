# 724. Find Pivot Index
# February 14, 2025
# https://leetcode.com/problems/find-pivot-index

# Solution
class Solution:
  def pivotIndex(self, nums: List[int]) -> int:
    total = sum(nums) # sum of all elements
    left_sum = 0 # sum of elements to the left of the current element

    for i, num in enumerate(nums):
      if left_sum == total - left_sum - num:
        return i
      left_sum += num
    
    return -1
