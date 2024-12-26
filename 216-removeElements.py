# 203. Remove Linked List Elements
# December 26, 2024
# https://leetcode.com/problems/remove-linked-list-elements

# Solution
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
  def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
    dummy = ListNode(next=head) # create a dummy node, which is the head of the list
    prev, curr = dummy, head # set the previous node to the dummy node and the current node to the head of the list

    while curr: # iterate through the list
      nxt = curr.next

      if curr.val == val: # if the current node's value is equal to the value to be removed
        prev.next = nxt
      else: # if the current node's value is not equal to the value to be removed
        prev = curr
      
      curr = nxt # move to the next node

    return dummy.next # return the next node of the dummy node, which is the head of the list