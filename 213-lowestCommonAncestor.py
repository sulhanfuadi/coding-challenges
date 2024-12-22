# 235. Lowest Common Ancestor of a Binary Search Tree
# December 22, 2024
# https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree

# Solution
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        