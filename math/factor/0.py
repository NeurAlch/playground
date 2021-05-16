# When a nonzero integer A divides another integer B, leaving a remander of 0
# A is said to be a factor of B

def is_factor(a, b):
    if b % a == 0:
        return True
    return False

print(is_factor(2, 4))
print(is_factor(4, 3))
print(is_factor(50, 100))
print(is_factor(4, 1024))