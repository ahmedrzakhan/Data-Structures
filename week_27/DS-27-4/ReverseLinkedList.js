function reverse(head) {
  let current = head,
    before = null,
    after = null;

  while (current !== null) {
    after = current.next;
    current.next = before;
    before = current;
    current = after;
  }

  head = before;

  return head;
}
