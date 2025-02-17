# 160. Intersection of Two Linked Lists
# February 18, 2025
# https://leetcode.com/problems/intersection-of-two-linked-lists

# Solution
# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
  def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
    
