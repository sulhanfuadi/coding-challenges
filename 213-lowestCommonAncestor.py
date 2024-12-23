# 235. Lowest Common Ancestor of a Binary Search Tree
# December 23, 2024
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
        cur = root

        while cur:
            if p.val > cur.val and q.val > cur.val: # if both p and q are greater than cur, then move to the right
                cur = cur.right
            elif p.val < cur.val and q.val < cur.val: # if both p and q are less than cur, then move to the left
                cur = cur.left
            else: # if p and q are on different sides of cur, then cur is the LCA
                return cur