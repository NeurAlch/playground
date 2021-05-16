import numpy as np

a = np.array([1, 2, 3, 4])
b = np.array([2, 3, 4, 5])
c = np.vstack((a, b))

print(c)
print(c.shape)

d = np.hstack((a, b))
print(d)
print(d.shape)

e = np.array([
    [0, 1],
    [1, 0],
])
print("Rows %d" % e.shape[0])
print("Columns %d" % e.shape[1])