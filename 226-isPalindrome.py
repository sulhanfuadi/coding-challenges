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
  
  def isPalindrome2(self, s: str) -> bool:
    l, r = 0, len(s) - 1 # left and right pointers

    # loop through the string, until the left pointer is less than the right pointer, which means we have checked all the characters
    while l < r:
      # check if the character at the left pointer is not alphanumeric
      while l < r and not self.alphaNumeric(s[l]):
        l += 1
      # check if the character at the right pointer is not alphanumeric
      while l < r and not self.alphaNumeric(s[r]):
        r -= 1

      # check if the characters at the left and right pointers are not equal
      if s[l].lower() != s[r].lower():
        return False

      # move the pointers
      l += 1
      r -= 1

    return True # return True if the string is a palindrome

  # helper function to check if the character is alphanumeric
  def alphaNumeric(self, c: str) -> bool:
    return ((ord('a') <= ord(c) <= ord('z')) or # check if the character is a letter, lowercase
            (ord('A') <= ord(c) <= ord('Z')) or # check if the character is a letter, uppercase
            (ord('0') <= ord(c) <= ord('9'))) # check if the character is a number