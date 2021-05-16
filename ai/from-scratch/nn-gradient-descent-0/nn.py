weight = 0.5
data = 0.5
expected_prediction = 0.8
prediction = data * weight
# square to make big errors bigger, and small smaller
# to prioritize big errors
# always make predictions positive, to avoid cancellation on average
error = (prediction - expected_prediction) ** 2
print(error)