function deleteNode(head, position) {
  if (position === 0) {
    head = head.next;
    return head;
  } else {
    let current = head,
      i = 0,
      previous;
    while (i < position) {
      previous = current;
      current = current.next;
      i++;
    }

    previous.next = current.next;

    return head;
  }
}
