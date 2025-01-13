# 572. Subtree of Another Tree
# January 13, 2025
# https://leetcode.com/problems/subtree-of-another-tree/

# Solution
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
  def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
    if not subRoot: # subRoot is None, None is a subtree of any tree
      return True
    if not root: # root is None, so there is no way that subRoot is a subtree of root
      return False
    if self.sameSubtree(root, subRoot): # if the trees are the same, it's mean subRoot is a subtree of root
      return True
    return self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot) # check left and right subtrees, recursively
    
  def sameSubtree(self, tree1, tree2):
    if not tree1 and not tree2: # both are None
      return True
    if not tree1 or not tree2: # one of them is None
      return False
    if tree1.val != tree2.val: # values are different
      return False
    return self.sameSubtree(tree1.left, tree2.left) and self.sameSubtree(tree1.right, tree2.right) # check left and right subtrees, recursively