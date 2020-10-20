class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  // constructor
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // methods
  // add
  add(element) {
    var node = new Node(element);
    // if linked list is empty
    if (!this.head) {
      this.head = node;
    } else {
      var current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  // insert(elem , index)
  insertAt(element, index) {
    // if index is greater than size or index is negative, or size is zero
    if (index > this.size || (index < 0 && this.size)) {
      return false;
    }

    var node = new Node(element);
    var current = this.head;
    var prev = null;
    var i = 0;
    if (index === 0) {
      node.next = current;
      this.head = node;
    } else {
      while (i < index) {
        prev = current;
        current = current.next;
        i++;
      }
      // insert at the index
      prev.next = node;
      // move to the inserted node
      prev = prev.next;
      // add the rest of the current to the inserted node
      prev.next = current;
      // increment size
      this.size++;
    }
  }

  // delete(elem)
  removeElement(element) {
    var current = this.head;
    var prev = null;

    while (current) {
      if (current.element === element) {
        if (prev === null) {
          // 1st index
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        console.log("removed element", element);
        return true;
      }

      prev = current;
      current = current.next;
    }
  }

  // is Empty
  isEmpty() {
    return this.size === 0 ? true : false;
  }

  // size
  sizeOfList() {
    return this.size;
  }

  // print
  printList() {
    var current = this.head;
    var index = 0;
    while (current) {
      // console.log(current)
      console.log("element", current.element, "index", index++);
      current = current.next;
    }
  }
}

var list = new LinkedList();
// console.log("isEmpty", list.isEmpty());
list.add(1);
list.add(2);
list.insertAt(5, 1);
list.removeElement(5);
// console.log(list);
list.printList();
console.log("size", list.sizeOfList());
// function Elem (name, score) {
//   this.name = name
//   this.score = score
// }

// const elem = new Elem("sudhir", 50)
// const node = new Node(elem)
// const node = new Node(5);
// console.log(node);
