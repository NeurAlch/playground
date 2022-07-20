weights = [
    0.1, # dominant force because toes * this weight are higher values
    0.2, # most sensitive
    0    # nfans is ignored ignored
]
toes = [8.5, 9.5, 10, 9] # average number of toas
wlrec = [0.65, 0.8, 0.8, 0.9] # current games won %
nfans = [1.2, 1.3, 0.5, 1.0] # number of fans in millions
input = [toes[0], wlrec[0], nfans[0]]


# weighted sum (dot product)
def w_sum(a, b):
    assert(len(a) == len(b))

    output = 0
    for i in range(len(a)):
        output += a[i] * b[i]

    return output


def neural_network(input, w):
    prediction = w_sum(input, w)
    return prediction


pred = neural_network(input, weights)

print(pred)