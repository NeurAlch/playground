import numpy as np

x = [1, 2, 44, 55, 67, 423]
x = np.array(x)

print(x)
print(type(x))
print(x[2])
print(x[-1])

y = [[0, 1], [2, 3], [4, 5]]
y = np.array(y)

print(y.shape)
print(y[0, 1])
print(y[(0, 1)])
print(y[0][1])
print(y[0,])
print(y[0][:])
print(y[0:1]) # same as just [0], 1 not included
print(y[0:2])
print(y[-2:]) # same as [1:]
print(y[1:])


xy = [
    [0, 1],
    [2, 3],
    [4, 5],
    [5, 6],
]
xy = np.array(xy)

print(xy[:, :-1])

xyz = [
    [0, 1, 2],
    [2, 3, 0],
    [4, 5, 1],
    [5, 6, 9],
]
xyz = np.array(xyz)
z = xyz[:, 2]

print(z)