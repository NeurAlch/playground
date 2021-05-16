import numpy as np

# Vector
v = [1, 2, 3]
v = [ 1,
      2,
      3, ]

a = np.array([1, 2, 3])
b = np.array([1, 1, 1])
c = a + b
d = a - b
e = a * b
f = a / b
print(c)
print(d)
print(e)
print(f)

g = a.dot(b)
print(g)