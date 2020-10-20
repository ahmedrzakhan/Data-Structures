function insertNodeAtHead(head, data) {
  let newNode = new SinglyLinkedListNode(data);
  // console.log("newNode", newNode);

  newNode.next = head;
  console.log("newNode.next", newNode.next);

  head = newNode;

  return head;
}
