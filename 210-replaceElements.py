# 1299. Replace Elements with Greatest Element on Right Side
# September 24, 2024
# https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

# Solution
class Solution:
  def replaceElements(self, arr: List[int]) -> List[int]:
    # initial max value
    max_value = -1

    # iterate through the array in reverse
    for i in range(len(arr) - 1, -1, -1): # meaning; start from the end of the array, -1 is the stop value, -1 is the step value
      new_max = max(max_value, arr[i]) # get the max value between the current max value and the current element
      arr[i] = max_value # set the current element to the current max value
      max_value = new_max
    
    return arr
