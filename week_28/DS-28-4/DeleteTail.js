const deleteTail = (head) => {
  if (head.next === null) {
    head = null;
    return head;
  }
  let tail = head;

  while (tail.next.next) {
    tail = tail.next;
  }
  tail.next = null;

  return head;
};


