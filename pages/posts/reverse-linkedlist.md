## Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

```java
class Solution {
  public ListNode reverseList(ListNode head) {
    ListNode prev = null, curr = head, next;

    while (curr != null) {
      next = curr.next; //to store next Node which is being DeLinked
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    return prev;
  }
}
```
