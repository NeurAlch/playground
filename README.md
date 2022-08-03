# playground

![tests](https://github.com/PabloRosales/playground/actions/workflows/node.js.yml/badge.svg)

A playground for things I'm learning/practicing.

Most code in TypeScript is done mostly using TDD. Python is done mostly with Jupyter notebooks.

![Screenshot](./screenshot.png)

Examples:

* [Algorithms](./src/tests/unit-tests/algos)
* Data Structures
  * [JS Array](./src/tests/unit-tests/data-structures/arrays.test.ts)
    * Sort
      * Without a sort function it will convert elements into strings, 80 comes before 9
      * The sorting algorithm is stable
        * Elements that are already sorted, will remain in the same position
      * Behaviour might not be well-defined unless
        * purity, stability, reflexivity, symmetry, and transitivity rules are respected
          * \> 0	sort a after b
          *  < 0	sort a before b
          *  === 0	keep original order of a and b
        * `const compare = (a, b) => a > b ? -1 : 0;`
          * Will have different results in V8 and SpiderMonkey
  * [JS Array (big-o)](./src/tests/unit-tests/data-structures/array.big-o.test.ts)
  * [JS Map](./src/tests/unit-tests/data-structures/map.test.ts)
  * [JS Set](./src/tests/unit-tests/data-structures/set.test.ts)
  * [Singly Linked List](./src/tests/unit-tests/data-structures/singly-linked-list.test.ts)
    * Benefits of a sorted list are lost on a sorted SLL
  * [Double Linked List](./src/tests/unit-tests/data-structures/double-linked-list.test.ts)
    * Each node can be anywhere in memory, no need to resize an array
    * We don't need to shift position of elements when inserting or deleting like in an array
  * [Queue using Double Linked List](./src/tests/unit-tests/data-structures/queue-with-dll.test.ts)
    * Using a DLL allows us to do operations O(1) for enqueue and dequeue
      * Faster than using a JS Array or an SLL
* Design Patterns
* Machine Learning
  * [New](./src/ml)
* Math
* TypeScript
* Python
  * [SEO Jupyter notebooks](archive/pre-2022/seo/notebooks)
* Archive
  * [Old](./archive)
