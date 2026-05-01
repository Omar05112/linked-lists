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
}
