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
  # Approach: Depth-First Search (DFS)
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
  # Time complexity: O(n), where n is the number of nodes in the binary tree.
  # Space complexity: O(h), where h is the height of the binary tree. In the worst case, the space complexity is O(n) for a skewed binary tree.

  # Approach: Breadth-First Search (BFS)
  def hasPathSum2(self, root: Optional[TreeNode], targetSum: int) -> bool:
    if not root: # if the root is None
      return False

    queue = [(root, root.val)] # initialize the queue with the root node and its value
    while queue: # while the queue is not empty
      node, currentSum = queue.pop(0) # pop the first element from the queue
      if not node.left and not node.right and currentSum == targetSum: # if the node is a leaf node and the current sum is equal to the target sum
        return True
      if node.left: # if the node has a left child
        queue.append((node.left, currentSum + node.left.val)) # add the left child to the queue with the updated sum
      if node.right: # if the node has a right child
        queue.append((node.right, currentSum + node.right.val))

    return False # if no path with the target sum is found
  # Time complexity: O(n), where n is the number of nodes in the binary tree.
  # Space complexity: O(n), where n is the number of nodes in the binary tree.
