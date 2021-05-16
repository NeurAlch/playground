
weight = 0.1
alpha = 0.01

def nn(data, weight):
    return data * weight

data = 8.5
goal = 1

prediction = nn(data, weight)

error = (prediction - goal) ** 2

# measurement of how much this node missed
delta = prediction - goal

# measure of how much a weight caused the network to miss
weight_delta = data * delta

# the new change to the weight
weight -= weight_delta * alpha

print(prediction)
print(delta)
print(weight_delta)