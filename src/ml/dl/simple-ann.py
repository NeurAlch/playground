import torch
import torch.nn as nn

N = 30
epochs = 100
learning_rate = 0.01
x = torch.randn(N, 1)
y = x + torch.randn(N, 1) * 0.5

number_of_inputs = 1
number_of_outputs = 1

# Linear Unit
input_layer = nn.Linear(number_of_inputs, number_of_outputs)

# ReLU - Rectified Linear Unit, non-linear activation function
activation_function = nn.ReLU()

# Linear Unit
output_layer = nn.Linear(number_of_inputs, number_of_outputs)

ANN = nn.Sequential(
    input_layer,
    activation_function,
    output_layer
)

loss_function = nn.MSELoss()

optimizer = torch.optim.SGD(ANN.parameters(), lr=learning_rate)

losses = torch.zeros(epochs)

for i_epoch in range(epochs):
    # forward pass
    yHat = ANN(x)

    # loss, yHat = predicted values, y = observed values
    loss = loss_function(yHat, y)
    losses[i_epoch] = loss

    # backprop
    optimizer.zero_grad() # reset gradients to 0
    loss.backward() # backpropagate the loss
    optimizer.step() # update the weights

# final forward pass
predictions = ANN(x)

# final loss (MSE)
test_loss = (predictions - y).pow(2).mean()

print("Final loss:", test_loss.item())
