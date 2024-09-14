# 206. Reverse Linked List
# September 13, 2024
# https://leetcode.com/problems/reverse-linked-list

# Solution
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
      # iterative solution
      prev, curr = None, head;
      # T O(N) S O(1)
      while curr:
         nxt = curr.next
         curr.next = prev
         prev = curr
         curr = nxt
      return prev
    
    # recursive solution
    # T O(N) S O(N)
    # def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
    #   if not head:
    #     return None
      
    #   newHead = head
    #   if head.next:
    #      newHead = self.reverseList(head.next)
    #      head.next.next = head
    #   head.next = None

    #   return newHead
