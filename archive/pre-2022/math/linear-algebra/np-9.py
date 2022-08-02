import math
import numpy as np
import numpy.linalg as la

a = np.array([1, 2, 3])

# L¹, taxicab norm, manhattan norm
# ‖v‖₁ = |a₁| + |a₂| + |a₃|
b = la.norm(a, 1)

print(b)
print(b == a[0] + a[1] + a[2])


# L², Euclidean norm
# L²(v) = ‖v‖₂
c = la.norm(a)
print(c)
print(c == la.norm(a, 2))
print(c == math.sqrt(
    math.pow(a[0], 2)
    + math.pow(a[1], 2)
    + math.pow(a[2], 2)
))

# Max Norm
d = la.norm(a, math.inf)
print(d)
print(d == max(a))