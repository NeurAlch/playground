import numpy as np

print(np.eye(3))
print(np.eye(4, 3))
print(np.eye(4, 5, 1))

print("----")
print(np.zeros_like([
    [1.0, 2.0],
    [3.0, 1.0]
]))

print("----")
print(np.full((2, 2), 1.5))

print("----")
print(np.asarray([0, 1, 2, 3, 4, 5]))
print(np.asmatrix([0, 1, 2, 3, 4, 5]))

print("----")
print(np.fromstring("1 2 3 4 5 6", dtype=int, sep=" "))

print("----")
print(np.char.array("abc"))

print("----")
print(np.arange(0, 10))
print(np.linspace(0, 10, 5))
print(np.logspace(0, 10, 5))

print("----")
x = np.array([[1, 2, 3], [2, 3, 4]])
print(x.shape)
print(np.reshape(x, (3, 2)))

print("----")
print(np.flip([1, 2, 3, 4]))

print("----")
print(np.unique([1, 2, 2, 3, 3, 4, 4, 4, 5]))

print("----")
print(np.trim_zeros([0, 0, 1, 0, 2, 2, 3, 0, 3, 4, 0, 4, 4, 5, 0, 0]))

print("----")
print(np.tile(1.5, 10))

print("----")
print(np.stack([[0, 2, 3], [1, 2, 4]], 0))

print("----")
print(np.asscalar(np.array([[1]])))

print("----")
x = np.array([
    [1],
    [5],
    [2]
])
print(np.squeeze(x))

print("----")
x = np.array([
    [1, 2, 3],
    [5, 6, 7],
    [2, 3, 4]
])
print(np.ravel(x))
