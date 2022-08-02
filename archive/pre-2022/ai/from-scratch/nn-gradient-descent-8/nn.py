weights = [0.1, 0.2, -0.1]


def w_sum(a, b):

    assert(len(a) == len(b))

    output = 0

    for i in range(len(a)):
        output += (a[i] * b[i])

    return output


def nn(data, weights):
    return w_sum(data, weights)


def ele_mul(number, vector):

    output = [0, 0, 0]

    assert(len(output) == len(vector))

    for i in range(len(vector)):
        output[i] = number * vector[i]

    return output

data = [8.50, 0.65, 1.20]
prediction = nn(data, weights)

error = (prediction - 1) ** 2
delta = prediction - 1
weight_deltas = ele_mul(delta, data)

alpha = 0.01 # to avoid too much difference in slope, since no normalization

for iter in range(3):

    prediction = nn(data, weights)
    error = (prediction - 1) ** 2
    delta = prediction - 1

    weight_deltas = ele_mul(delta, data)

    print("ITER: " + str(iter+1))
    print("PRED: " + str(prediction))
    print("ERROR: " + str(error))
    print("DELTA: " + str(delta))
    print("WEIGHTS: " + str(weights))
    print("WEIGHT DELTAS: ")
    print(str(weight_deltas))
    print()

    for i in range(len(weights)):
        weights[i] -= alpha * weight_deltas[i]

print(weight_deltas)

# delta: a measure of how much
# higher or lower you want a node's value to be

# weight delta: A derivative-based estimate of the direction
# and amount you should move a weight to reduce node_delta,
# accounting for scaling, negative reversal and stopping.
# Is an estimate of the direction and amount to move the weights
# to reduce node_delta, inferred by the derivative.