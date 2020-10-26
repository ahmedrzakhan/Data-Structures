const rotateRight = (head, k) => {
  if (!k || !head || !head.next) return head;
  let len = 1,
    tail = head;
  while (tail.next) {
    tail = tail.next;
    len++;
  }
  tail.next = head;
  k %= len;

  for (let i = 0; i < len - k; i++) {
    tail = tail.next;
  }

  head = tail.next;
  tail.next = null;
  return head;
};
