import numpy as np

m1 = np.zeros((1, 4))
m2 = np.zeros((4, 3))
m3 = m1.dot(m2)

print(m3.shape)