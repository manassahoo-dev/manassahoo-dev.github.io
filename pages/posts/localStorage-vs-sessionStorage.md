---
title: localStorage vs sessionStorage
date: 2023/01/10
description: localStorage vs sessionStorage
tag: JavaScript
author: Manas Sahoo
---

`localStorage` and `sessionStorage` are web APIs that allow you to store key-value pairs of data in the browser. However, there are some key differences between the two:

1. Persistence:
   `localStorage` data is persisted even after the browser is closed, whereas `sessionStorage` data is cleared when the browser is closed.

2. Scope:
   `localStorage` data is accessible to all windows and tabs of the same origin, whereas `sessionStorage` data is only accessible to the current window or tab.

3. Size:
   `localStorage` has a larger storage limit (typically around 5-10 MB) compared to `sessionStorage` (typically around 2-5 MB).

## When to use which one

- `localStorage` should be used when you want to store data that should be available even after the browser is closed, such as user preferences or login information.

- `sessionStorage` should be used when you want to store data that should only be available during the current browsing session, such as temporary data that is only needed while a user is actively interacting with your website.

- If you want to share the data between tabs or windows of the same browser, `localStorage` is the best option as the data stored in it will be available to all tabs and windows of the same origin.

- If you want to store the data that should be available only on the current tab or window, `sessionStorage` is the best option.

It's important to note that both `localStorage` and `sessionStorage` are vulnerable to cross-site scripting (XSS) attacks and should not be used to store sensitive information. Instead, sensitive information should be stored on the server and protected with proper security measures.
