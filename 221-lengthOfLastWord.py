# 58. Length of Last Word
# January 05, 2025
# https://leetcode.com/problems/length-of-last-word/

# Solution
class Solution:
  def lengthOfLastWord(self, s: str) -> int:
    i = len(s) - 1  # start from the end of the string
    length = 0   # initialize the length of the last word

    # skip the trailing spaces
    while i >= 0 and s[i] == ' ': # if the character is a space
      i -= 1

    # count the length of the last word
    while i >= 0 and s[i] != ' ':
      length += 1
      i -= 1
    
    return length