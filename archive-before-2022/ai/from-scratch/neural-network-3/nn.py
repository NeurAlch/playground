
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
    return vector_mat_mul(input, weights)


weights = [
    [0.10, 0.10, -0.30],
    [0.10, 0.20, 0.000],
    [0.00, 1.30, 0.100],
]
data = [8.50, 0.65, 1.20]

print(nn(data, weights))