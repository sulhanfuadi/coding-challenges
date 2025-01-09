# 929. Unique Email Addresses
# January 09, 2025
# https://leetcode.com/problems/unique-email-addresses/

# Solution
class Solution:
  def numUniqueEmails(self, emails: List[str]) -> int:
    unique = set() # set to store unique email addresses

    for email in emails: # iterate through each email address
      local, domain = email.split('@') # split the email address into local and domain
      local = local.split('+')[0] # remove everything after the '+' sign
      local = local.replace('.', '') # remove all '.' characters
      unique.add(local + '@' + domain)
    
    return len(unique) # return the number of unique email addresses

  def numUniqueEmailsManual(self, emails: List[str]) -> int:
    unique = set() # set to store unique email addresses

    for email in emails: # iterate through each email address
      i = 0
      local = '' # local part of the email address

      while email[i] not in ['@', '+']: # iterate through the local part of the email address, ignoring everything after the '+' sign
        if email[i] != '.': # ignore '.'
          local += email[i]
        i += 1
      
      while email[i] != '@': # iterate until the '@' sign
        i += 1
      
      domain = email[i + 1:] # domain part of the email address

      unique.add(local + '@' + domain)
    
    return len(unique) # return the number of unique email addresses
