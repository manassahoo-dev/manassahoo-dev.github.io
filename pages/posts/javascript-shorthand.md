---
title: JavaScript shorthand tips and tricks
date: 2023/02/02
description: JavaScript shorthand tips and tricks that will save your time
tag: JavaScript
author: Manas Sahoo
---

1. Declaring variables

```javascript
//Longhand
let x
let y = 20

//Shorthand
let x,
  y = 20
```

2. Assigning values to multiple variables
   We can assign values to multiple variables in one line with array destructuring.

```javascript
//Longhand
let a, b, c
a = 5
b = 8
c = 12

//Shorthand
let [a, b, c] = [5, 8, 12]
```
