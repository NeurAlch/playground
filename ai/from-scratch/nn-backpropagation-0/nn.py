import numpy as np

streetlights = np.array([
    [1, 0, 1],
    [0, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
])

walk_vs_stop = np.array([
    [0],
    [1],
    [0],
    [1],
    [1],
    [0],
])

weights = np.array([0.5, 0.48, -0.7])
alpha = 0.1

data = streetlights[0]
goal = walk_vs_stop[0]

for iteration in range(20):
    prediction = data.dot(weights) # dot product (weighted sum)
    error = (goal - prediction) ** 2
    delta = prediction - goal
    weights = weights - (alpha * (data * delta))
    print("ERROR: " + str(error) + " PREDICTION: " + str(prediction))