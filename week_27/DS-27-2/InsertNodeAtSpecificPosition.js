function insertNodeAtPosition(head, data, position) {
  let newNode = new SinglyLinkedListNode(data);

  let current = head,
    i = 0;

  while (i < position - 1) {
    console.log(i);

    current = current.next;
    i++;
  }
  let afterCurrent = current.next;
  current.next = newNode;
  newNode.next = afterCurrent;

  return head;
}

