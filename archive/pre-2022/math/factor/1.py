# Calculates the factors of a number, starting from 1

def factors(a):
    n = []
    for i in range(1, a+1):
        if a % i == 0:
            n.append(i)
    return n

print(factors(10))
print(factors(100))