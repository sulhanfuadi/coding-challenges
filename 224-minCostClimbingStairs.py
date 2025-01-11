# 746. Min Cost Climbing Stairs
# January 11, 2025
# https://leetcode.com/problems/min-cost-climbing-stairs

# Solution
class Solution:
  def minCostClimbingStairs(self, cost: List[int]) -> int:
    cost.append(0) # add 0 to the end of the list, so that we can reach the top of the stairs

    for i in range(len(cost) - 3, -1, -1): # start from the second to last element, decrementing by 1
      cost[i] += min(cost[i + 1], cost[i + 2]) # add the minimum of the next two elements to the current element

    return min(cost[0], cost[1]) # return the minimum of the first two elements
