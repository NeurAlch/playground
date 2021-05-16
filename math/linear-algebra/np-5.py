import numpy as np

a = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
b = a.reshape((a.shape[0], 1))

print(a.shape)
print(b.shape)

c = [
    [77, 66],
    [55, 44],
    [33, 22],
]
c = np.array(c)
d = c.reshape((c.shape[0], c.shape[1], 1))

print(c.shape)
print(d.shape)
print(d)