# 21. Merge Two Sorted Lists
# August 31, 2024
# https://leetcode.com/problems/merge-two-sorted-lists

# Solution
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    # def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
    #     # ListNode() is a class that creates a node with val and next attributes
    #     dummy = ListNode()
    #     tail = dummy

    #     while list1 and list2:
    #         if list1.val < list2.val:
    #             # tail.next is the next node of the tail
    #             tail.next = list1
    #             l1 = list1.next
    #         else:
    #             tail.next = list2
    #             l2 = list2.next
        
    #     if list1:
    #         tail.next = list1
    #     elif list2:
    #         tail.next = list2
        
    #     return dummy.next

    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = curr = ListNode()
        
        while list1 and list2:
            if list1.val < list2.val:
                curr.next = list1
                list1 = list1.next
            else:
                curr.next = list2
                list2 = list2.next
            curr = curr.next
                    
        curr.next = list1 or list2
                    
        return dummy.next

