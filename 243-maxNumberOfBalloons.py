# 1189. Maximum Number of Balloons
# February 22, 2025
# https://leetcode.com/problems/maximum-number-of-balloons

# Solution
class Solution:
  def maxNumberOfBalloons(self, text: str) -> int:
    countText = Counter(text) # Count the number of each character in the text
    countBalloon = Counter('balloon') # Count the number of each character in the word balloon

    result = len(text) # Initialize the result to the length of the text

    # Iterate through the characters in the word balloon
    for char in countBalloon:
      # Update the result to the minimum of the current result and the count of the character in the text divided by the count of the character in the word balloon
      result = min(result, countText[char] // countBalloon[char])
    
    return result
