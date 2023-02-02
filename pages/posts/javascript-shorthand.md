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

3. The Ternary operator
   We can save 5 lines of code here with the ternary (conditional) operator.

```javascript
let marks = 26

//Longhand
let result
if (marks >= 30) {
  result = 'Pass'
} else {
  result = 'Fail'
}

//Shorthand
let result = marks >= 30 ? 'Pass' : 'Fail'
```

4. Assigning a default value
   We can use OR(||) short circuit evaluation or Nullish coalescing operator (??) to assign a default value to a variable in case the expected value is found falsy.

```javascript
//Longhand
let imagePath
let path = getImagePath()
if (path !== null && path !== undefined && path !== '') {
  imagePath = path
} else {
  imagePath = 'default.jpg'
}

//Shorthand 1
let imagePath = getImagePath() || 'default.jpg'

//Shorthand 2
let imagePath = getImagePath() ?? 'default.jpg'
```
