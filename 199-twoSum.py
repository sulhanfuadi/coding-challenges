# 167. Two Sum II - Input Array Is Sorted
# August 26, 2024
# https://leetcode.com/problems/two-sum-ii-input-array-is-sorted

# Solution
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        l, r = 0, len(numbers) - 1
        while l < r:
            if numbers[l] + numbers[r] == target:
                return [l + 1, r + 1]
            elif numbers[l] + numbers[r] < target:
                l += 1
            else:
                r -= 1
        return [-1, -1]
