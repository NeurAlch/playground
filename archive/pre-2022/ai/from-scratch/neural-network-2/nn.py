import numpy as np

def nn(input, weights):
    return input.dot(weights)

weights = np.array([0.10, 0.20, 0.00])
data = np.array([8.50, 0.65, 1.20])

print(nn(data, weights))