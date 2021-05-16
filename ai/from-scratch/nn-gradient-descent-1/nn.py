# Learning in neural networks is a search problem
# searching for the best possible configuration of weights
# so that error falls closer to 0

weight = 0.1
change = 0.01

def nn(data, weight):
    return data * weight


m1 = 8.5
m2 = 1

prediction = nn(m1, weight)
prediction_error = (prediction - m2) ** 2

# Increase weight
prediction_up = nn(m1, weight + change)
prediction_up_error = (prediction_up - m2) ** 2

# Decrease weight
prediction_down = nn(m1, weight - change)
prediction_down_error = (prediction_down - m2) ** 2

# Check what weight won
if prediction_error > prediction_down_error or prediction_error > prediction_up_error:

    if (prediction_down_error < prediction_up_error):
        weight -= change

    if (prediction_up_error < prediction_down_error):
        weight += change


print(weight)