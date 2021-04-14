class Solution:
    def canPermutePalindrome(self, s: str) -> bool:
        result = 0
        for c in s:
            result ^= 1<< ord(c)

        return result & (result - 1) == 0

