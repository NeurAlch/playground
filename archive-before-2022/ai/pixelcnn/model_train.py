import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'

from src import train_model

if __name__ == '__main__':
    pixelcnn = train_model()
