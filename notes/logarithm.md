# Logarithm

<code>log<sub>b</sub>(<var>x</var>) = <var>y</var> iif <var>b</var><sup>y</sup> = <var>x</var></code>

In computer science (coding interviews) we always assume that the base is `2`, binary logarithm. In math the base is usually `10`.

<code>log<sub>2</sub>(<var>n</var>) = <var>y</var> iif <var>2</var><sup>y</sup> = <var>n</var></code>

Since `2` is assumed we just write:

<code>log(<var>n</var>) = <var>y</var> iif <var>2</var><sup>y</sup> = <var>n</var></code>

<code>log(1) = 0 since 2<sup>0</sup> = 1</code>


<code>2<sup>4</sup> = 2<sup>3</sup>*2</code>


On exponentiation, the more <var>y</var> increases, the more <var>n</var> increases.

<code>2<sup>y</sup> = <var>n</var></code>,
<code>2<sup>4</sup> = 16</code>,
<code>2<sup>20</sup> = >1M</code>,
<code>2<sup>30</sup> = >1B</code>

That means that for <code>log(<var>n</var>) = <var>y</var></code> as <var>n</var> increases, <var>y</var> increases by 1 (small numbers).

For this reason <code>O(log(<var>n</var>))</code> is better than <code>O(<var>n</var>)</code>.

[Binary search](../src/algos/binarySearch.ts) is an example of O(log(<var>n</var>))

![Big O Notation](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Comparison_computational_complexity.svg/1280px-Comparison_computational_complexity.svg.png)
