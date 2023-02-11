## Swap Nodes in Pairs

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

<img src='https://assets.leetcode.com/uploads/2020/10/03/swap_ex1.jpg'>

```java
class Solution {
  public ListNode swapPairs(ListNode head) {
    ListNode dummy = new ListNode(-1);

    dummy.next = head;
    ListNode prevNode = dummy, currNode = head;
    while (currNode != null && currNode.next != null) {
      ListNode firstNode = currNode;
      ListNode secondNode = currNode.next;

      prevNode.next = secondNode;
      firstNode.next = secondNode.next;
      secondNode.next = firstNode;

      prevNode = firstNode;
      currNode = firstNode.next;
    }

    return dummy.next;
  }
}
```
