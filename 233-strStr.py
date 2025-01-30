# 28. Find the Index of the First Occurrence in a String
# January 30, 2025
# https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string

# Solution
class Solution:
  def strStr(self, haystack: str, needle: str) -> int:
    if needle == "": # if needle is empty, return 0
      return 0
    
    for i in range(len(haystack) - len(needle) + 1): # loop through the haystack, but only until the length of the needle
      if haystack[i:i + len(needle)] == needle: # if the substring of the haystack is equal to the needle, return the index
        return i
      
    return -1 # return -1 if the needle is not found in the haystack
