function insertNodeAtTail(head, data) {
  let newNode = new SinglyLinkedListNode(data);

  console.log(newNode);

  if (!head) {
    head = newNode;
    return head;
  } else {
    let tail = head;

    while (tail.next !== null) {
      tail = tail.next;
    }

    tail.next = newNode;

    return head;
  }
}
