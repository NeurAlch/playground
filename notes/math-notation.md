# Math Notation & Review

* **scalar** italic letter → $\textit{i}$

* **vector** bolded letter → $\textbf{w}$
    * each scalar value in a vector is an *attribute*

    * $\textbf{w}^\textit{i}$ attribute of a vector
      * $w_\textit{i}$ here *i* is the index to denote a specific dimension of the vector
        * position of attribute in vector

    * $\textbf{x}_\textit{l},_\textit{u}^\textit{j}$ means: input feature *j* of unit *u* in layer *l*

    * a *vector* is ordered, a *set* is unordered and unique

* **set** calligraphic capital letter → $\mathcal{S}$
  * a finite set is → $\{1,2,3\}$ 
  * or infinite, depending on *n* → $\{x_1,x_2...x_n\}$
  * $[a,b]$ includes both *a* and *b*
  * $(a,b)$ does not include *a* or *b*
  * $[a,b)$ includes *a* but not *b*
  * $[0,1]$ includes $0, 0.001, 0.25 ... 1.0$
  * $\mathbb{R}$ is the set of all real numbers from $[-∞,+∞]$
  * When an element $\textit{x}$ belongs to set $\mathcal{S}$
    * $\textit{x} \in \mathcal{S}$
  * An intersection
    * $\mathcal{S} \leftarrow \mathcal{S}_1 \cap \mathcal{S}_2$
    * $\{1, 8\} \leftarrow \{1,3,5,8\} \cap \{1,8,4\} $
  * An union
    * $\mathcal{S} \leftarrow \mathcal{S}_1 \cup \mathcal{S}_2$
    * $\{1,3,4,5,8\} \leftarrow \{1,3,5,8\} \cup \{1,8,4\} $
  * A derived set creation operator
    * $\mathcal{S}' \leftarrow \{x^2|x\in \mathcal{S},x>3\}$
  * Number of elements in $\mathcal{S}$
    * $|\mathcal{S}|$
* **sum** with sigma notation $\sum$
    * $\displaystyle\sum_{i=0}^n \stackrel{\text{\tiny def}}{=} x_1+x_2...+x_n$

* **product** with uppercase pi $\prod$
  * $\displaystyle\prod_{i=1}^n x_i \stackrel{\text{\tiny def}}{=} x_1x_2x_3...x_n $
* *sum/sub of vectors*
  * remember a vector is in bold $\textbf{x}$
  * $\textbf{x}+\textbf{z} \rightarrow [x_1+z_1,x_2+z_2...x_n+z_n]$
  * $\textbf{x}-\textbf{z} \rightarrow [x_1-z_1,x_2-z_2...x_n-z_n]$
* **vector * scalar**
  * $\textbf{x}c \stackrel{\text{\tiny def}}{=} [cx_1,cx_2...cx_n]$

* **dot product** of two vectors equals a scalar
  * must be of the same dimensions
  * $\displaystyle\textbf{w}\textbf{x} \stackrel{\text{\tiny def}}{=} \sum_{i=1}^n w_ix_i$
