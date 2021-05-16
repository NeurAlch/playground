# Hot and Cold learning

def nn(data, weight):
    return data * weight


weight = 0.5
data = 0.5
goal = 0.8
change = 0.001

# Exact number of epochs to reach the correct prediction
epochs = 1101

for epoch in range(epochs):

    prediction = nn(data, weight)
    error = (prediction - goal) ** 2

    # Increase weight
    prediction_up = nn(data, weight + change)
    prediction_up_error = (goal - prediction_up) ** 2

    # Decrease weight
    prediction_down = nn(data, weight - change)
    prediction_down_error = (goal - prediction_down) ** 2

    # If error is smaller by decreasing, decrease weight
    if (prediction_down_error < prediction_up_error):
        print("DOWN - ERROR: " + str(error) + " PREDICTION: " + str(prediction))
        weight -= change

    # If error is smaller by increasing, increase weight
    if (prediction_up_error < prediction_down_error):
        print("UP - ERROR: " + str(error) + " PREDICTION: " + str(prediction))
        weight += change


# Final prediction (should be close to 0.8)
print(prediction)

# Final weight used
print(weight)