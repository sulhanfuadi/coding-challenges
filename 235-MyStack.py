# 225. Implement Stack using Queues
# February 06, 2025
# https://leetcode.com/problems/implement-stack-using-queues

# Solution
from collections import deque

class MyStack:
    def __init__(self):
        self.q = deque() # deque is a double-ended queue

    def push(self, x: int) -> None:
        self.q.append(x) # append to the right, equivalent to push

    def pop(self) -> int:
        # rotate the queue to the left until the last element is at the front
        for _ in range(len(self.q) - 1):
            self.q.append(self.q.popleft())
        # pop and return the last element, which is the top element
        return self.q.popleft()

    def top(self) -> int:
        return self.q[-1] if self.q else None # return the last element of the queue

    def empty(self) -> bool:
        return len(self.q) == 0 # check if the queue is empty
