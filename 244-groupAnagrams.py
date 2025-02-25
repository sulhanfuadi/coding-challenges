# 49. Group Anagrams
# February 25, 2025
# https://leetcode.com/problems/group-anagrams

# Solution
from collections import defaultdict
from typing import List
class Solution:
  def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
    result = defaultdict(list) # Initialize the result to a defaultdict of lists
    # defaultdict is a subclass of dict that returns a default value when a key is not found

    # Iterate through the strings in strs
    for s in strs:
      count = [0] * 26 # Initialize the count to a list of 26 zeros, one for each lowercase English letter
      # Iterate through the characters in s

      for char in s:
        count[ord(char) - ord('a')] += 1 # Increment the count of the character in count
        # ord(char) returns the Unicode code point of the character
        # with this formula, 'a' will be 0, 'b' will be 1, and so on

      result[tuple(count)].append(s) # Append s to the list in result corresponding to the tuple of count

    return list(result.values()) # Return the values of result as a list

# Time complexity: O(n * m) where n is the length of strs and m is the maximum length of a string in strs
# Space complexity: O(n * m)
