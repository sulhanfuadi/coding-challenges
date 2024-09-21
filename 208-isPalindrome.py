# 234. Palindrome Linked List
# September 20, 2024
# https://leetcode.com/problems/palindrome-linked-list

# Solution
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindromeV01(self, head: Optional[ListNode]) -> bool:
        nums = []
        while head:
            nums.append(head.val)
            head = head.next
        # Initialize two pointers, one at the start and one at the end of the list
        l, r = 0, len(nums) - 1
        # Check if the list is a palindrome by comparing values from both ends
        while l < r:
            if nums[l] != nums[r]:
                return False
            l += 1
            r -= 1
        return True
    
    def isPalindromeV02(self, head: Optional[ListNode]) -> bool:
        fast = head
        slow = head

        # Find the middle of the list (slow)
        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next

        # Reverse the second half of the list
        prev = None
        while slow:
            temp = slow.next
            slow.next = prev
            prev = slow
            slow = temp
        
        # Compare the first half and the reversed second half
        left, right = head, prev
        while prev:
            if head.val != prev.val:
                return False
            head = head.next
            prev = prev.next
        return True
