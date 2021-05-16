def roots(a, b, c):

    D = (b*b - 4*a*c)**0.5
    X_1 = (-b + D)/(2*a)
    X_2 = (-b - D)/(2*a)

    return [X_1, X_2]


def equal0(equation, x):
    return equation(x) == 0


def one(x):
    return x**2 + 2*x + 1

X1 = roots(1, 2, 1)
print(X1)
print(equal0(one, X1[0]))
print(equal0(one, X1[1]))


def two(x):
    return 2*(x**2) + 5*x + 3

X2 = roots(2, 5, 3)
print(X2)
print(equal0(two, X2[0]))
print(equal0(two, X2[1]))

def three(x):
    return x**2 - 3*x

X3 = roots(1, -3, 0)
print(X3)
print(equal0(three, X3[0]))
print(equal0(three, X3[1]))