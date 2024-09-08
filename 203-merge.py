# 88. Merge Sorted Array
# September 07, 2024
# https://leetcode.com/problems/merge-sorted-array

# Solution
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        # last index of nums1
        last = m + n - 1

        # merge in reverse order
        while m > 0 and n > 0:
            if nums1[m - 1] > nums2[n - 1]: # index starts from 0, so its n - 1, not just n
                nums1[last] = nums1[m - 1]
                m -= 1
            else:
                nums1[last] = nums2[n - 1]
                n -= 1
            last -= 1
        
        # if there are still elements in nums2
        while n > 0:
            nums1[last] = nums2[n - 1]
            n -= 1
            last -= 1 
        
