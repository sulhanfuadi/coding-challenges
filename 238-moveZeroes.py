# 283. Move Zeroes
# February 12, 2025
# https://leetcode.com/problems/move-zeroes/

# Solution
class Solution:
  def moveZeroes(self, nums: List[int]) -> None:
    l = 0 # left pointer, to keep track of the position of the first zero

    # iterate through the list
    for r in range(len(nums)):
      if nums[r] != 0: # if the current element is not zero
        nums[l], nums[r] = nums[r], nums[l]
        l += 1
