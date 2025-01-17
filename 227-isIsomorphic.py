# 205. Isomorphic Strings
# January 17, 2025
# https://leetcode.com/problems/isomorphic-strings

# Solution
class Solution:
  def isIsomorphic(self, s: str, t: str) -> bool:
    mapST, mapTS = {}, {} # map from s to t and t to s

    for i in range(len(s)):
      c1, c2 = s[i], t[i] # get the characters at the same index

      if c1 in mapST and mapST[c1] != c2: # if c1 is already mapped to another character
        return False

      if c2 in mapTS and mapTS[c2] != c1: # if c2 is already mapped to another character
        return False

      mapST[c1] = c2 # map s to t, if it already exists, it should be the same
      mapTS[c2] = c1 # map t to s, if it already exists, it should be the same

    return True # if no mismatches are found, return True
