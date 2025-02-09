# 112. Path Sum
# February 10, 2025
# https://leetcode.com/problems/path-sum

# Solution
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
  def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
    # helper function to perform the dfs, takes the current node and the current sum
    def dfs(node, currentSum):
      if not node: # if the node is None
        return False
      
      currentSum += node.val # add the value of the node to the current sum
      if not node.left and not node.right: # if the node is a leaf node
        return currentSum == targetSum
      
      return dfs(node.left, currentSum) or dfs(node.right, currentSum)
    
    return dfs(root, 0) # start the dfs from the root node with a current sum of 0
