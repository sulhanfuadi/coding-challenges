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
    # edge cases, if either is empty, return None
    if not headA or not headB:
      return None
    
    # get the length of both linked lists
    pA = headA
    pB = headB

    while pA != pB:
      pA = pA.next if pA else headB # if pA is None (end of list), set it to headB, else move to next node, same for pB
      pB = pB.next if pB else headA
    
    # pA and pB will meet at the intersection point or at the end of the list, which is None
    return pA
