# 2-D array of numbers, each element is identified by two indices instead of just one.
# Usually uppercase variable names with bold typeface.
# Usually identify the elements of a matrix using its name in italic but not bold font, and separated by commas.
# We can identify all the numbers with vertical coordinate i by writing a ":" for the horizontal coordinate.

# Transpose
# Is the mirror image of the matrix across a diagonal line, called the main diagonal.

# We can add matrices to each other as long as they have the same shape.
# We can also add a scalar to a matrix or multiply a matrix by a scalar,
# just performing the operation on each element of a matrix.


a = [
    [1, 2, 3],
    [4, 5, 6]
]
b = [
    [7, 6, 9],
    [10, 11, 12]
]

c = a + b
c = [
    [1 + 7, 2 + 6, 3 + 9],
    [4 + 10, 5 + 11, 6 + 12]
]

# subtraction, the same but with -

# ---------------
# multiplication, A has to have the same number of columns as B has rows
# multiplication is distributive A(B + C) = AB + AC
# multiplication is associative A(BC) = (AB)C

a = [
    [1, 2],
    [3, 4],
    [5, 6],
]
b =  [
    [1, 3, 5],
    [2, 4, 6],
]

c = a * b
c = [
    [1*1 + 2*2, 1*3 + 2*4, 1*5 + 2*6],
    [3*1 + 4*2, 3*3 + 4*4, 3*5 + 4*6],
    [5*1 + 6*2, 5*3 + 6*4, 5*5 + 6*6],
]

# matrix transpose (T)
# operation which flips a matrix over its main diagonal
# the indices of the rows and columns are switched

a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
# T into:
a = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
]

# -----

a = [
    [1, 2],
    [3, 4],
    [5, 6],
]
# T into:
a = [
    [1, 3, 5],
    [2, 4, 6],
]

# -----

a = [1, 2, 3]
# T into:
a = [1, 2, 3]

# running a transpose of a transpose returns the same original one