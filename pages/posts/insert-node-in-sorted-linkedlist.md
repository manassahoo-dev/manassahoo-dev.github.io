## Given a linked list which is sorted, how will you insert in sorted way

### Approach

1. If Linked list is empty then make the node as head and return it.
2. If the value of the node to be inserted is smaller than the value of the head node, then insert the node
   at the start and make it head.
3. In a loop, find the appropriate node after
   which the input node (let 9) is to be inserted.
   To find the appropriate node start from the head,
   keep moving until you reach a node GN (10 in
   the below diagram) who's value is greater than
   the input node. The node just before GN is the
   appropriate node (7).
4. Insert the node (9) after the appropriate node
   (7) found in step 3.

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
