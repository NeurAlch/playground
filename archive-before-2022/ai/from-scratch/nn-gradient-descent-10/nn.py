

def w_sum(a, b):

    assert(len(a) == len(b))

    output = 0

    for i in range(len(a)):
        output += (a[i] * b[i])

    return output


def vector_matrix_mul(vector, matrix):

    assert(len(vector) == len(matrix))

    output = [0, 0, 0]

    for i in range(len(vector)):
        output[i] = w_sum(vector, matrix[i])

    return output


def nn(data, weights):
    return vector_matrix_mul(data, weights)


def outer_prod(vec_a, vec_b):

    out = [[0] * len(vec_b) for _ in range(len(vec_a))]

    for i in range(len(vec_a)):
        for j in range(len(vec_b)):
            out[i][j] = vec_a[i] * vec_b[j]

    return out


weights = [
    [0.1, 0.1, -0.3],
    [0.1, 0.2,  0.0],
    [0.0, 1.2,  0.1],
]

alpha = 0.1
data = [8.5, 0.65, 1.2]
goal = [0.1, 1, 0.1]

prediction = nn(data, weights)

error = [0, 0, 0]
delta = [0, 0, 0]

for i in range(len(goal)):
    error[i] = (prediction[i] - goal[i]) ** 2
    delta[i] = prediction[i] - goal[1]

weight_deltas = outer_prod(data, delta)

for i in range(len(weights)):
    for j in range(len(weights[0])):
        weights[i][j] -= alpha * weight_deltas[i][j]

print("PRED: " + str(prediction))
print("ERROR: " + str(error))
print("DELTA: " + str(delta))
print("WEIGHTS: " + str(weights))
print("WEIGHT DELTAS: ")
print(str(weight_deltas))
print()
