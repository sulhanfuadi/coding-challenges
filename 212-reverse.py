# 7. Reverse Integer
# September 28, 2024
# https://leetcode.com/problems/reverse-integer

# Solution
import math
class Solution:
  def reverse(self, x: int) -> int:
    # Nilai minimum dan maksimum dari integer 32-bit
    MIN = -2147483648
    MAX = 2147483647

    res = 0
    sign = -1 if x < 0 else 1  # Menentukan sign dari angka input
    x = abs(x)  # Mengambil nilai absolut dari x untuk mempermudah pembalikan

    while x != 0:
      digit = x % 10  # Mengambil digit terakhir dari x
      x //= 10  # Menghapus digit terakhir dari x

      # Memeriksa apakah hasil pembalikan akan melebihi batas integer 32-bit (overflow)
      if res > (MAX - digit) // 10:
        return 0

      res = res * 10 + digit

    return sign * res  # Mengembalikan hasil pembalikan dengan sign yang sesuai