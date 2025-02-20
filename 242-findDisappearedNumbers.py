# 448. Find All Numbers Disappeared in an Array
# February 20, 2025
# https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array

# Solution
class Solution:
  def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
    # Iterate over each of the elements in the original array
    # and mark them as negative using the current element's value as index
    for i in range(len(nums)):
      index = abs(nums[i]) - 1
      nums[index] = -abs(nums[index])

    result = []
    # Iterate over the array and for all the positive values,
    # calculate the value of the missing element
    for i in range(len(nums)):
      if nums[i] > 0: # missing element
        result.append(i + 1)
    
    return result
