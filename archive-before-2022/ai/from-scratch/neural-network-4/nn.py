
def w_sum(a, b):

    assert(len(a) == len(b))

    output = 0

    for i in range(len(a)):
        output += (a[i] * b[i])

    return output


def vector_mat_mul(vector, matrix):

    assert(len(vector) == len(matrix))

    output = [0, 0, 0]

    for i in range(len(vector)):
        output[i] = w_sum(vector, matrix[i])

    return output


def nn(input, weights):
    hid = vector_mat_mul(input, weights[0])
    return vector_mat_mul(hid, weights[1])


w1 = [
    [0.100, 0.20, -0.10],
    [-0.10, 0.10, 0.900],
    [0.100, 0.40, 0.100],
]
w2 = [
    [0.30, 1.10, -0.30],
    [0.10, 0.20, 0.000],
    [0.00, 1.30, 0.100],
]

weights = [w1, w2]

data = [8.50, 0.65, 1.20]

print(nn(data, weights))