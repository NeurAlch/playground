def nn(data, weight):
    return data * weight


weight = 0.5
data = 0.5
goal = 0.8

epochs = 50

for epoch in range(epochs):

    prediction = nn(data, weight)
    error = (prediction - goal) ** 2

    # gradient descent
    # (prediction - goal) is the pure error, indicating the raw direction and amount missed
    # if the pure error is positive it predicted too high
    # if the pure error is a big number, it missed by a big amount
    # multiplication by the input performs scaling, negative reversal and stopping
    direction_and_amount = (prediction - goal) * data

    weight -= direction_and_amount

    print("ERROR: " + str(error) + " PREDICTION: " + str(prediction) + " WEIGHT: " + str(weight))

# Final prediction (should be close to 0.8)
print(prediction)

# Final weight used
print(weight)

# Stopping will force that if the input is 0, direction_and_amount will be 0
# Negative reversal will reverse the sign of direction_and_amount in the event of input being negative
# By Scaling, if the input is big, the weight update should also be big