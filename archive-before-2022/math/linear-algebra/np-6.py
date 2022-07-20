import numpy as np

a = np.array([1, 2, 3])
b = 1
c = a + b

print(c == [2, 3, 4])

d = np.array([
    [1, 2],
    [3, 4],
])
e = 1
f = d + e

print(f == [[2, 3], [4, 5]])

g = np.array([
    [1, 2],
    [3, 4],
    [5, 6],
])
h = [1, 1]
i = g + h

print(i == [[2, 3], [4, 5], [6, 7]])