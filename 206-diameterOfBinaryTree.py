# 543. Diameter of Binary Tree
# September 14, 2024
# https://leetcode.com/problems/diameter-of-binary-tree/

# Solution
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        # Inisialisasi variabel untuk menyimpan diameter maksimum
        self.ans = 0
        
        def depth(node):
            # Jika node adalah None, kembalikan 0
            if not node:
                return 0
            # Hitung kedalaman subtree kiri
            left = depth(node.left)
            # Hitung kedalaman subtree kanan
            right = depth(node.right)
            # Update diameter maksimum dengan jumlah kedalaman kiri dan kanan
            self.ans = max(self.ans, left + right)
            # Kembalikan kedalaman maksimum dari subtree kiri atau kanan ditambah 1
            return 1 + max(left, right)
        
        # Panggil fungsi depth untuk menghitung diameter dari root
        depth(root)
        # Kembalikan diameter maksimum yang ditemukan
        return self.ans