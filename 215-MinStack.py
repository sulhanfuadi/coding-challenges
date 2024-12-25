# 155. Min Stack
# December 25, 2024
# https://leetcode.com/problems/min-stack

# Solution
class MinStack:
  def __init__(self):
    self.stack = []
    self.minStack = []

  def push(self, val: int) -> None:
    self.stack.append(val) # append the value to the stack
    val = min(val, self.minStack[-1] if self.minStack else val) # if minStack is empty, then val is the minimum value
    # update val to be the minimum value
    self.minStack.append(val) # append the minimum value to the minStack

  def pop(self) -> None:
    self.stack.pop()
    self.minStack.pop() # remove the last element of the minStack, which is the minimum value

  def top(self) -> int:
    return self.stack[-1] # return the last element of the stack

  def getMin(self) -> int:
    return self.minStack[-1] # return the last element of the minStack, which is the minimum value


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()