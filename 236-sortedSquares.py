# 977. Squares of a Sorted Array
# February 08, 2025
# https://leetcode.com/problems/squares-of-a-sorted-array

# Solution
class Solution:
  def sortedSquares(self, nums: List[int]) -> List[int]:
    result = [] # create an empty list to store the result

    l, r = 0, len(nums) - 1 # set the left and right pointers

    while l <= r: 
      if nums[l] ** 2 > nums[r] ** 2: # if the square of the left pointer is greater than the square of the right pointer
        result.append(nums[l] ** 2) # append the square of the left pointer to the result
        l += 1 # move the left pointer to the right
      else:
        result.append(nums[r] ** 2)
        r -= 1

    return result[::-1] # return the result in reverse order
