# Hot and Cold learning

def nn(data, weight):
    return data * weight


weight = 0.0
data = 0.5
goal = 0.8

epochs = 25

for epoch in range(epochs):

    prediction = nn(data, weight)
    error = (prediction - goal) ** 2
    delta = prediction - goal
    weight_delta = delta * data # derivative
    weight -= weight_delta

    print("ERROR: " + str(error) + " PREDICTION: " + str(prediction) + " WEIGHT: " + str(weight))


# Final prediction (should be close to 0.8)
print(prediction)

# Final weight used
print(weight)