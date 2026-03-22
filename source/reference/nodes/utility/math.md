---
title: Math
uid: math
order: 13
---

# Math

The Math node is a deceptively powerful node with a very simple interface. It is essentially a blank canvas for you to create any kind of mathematical functions or even complex algorithms.

![](/.data/assets/math_node.png)

The Math node can work standalone as a Generator, but can also accept up to 3 inputs. These inputs can be accessed as `a`,`b`,`c` respectively. Note, those are pre-defined variables and can't be used for any other purposes except to access data from the port.

You can also access coordinates per-pixel using `x` and `y` .

### Syntax and Functions

The Math node can use the following.

```basic
// Mathematical operators
+, -, *, /, %, ^

// Equalities & Inequalities 
=, ==, <>, !=, <, <=, >, >=

// Assignment 
:=, +=, -=, *=, /=, %=

// Logical operators 
and, nand, nor, not, or, xor, xnor, mand, mor

// Functions
abs, avg, ceil, clamp, erf, erfc, exp, expm1, floor, frac,
hypot, iclamp, inrange, log, log10, log1p, log2, logn, max,
min, mod, mul, ncdf, pow, root, round, roundn, sgn, sqrt,
sum, swap, trunc, equal, not_equal

// Trigonometry
acos, acosh, asin, asinh, atan, atan2, atanh, cos, cosh,
cot, csc, sec, sin, sinc, sinh, tan, tanh, deg2rad,
rad2deg, deg2grad, grad2deg

// Control structures
if-then-else, ternary conditional, switch case, return-statement

// Loop structures
while loop, for loop, repeat until loop, break, continue

// Expression local variables, vectors and strings

// User defined variables, vectors, strings, constants and function support
```

## Samples Programs

### Julia Set
```
var zr := 1.5 * x;
var zi := 1.5 * y;
var cr := -0.48;
var ci := 0.6;
var iteration := 0;
var iterations := 64;
var temp := 0;

while (iteration < iterations and (zr^2 + zi^2) <= 4)
{
    temp := zr^2 - zi^2;
    zi := 2 * zr * zi;
    zr := temp + cr;
    zi := zi + ci;
    iteration := iteration + 1;
}

(iteration / iterations)^0.4
```
![](/.data/ref/Math/math_example_julia.png)

### Radial Wave Pattern
```
sin(10 * sqrt(x*x + y*y)) * exp(-sqrt(x*x + y*y))
```
![](/.data/ref/Math/math_example_radialwaves.png)

### Spiral Vortex
```
cos(4 * atan2(y, x) + sqrt(x*x + y*y)) * exp(-sqrt(x*x + y*y))
```
![](/.data/ref/Math/math_example_spiralvortex.png)

### Checkerboard Distortion
```
sin(5*x) * cos(5*y) * (1 - sqrt(x*x + y*y))
```
![](/.data/ref/Math/math_example_checker.png)

### Flower-Like Shape
```
(1 - sqrt(x*x + y*y)) * cos(6 * atan2(y, x))
```
![](/.data/ref/Math/math_example_flower.png)

### Colorized Checks
```
(sin(10*x) * sin(10*y)) / (1 + x*x + y*y)
```
![](/.data/ref/Math/math_example_fractalcheck.png)


# Properties
