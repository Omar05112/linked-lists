import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.heade = null;
  }

  append(value) {
    if (this.heade === null) {
      let newNode = new Node(value);
      newNode.nextNode = this.heade;
      this.heade = newNode;
    } else {
      let tmp = this.heade;
      while (tmp.nextNode !== null) tmp = tmp.nextNode;
      tmp.nextNode = new Node(value);
    }
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.nextNode = this.heade;
    this.heade = newNode;
  }

  size() {
    if (this.heade === null) return 0;
    else {
      let i = 1;
      let tmp = this.heade;
      while (tmp.nextNode !== null) {
        i++;
        tmp = tmp.nextNode;
      }
      return i;
    }
  }

  head() {
    if (this.heade === null) return undefined;
    else {
      let tmp = this.heade;
      return tmp;
    }
  }

  tail() {
    if (this.heade === null) return undefined;
    else {
      let tmp = this.heade;
      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
      }
      return tmp;
    }
  }

  at(index) {
    if (this.heade === null) return undefined;

    let tmp = this.heade;
    for (let i = 0; i <= index; i++) {
      if (i === index) break;
      tmp = tmp.nextNode;
      if (tmp === null) return undefined;
    }

    return tmp.value;
  }

  pop() {
    if (this.heade === null) return undefined;
    let prev = this.heade;
    this.heade = this.heade.nextNode;
    return prev.value;
  }

  contains(value) {
    if (this.heade === null) return undefined;

    let tmp = this.heade;
    while (tmp !== null && tmp.value !== value) {
      tmp = tmp.nextNode;
    }
    if (tmp === null) return false;

    if (tmp.value == value) return true;
    else return false;
  }

  findIndex(value) {
    if (this.heade === null) return undefined;
    let i = 0;
    let tmp = this.heade;
    while (tmp !== null && tmp.value !== value) {
      i++;
      tmp = tmp.nextNode;
    }
    if (tmp === null) return -1;
    else return i;
  }

  toString() {
    if (this.heade === null) return "";
    let string = "";

    let tmp = this.heade;
    while (tmp !== null) {
      string += `( ${tmp.value} ) -> `;
      tmp = tmp.nextNode;
    }
    if (tmp === null) string += "null";

    return string;
  }
}
