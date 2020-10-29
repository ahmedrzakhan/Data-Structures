const deleteTailDLL = (head) => {
  if (!head.next) return null;

  let tail = head;

  while (tail.next.next) {
    tail = tail.next;
  }
  tail.next.next = null;

  return head;
};
