# 83. Remove Duplicates from Sorted List
# January 26, 2025
# https://leetcode.com/problems/remove-duplicates-from-sorted-list

# Solution
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
  def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
    current = head # start at the head, the first element

    # traverse the list
    while current is not None and current.next is not None:
      if current.val == current.next.val: # if the current value is the same as the next value
        current.next = current.next.next
      else:
        current = current.next
    
    return head
