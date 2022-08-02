# playground

![tests](https://github.com/PabloRosales/playground/actions/workflows/node.js.yml/badge.svg)

A playground for things I'm learning/practicing.

Most code in TypeScript is done mostly using TDD. Python is done mostly with Jupyter notebooks.

![Screenshot](./screenshot.png)

Examples:

* Algorithms
  * [fibonacci](./src/tests/unit-tests/algos/fibonacci.test.ts)
  * [binarySearch](./src/tests/unit-tests/algos/binarySearch.test.ts)
  * [insertSorted](./src/tests/unit-tests/algos/insertSorted.test.ts)
  * [largestValue](./src/tests/unit-tests/algos/largest-value.test.ts)
  * [maxIndex](./src/tests/unit-tests/algos/maxIndex.test.ts)
  * [seqSearch](./src/tests/unit-tests/algos/seqSearch.test.ts)
  * [sparseMatrix](./src/tests/unit-tests/algos/sparseMatrix.test.ts)
  * mergeSortLinkedLists (_pending_)
* Data Structures
  * [JS Array](./src/tests/unit-tests/data-structures/arrays.test.ts)
  * [JS Array (big-o)](./src/tests/unit-tests/data-structures/array.big-o.test.ts)
  * [JS Map](./src/tests/unit-tests/data-structures/map.test.ts)
  * [JS Set](./src/tests/unit-tests/data-structures/set.test.ts)
  * [Singly Linked List](./src/tests/unit-tests/data-structures/singly-linked-list.test.ts)
    * Benefits of a sorted list are lost on a sorted SLL
  * [Double Linked List](./src/tests/unit-tests/data-structures/double-linked-list.test.ts)
  * [Queue using Double Linked List](./src/tests/unit-tests/data-structures/queue-with-dll.test.ts)
    * Using a DLL allows us to do operations O(1) for enqueue and dequeue
      * Faster than using a JS Array or an SLL
      * Each node can be anywhere in memory
      * We don't need to move resize the array or go through each element
* Design Patterns
* Machine Learning
  * [New](./src/ml)
* Math
* TypeScript
* Python
  * [SEO Jupyter notebooks](archive/pre-2022/seo/notebooks)
* Archive
  * [Old](./archive)
