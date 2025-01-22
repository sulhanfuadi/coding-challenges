# 217. Contains Duplicate
# January 22, 2025
# https://leetcode.com/problems/contains-duplicate

# Solution
class Solution:
  # Time complexity: O(n), where n is the length of the input list
  # Space complexity: O(n), where n is the length of the input list
  def containsDuplicate(self, nums: List[int]) -> bool:
    seen = set() # create a set to store seen numbers

    for num in nums:
      if num in seen: # if the number is already in the set, return True
        return True
      seen.add(num) # add the number to the set, if it's not already there

    return False # if no duplicates are found, return False

  # Time complexity: O(n log n), where n is the length of the input list
  # Space complexity: O(1)
  def containsDuplicate2(self, nums: List[int]) -> bool:
    nums.sort() # Sort the array
    
    for i in range(len(nums) - 1):
      # Check if the current element is the same as the next
      if nums[i] == nums[i + 1]:
        return True
    
    return False