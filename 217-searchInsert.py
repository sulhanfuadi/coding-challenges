# 35. Search Insert Position
# December 27, 2024
# https://leetcode.com/problems/search-insert-position

# Solution
class Solution:
  def searchInsert(self, nums: List[int], target: int) -> int:
    l, r = 0, len(nums) - 1 # left and right pointers

    while l <= r: # while left pointer is less than or equal to right pointer
      mid = (l + r) // 2 # middle index

      if target == nums[mid]: # if target is found, return the index
        return mid

      if target > nums[mid]: # if target is greater than the middle element, move left pointer to mid + 1
        l = mid + 1
      else: # if target is less than the middle element, move right pointer to mid - 1
        r = mid - 1

    return l # return the left pointer if target is not found