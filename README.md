# Playground

![tests](https://github.com/PabloRosales/playground/actions/workflows/node.js.yml/badge.svg)

A playground for things I'm learning/practicing.

Code is done in TypeScript. Includes tests.

![Screenshot](./screenshot.png)

## Code & Notes

* [Algorithms](src/algos)
  * Useful concepts for solving problems
    * Pointers to go through an array/data structure
    * Sorting before we start
    * Hash maps to store partial results
    * Insert in reverse order on a new array size n, when creating a sorted array
* Data Structures
  * [JS Array](src/data-structures/arrays.test.ts) [(big-o)](src/data-structures/array.big-o.test.ts)
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
  * [JS Map](src/data-structures/map.test.ts)
  * [JS Set](src/data-structures/set.test.ts)
  * [Stack using Array](src/data-structures/stack.test.ts)
  * [Singly Linked List](src/data-structures/singly-linked-list.test.ts)
    * Benefits of a sorted list are lost on a sorted SLL
  * [Double Linked List](src/data-structures/double-linked-list.test.ts)
    * Each node can be anywhere in memory, no need to resize an array
    * We don't need to shift position of elements when inserting or deleting like in an array
  * [Queue using Double Linked List](src/data-structures/queue-with-dll.test.ts)
    * Using a DLL allows us to do operations O(1) for enqueue and dequeue
      * Faster than using a JS Array or an SLL
  * [Graph](src/data-structures/undirected-graph.test.ts)
    * non-linear data structure
    * abstract model of a network
    * nodes (vertices) connected by edges (can be directed or undirected)
    * vertices connected by an edge are called adjacent vertices
    * a degree of a vertex consists of the number of adjacent vertices
    * a path is a sequence of consecutive adjacent vertices
      * a simple path does not contain repeated vertices
      * a cycle is a simple path, except for the last vertex
    * a graph is acyclic if it does not have cycles
    * a graph is connected if there is a path between every pair of vertices
    * can be undirected, where edges do not have a direction
    * can be directed (digraph), where edges have a direction
    * is strongly connected if there is a path in both directions between every pair of vertices
    * can be weighted, where edges have a value or unweighted, where edges have no value
    * can be represented as adjacency matrix
      * when not strongly connected, the matrix is sparse (sparse graph) with many 0s
      * not flexible (number of vertices is fixed)
      * wastes space (O(n^2))
    * can be represented as an adjacency list (we are using this one)
      * flexible (number of vertices is not fixed)
      * uses less space (O(n + m))
      * can be implemented as an array of linked lists
      * can be implemented as a hash table of linked lists
    * can be represented with an incidence matrix
      * usually to save space and memory when there are more edges than vertices
* [Interview Questions](src/interview-questions)
  * See the history of the file to see the different solutions (or partial solutions) I've tried
* Design Patterns
* Math
* TypeScript
* [Archive](https://github.com/PabloRosales/playground/tree/a34ae4ab7b077816caeb972e93844c05bb6f2ef8/archive/pre-2022)
  * Includes old code for some AI/ML, JS, data structures, math, and SEO python notebooks
