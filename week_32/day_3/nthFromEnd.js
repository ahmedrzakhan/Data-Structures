const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

function nth_node(head, n) {
  let back = head,
    front = head;

  for (let i = 0; i < n; i++) {
    front = front.next;
  }

  while (front.next) {
    front = front.next;
    back = back.next;
  }

  return back.next.data;
}
