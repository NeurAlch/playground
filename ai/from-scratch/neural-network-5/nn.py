import numpy as np

def nn(input, weights):
    hid = input.dot(weights[0])
    return hid.dot(weights[1])


w1 = np.array([
    [0.100, 0.20, -0.10],
    [-0.10, 0.10, 0.900],
    [0.100, 0.40, 0.100],
])
w2 = np.array([
    [0.30, 1.10, -0.30],
    [0.10, 0.20, 0.000],
    [0.00, 1.30, 0.100],
])

weights = [w1, w2]

data = np.array([8.50, 0.65, 1.20])

print(nn(data, weights))