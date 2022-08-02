import numpy as np

x = [5.0, 1.0, 3.0]
a = np.array(x)

print(a)
print(a.shape)
print(a.dtype)

b = np.empty([2, 2])
print(b)

c = np.zeros([3, 3])
print(c)

d = np.ones([5, 1])
print(d)