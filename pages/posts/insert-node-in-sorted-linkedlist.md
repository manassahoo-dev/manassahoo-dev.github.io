Given a linked list which is sorted, how will you insert in sorted way

```java
public class Solution{
    public Node insertSorted(Node head, int x){
        Node newNode = new Node(x);

        if(head == null || head.data > x){
            newNode.next = head;
            head = newNode;
            return head;
        }
        Node temp = head;
        while(temp.next != null && temp.next.data < x){
            temp = temp.next;
        }

        Node tempNext = temp.next;
        temp.next = newNode;
        newNode.next = tempNext;

        return head;
    }
}
```
