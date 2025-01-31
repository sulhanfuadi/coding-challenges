# 28. Find the Index of the First Occurrence in a String
# January 31, 2025
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
# Time complexity: O(n * m), where n is the length of the haystack and m is the length of the needle

  def lpmStrStr(self, haystack: str, needle: str) -> int:
    if needle == "": # if needle is empty, return 0
      return 0

    lps = [0] * len(needle) # create an array to store the longest prefix suffix values

    prevLps = 0 # initialize the previous lps value
    i = 1 # set the index to 1, since the first element has no prefix or suffix

    while i < len(needle): # loop through the needle
      if needle[i] == needle[prevLps]: # if the characters match, increment the previous lps value and store it in the lps array
        prevLps += 1
        lps[i] = prevLps
        i += 1
      elif prevLps == 0: # i f the characters don't match and the previous lps value is 0, set the lps value to 0 and increment the index
        lps[i] = 0
        i += 1
      else: # if the characters don't match and the previous lps value is not 0, update the previous lps value
        prevLps = lps[prevLps - 1]

    i = 0 # pointer for haystack
    j = 0 # pointer for needle

    while i < len(haystack): # loop through the haystack
      if haystack[i] == needle[j]: # if the characters match, increment both pointers
        i += 1
        j += 1
      else:
        if j != 0: # if the characters don't match and the needle pointer is not at the beginning, update the needle pointer
          j = lps[j - 1]
        else: # if the characters don't match and the needle pointer is at the beginning, increment the haystack pointer
          i += 1
      if j == len(needle): # if the needle pointer is at the end, return the index
        return i - len(needle)

    return -1 # return -1 if the needle is not found in the haystack
