function mergeLists(head1, head2) {
  let res = new SinglyLinkedListNode(-1);
  let temp = res;

  while (head1 && head2) {
    if (head1.data < head2.data) {
      temp.next = head1;
      temp = temp.next;
      head1 = head1.next;
    } else {
      temp.next = head2;
      temp = temp.next;
      head2 = head2.next;
    }
  }

  while (head1) {
    temp.next = head1;
    temp = temp.next;
    head1 = head1.next;
  }

  while (head2) {
    temp.next = head2;
    temp = temp.next;
    head2 = head2.next;
  }

  return res.next;
}
