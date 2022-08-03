## Asymptotic Complexity

Asymptotic notation describes the behavior of the time or space complexity.

A unit can be an elementary operation.

The *unit terms* of `3n^2 + 6n log n + 7n + 5` are `n^2`, `n log n`, `n`, and `1`. The biggest term is `n^2`,
so its asymptotic complexity is `O(n^2)`.

In `f(n) = O(g(n))` the equal sign means `is` and not `equal`.

* `O` notation provide an asymptotic upper bound
  * Upper Bound (<=)
* `Ω` notation provides asymptotic lower bound
  * Lower Bound (>=)
* `Θ` is the best of all the worst case times that the algorithm can take
  * Tight Bound (==)
* `o` *little oh* notation describes a strict upper bound on the asymptotic growth rate of the function `f`
  * Often used in step-count analyses

The omega and theta notations are sometimes used to describe the asymptotic complexity of a program.

For [sequential search](./src/tests/algos/seqSearch.test.ts) the best-case asymptotic complexity is `Θ(1)`
and the worst-case/average complexity is `Θ(n)`. We can also say is `Ω(1)` and `O(n)` because 1 is a lower bound (in an asymptotic sense)
and n is an upper bound.

### Big O Notation

From fastest to slowest:

* Constant: `O(1)`
* Logarithmic: `O(log(n))`
* Linear: `O(n)`
* Log-linear: `O(n log(n))`
* Quadratic: `O(n^2)`
* Cubic: `O(n^3)`
* Exponential: `O(2^n)`
* Factorial: `O(n!)`

### Examples

* `O(n + m)`
  * Example: A function that traverses a list with `n` elements, and a string with `m` characters.
* `O(n)`
  * Example: An function that traverses a list with `n` elements, like a `for` loop or `map`.
* `O(1)`
  * Example: `1 + a[0]` a single operation (expression)
* `O(n^2)`
  * Example: A function that creates pairs of numbers from a list. `f([1, 2, 3]) => [[1, 1], [1, 2]..., [2, 1]...]`
