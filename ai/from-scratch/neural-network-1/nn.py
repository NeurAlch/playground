
# Weighted SUM
def w_sum(a, b):

    assert(len(a) == len(b))

    output = 0

    for i in range(len(a)):
        output += (a[i] * b[i])

    return output


def nn(input, weights):
    return w_sum(input, weights)


weights = [0.10, 0.20, 0.00]
data = [8.50, 0.65, 1.20]

print(nn(data, weights))