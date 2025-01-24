# 703. Kth Largest Element in a Stream
# January 24, 2025
# https://leetcode.com/problems/kth-largest-element-in-a-stream

import heapq

# Solution
class KthLargest:
  def __init__(self, k: int, nums: List[int]):
    # minHeap with K largest elements
    self.minHeap = nums # list of k largest elements
    self.k = k # kth largest element

    # heapify the list
    heapq.heapify(self.minHeap)

    # if the list has more than k elements, remove the smallest element
    while len(self.minHeap) > k:
      heapq.heappop(self.minHeap)

  def add(self, val: int) -> int:
    heapq.heappush(self.minHeap, val) # add the new number to the minHeap

    if len(self.minHeap) > self.k: # if the heap has more than k elements, remove the smallest number
      heapq.heappop(self.minHeap)

    return self.minHeap[0] # return the Kth largest number
