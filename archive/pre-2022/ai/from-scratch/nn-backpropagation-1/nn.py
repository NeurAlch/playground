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

for iteration in range(40):

    error_for_all_lights = 0

    # i -> row_ index
    for i in range(len(walk_vs_stop)):
        data = streetlights[i]
        goal = walk_vs_stop[i]

        prediction = data.dot(weights)
        error = (goal - prediction) ** 2
        error_for_all_lights += error

        delta = prediction - goal
        weights = weights - (alpha * (data * delta))
        print("PREDICTION: " + str(prediction))

    print("ERROR ALL: " + str(error_for_all_lights))