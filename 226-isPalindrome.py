# 125. Valid Palindrome
# January 15, 2025
# https://leetcode.com/problems/valid-palindrome/

# Solution
class Solution:
  def isPalindrome(self, s: str) -> bool:
    newStr = "" # new string

    for char in s:
      if char.isalnum(): # check if the character is alphanumeric, will ignore special characters
        newStr += char.lower() # lower case the character and add it to the new string

    return newStr == newStr[::-1] # check if the new string is equal to the reverse of the new string
  