import numpy as np

weights = np.array([0.1, 0.2, 0])
toes = np.array([8.5, 9.5, 10, 9]) # average number of toas
wlrec = np.array([0.65, 0.8, 0.8, 0.9]) # current games won %
nfans = np.array([1.2, 1.3, 0.5, 1.0]) # number of fans in millions
input = np.array([toes[0], wlrec[0], nfans[0]])


def neural_network(input, w):
    prediction = input.dot(w)
    return prediction


pred = neural_network(input, weights)

print(pred)