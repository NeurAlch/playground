# https://github.com/luspr/deep-learning-deep-dive

import torch
import torchvision
import torch.nn as nn
import torch.optim as optim

device = "cpu"

if torch.cuda.is_available():
    device = "cuda:0"

device = torch.device(device)

class Net(nn.Module):

    def __init__(self, output_dim):
        super().__init__()

        self.conv = nn.Sequential(
            nn.Conv2d(3, 64, 3),
            nn.ReLU(),
            nn.Conv2d(64, 128, 3),
            nn.ReLU(),
            nn.Conv2d(128, 128, 3),
            nn.ReLU(),
            nn.Conv2d(128, 64, 3),
            nn.AdaptiveAvgPool2d(1)
        )

        self.fc = nn.Sequential(
            nn.Linear(64, 32),
            nn.ReLU(),
            nn.Dropout(),
            nn.Linear(32, output_dim)
        )

    def forward(self, x):

        x = self.conv.forward(x)
        x = x.view(x.shape[0], 64)
        res = self.fc.forward(x)

        return res


def get_data():

    transform = torchvision.transforms.Compose([
        torchvision.transforms.ToTensor(),
        torchvision.transforms.Normalize((0.1307,), (0.3081,))
    ])

    trainset = torchvision.datasets.CIFAR10(root='./data', train=True, download=True, transform=transform)
    trainloader = torch.utils.data.DataLoader(trainset, batch_size=16, shuffle=True, num_workers=2)
    testset = torchvision.datasets.CIFAR10(root='./data', train=False, download=True, transform=transform)
    testloader = torch.utils.data.DataLoader(testset, batch_size=16, shuffle=True, num_workers=2)

    return trainloader, testloader


def train(trainloader, epochs=10, ):

    net = Net(10)
    net = net.to(device)

    print("Start training.")

    criterion = nn.CrossEntropyLoss()
    optimizer = optim.Adam(net.parameters(), lr=0.001)

    for ep in range(epochs):

        running_loss = 0.0

        for i, data in enumerate(trainloader, 0):

            inputs, labels = data
            inputs, labels = inputs.to(device), labels.to(device)

            optimizer.zero_grad()

            outputs = net(inputs)

            loss = criterion(outputs, labels)
            loss.backward()

            optimizer.step()

            running_loss += loss.item()

            if i % 1000 == 999:
                print(f'Ep: {ep + 1} | {i + 1}. Loss: {running_loss/1000:.3f}')
                running_loss = 0.0

    return net


def test(net, testloader):

    total = 0
    correct = 0

    with torch.no_grad():

        for data in testloader:

            images, labels = data
            images, labels = images.to(device), labels.to(device)

            outputs = net(images)

            _, predicted = torch.max(outputs.data, 1)

            total += labels.size(0)
            correct += (predicted == labels).sum().item()

    accuracy = 100 * correct / total

    print(f'Accuracy on the test set: {100 * correct / total}%')

    return accuracy


if __name__ == '__main__':

    trainloader, testloader = get_data()

    net = train(trainloader, epochs=10)

    test(net, testloader)