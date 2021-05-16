weights = [0.3, 0.2, 0.9]


def w_sum(a, b):

    assert(len(a) == len(b))

    output = 0

    for i in range(len(a)):
        output += (a[i] * b[i])

    return output


def nn(data, weights):
    return ele_mul(data, weights)


def ele_mul(number, vector):

    output = [0, 0, 0]

    assert(len(output) == len(vector))

    for i in range(len(vector)):
        output[i] = number * vector[i]

    return output


data = 0.65
goal = [0.1, 1, 0.1]
prediction = nn(data, weights)

error = [0, 0, 0]
delta = [0, 0, 0]

for i in range(len(goal)):
    error[i] = (prediction[i] - goal[i]) ** 2
    delta[i] = prediction[i] - goal[i]

weight_deltas = ele_mul(data, weights)
alpha = 0.1

for i in range(len(weights)):
    weights[i] -= (weight_deltas[i] * alpha)

print("WEIGHTS: " + str(weights))
print("WEIGHT DELTAS: " + str(weight_deltas))