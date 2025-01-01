# 26. Remove Duplicates from Sorted Array
# January 01, 2024
# https://leetcode.com/problems/remove-duplicates-from-sorted-array

# Solution
class Solution:
  def removeDuplicates(self, nums: List[int]) -> int:
    l = 1 # pointer to the last element of the new array

    for r in range(1, len(nums)): # iterate over the array
      if nums[r] != nums[r - 1]: # if the current element is different from the previous one (new unique value)
        nums[l] = nums[r] # update the new array with the new unique value
        l += 1 # increment the left pointer
    
    return l # return the length of the new array, which is the left pointer
