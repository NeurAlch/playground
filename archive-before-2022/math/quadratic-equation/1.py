# For equations like [ x**2 + 2*x + 1 = 0 ] we use the Quadratic Formula
# Such equations are know as quadratic equations
# Generally expressed as a*(x**2) + b*x + c = 0
# A quadratic equation has two roots, generally expressed as
# x is the unknown, a b and c are constants with "a" not equal to 0
# a*(x**2) + (b*x) + c = 0
# The quadratic formula for calculating the roots are:
# (-b+((b**2 - 4*a*c) ** 0.5)) / (2*a)
# (-b-((b**2 - 4*a*c) ** 0.5)) / (2*a)
# A quadratic equation has two roots


# https://commons.wikimedia.org/wiki/File:Quadratic_formula.svg

a = 1 # quadratic coefficient
b = 2 # linear coefficient
c = 1 # constant / free term coefficient

# we evaluate the square root by raising it to the 0.5th power
D = (b**2 - 4*a*c) ** 0.5
X_1 = (-b + D) / (2*a)
X_2 = (-b - D) / (2*a)

print(X_1) # indeterminate variable
print(X_2) # indeterminate variable

print(X_1**2 + 2*X_1 + 1 == 0)
print(X_2**2 + 2*X_2 + 1 == 0)