# 121. Best Time to Buy and Sell Stock
# September 04, 2024
# https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

# Solution
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        l, r = 0, 1 # left and right pointers, left = buy, right = sell
        max_profit = 0

        while r < len(prices):
            if prices[l] < prices[r]:
                profit = prices[r] - prices[l]
                max_profit = max(max_profit, profit)
            else:
                l = r
            r += 1

        return max_profit
