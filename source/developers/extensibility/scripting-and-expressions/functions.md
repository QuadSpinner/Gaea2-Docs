---
title: Allowed Functions
uid: functions
description: The following functions, operators, and facilities are usable in the math node as well as expressions.
---

The following functions, operators, and facilities are usable in the @math node as well as @expressions.

```
Mathematical operators (+, -, *, /, %, ^)

Equalities & Inequalities (=, ==, <>, !=, <, <=, >, >=)

Assignment (:=, +=, -=, *=, /=, %=)

Logical operators (and, nand, nor, not, or, xor, xnor, mand, mor)

Functions (abs, avg, ceil, clamp, erf, erfc, exp, expm1, floor, frac, hypot, iclamp, inrange, log, log10, log1p, log2, logn, max, min, mod, mul, ncdf, pow, root, round, roundn, sgn, sqrt, sum, swap, trunc, equal, not_equal)

Trigonometry (acos, acosh, asin, asinh, atan, atan2, atanh, cos, cosh, cot, csc, sec, sin, sinc, sinh, tan, tanh, deg2rad, rad2deg, deg2grad, grad2deg)

Control structures (if-then-else, ternary conditional, switch case, return-statement)

Loop structures (while loop, for loop, repeat until loop, break, continue)

Optimization of expressions (constant folding, strength reduction, operator coupling, special functions and dead code elimination)

String operations (equalities, inequalities, logical operators, concatenation and sub-ranges)

Expression local variables, vectors and strings

User defined variables, vectors, strings, constants and function support

Multivariate function composition

Multiple sequence point and sub expression support

Runtime checks (vector bounds, string bounds, loop iterations/execution-time bounds, assert statements)

Compile-time checks (function parameter type checking, compilation and evaluation stackoverflow checks, compilation running time)

Numerical integration and differentiation

Vector Processing: BLAS-L1 (axpy, axpby, axpb), all/any-true/false, assign, count, reverse, rotate-left/right, shift-left/right, sort, nth_element, iota, sum, kahan-sum, dot-product, copy, diff, thresholding

File-IO package (routines include: open, close, read, write, getline, support for binary and text modes)
```