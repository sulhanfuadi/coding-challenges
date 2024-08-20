# Valid Anagram
# August 19, 2024
# https://leetcode.com/problems/valid-anagram/

# Solution
class Solution:
    # time complexity: O(n), where n is the length of the string
    # space complexity: O(1), because the hashmap will only have 26 keys, which is constant
    def isAnagram(self, s: str, t: str) -> bool:
        # if they're not the smae lentgh, ofc they're not anagrams
        if len(s) != len(t):
            return False
        
        countS, countT = {}, {}

        # create the hashmap to count the occurence of each character in string s
        for i in range(len(s)): # iterate through the length of string s
            # count the occurence of each character in string s
            countS[s[i]] = countS.get(s[i], 0) + 1
            countT[t[i]] = countT.get(t[i], 0) + 1 
            # the get() method returns the value of the item with the specified key, the default value is 0 if the key does not exist
        
        # check if the hashmap of string s is equal to the hashmap of string t
        for c in countS:
            if countS[c] != countT.get(c, 0):
                return False
            # again, the get() method returns the value of the item with the specified key, the default value is 0
            # so, if the key does exist in the hashmap of string s, but not in the hashmap of string t, it will fine
        
        return True

    # the solution that probably won't work in an interview:
    def isAnagramV2(self, s: str, t: str) -> bool:
        # counter is a subclass of dictionary, so it will return a dictionary with the count of each character in the string
        return Counter(s) == Counter(t)
    
    # how can you make a solution where you don't actually need extra memory?
    # can you do a solution with of one memory (O(1))?
    def isAnagramV3(self, s: str, t: str) -> bool:
        # just think about how the anagram works
        # if the sorted version of string s is equal to the sorted version of string t, then they're anagrams of each other
        return sorted(s) == sorted(t) # time complexity: O(nlogn) (worse case), where n is the length of the string