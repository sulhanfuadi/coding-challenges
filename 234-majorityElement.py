# 169. Majority Element
# February 03, 2025
# https://leetcode.com/problems/majority-element

# Solution
class Solution:
  # Approach 1: Hash Map
  def majorityElementHashMap(self, nums: List[int]) -> int:
    count = {}
    result, maxCount = 0, 0

    for num in nums:
      count[num] = 1 + count.get(num, 0) # count the number of times each element appears, if it doesn't exist, set it to 0
      if count[num] > maxCount:
        maxCount = count[num]
        result = num
    
    return result

  # Approach 2: Boyer–Moore Voting Algorithm
  def majorityElementBoyerMoore(self, nums: List[int]) -> int:
    count = 0
    candidate = None

    for num in nums:
      if count == 0: # if the count is 0, set the candidate to the current number
        candidate = num
      count += 1 if num == candidate else -1 # if the current number is the candidate, increment the count, otherwise decrement it

    return candidate # the candidate is the majority element
