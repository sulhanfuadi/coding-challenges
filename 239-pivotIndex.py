# 724. Find Pivot Index
# February 14, 2025
# https://leetcode.com/problems/find-pivot-index

# Solution
class Solution:
  # solution 1
  def pivotIndex(self, nums: List[int]) -> int:
    total = sum(nums) # sum of all elements
    left_sum = 0 # sum of elements to the left of the current element

    for i, num in enumerate(nums):
      if left_sum == total - left_sum - num: # if left_sum == right_sum
        return i
      left_sum += num
    
    return -1

  # solution 2
  def pivotIndex2(self, nums: List[int]) -> int:
    total = sum(nums)
    left_sum = 0

    for i, num in enumerate(nums):
      if left_sum * 2 + num == total: # if left_sum == right_sum
        return i
      left_sum += num

    return -1
