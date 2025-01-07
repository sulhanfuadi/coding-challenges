# 27. Remove Element
# January 07, 2025
# https://leetcode.com/problems/remove-element/

# Solution
class Solution:
  def removeElement(self, nums: List[int], val: int) -> int:
    k = 0 # pointer to the last element of the new array

    for i in range(len(nums)): # iterate through the array
      if nums[i] != val: # if the current element is not equal to the value
        nums[k] = nums[i]
        k += 1
    
    return k # return the length of the new array
