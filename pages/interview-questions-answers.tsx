import React from 'react';

function InterviewQnA() {
  const html = `<div class="content__u3I1 question-content__JfgR"><div><p>The <b>Fibonacci numbers</b>, commonly denoted <code>F(n)</code> form a sequence, called the <b>Fibonacci sequence</b>, such that each number is the sum of the two preceding ones, starting from <code>0</code> and <code>1</code>. That is,</p>

  <pre>F(0) = 0, F(1) = 1
  F(n) = F(n - 1) + F(n - 2), for n &gt; 1.</pre>
  
  <p>Given <code>n</code>, calculate <code>F(n)</code>.</p>
  
  <p><strong class="example">Example 1:</strong></p>
  
  <pre><strong>Input:</strong> n = 2
  <strong>Output:</strong> 1
  <strong>Explanation:</strong> F(2) = F(1) + F(0) = 1 + 0 = 1.</pre>
  
  <p><strong class="example">Example 2:</strong></p>
  
  <pre><strong>Input:</strong> n = 3
  <strong>Output:</strong> 2
  <strong>Explanation:</strong> F(3) = F(2) + F(1) = 1 + 1 = 2.</pre>
  
  <p><strong class="example">Example 3:</strong></p>
  
  <pre><strong>Input:</strong> n = 4
  <strong>Output:</strong> 3
  <strong>Explanation:</strong> F(4) = F(3) + F(2) = 2 + 1 = 3.</pre>
  
  <p><strong>Constraints:</strong></p>
  
  <ul>
    <li><code>0 &lt;= n &lt;= 30</code></li>
  </ul>
  </div></div>`;
  return (
    <div>
      <li>JavaScript</li>
      <li>TypeScript</li>
      <li>React.js</li>
      <li>Angular</li>
      <li>Html</li>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      https://leetcode.com/discuss/general-discussion/458695/dynamic-programming-patterns
    </div>
  );
}

export default InterviewQnA;
