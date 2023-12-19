// Node
function node(data = null, nextNode = null) {
  return { data, nextNode };
}

// Linked List 
function linkedList() {
  let headNode = null;
  let tailNode = null;

  const append = (value) => {
    const endNode = node(value);

    if (headNode === null) {
      headNode = endNode;
      tailNode = endNode;
    } else {
      tailNode.nextNode = endNode;
      tailNode = endNode;
    }
  };

  const prepend = (value) => {
    const startNode = node(value);

    if (headNode === null) {
      headNode = startNode;
    } else {
      startNode.nextNode = headNode;
      headNode = startNode;
    }
  };

  const size = () => {
    let currentNode = headNode;
    let result = 0;

    while (currentNode !== null) {
      result += 1;
      currentNode = currentNode.nextNode;
    }

    return result;
  };

  const head = () => {
    if (headNode === null) {
      return null;
    } else {
      return headNode.data;
    }
  };

  const tail = () => {
    if (tailNode === null) {
      return null;
    } else {
      return tailNode.data;
    }
  };

  const nodeAtIndex = (index) => {
    let currentNode = headNode;

    if (index < 0) {
      return `Negative index is not valid.`;
    }

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
      if (currentNode === null) {
        return `The index is beyond the list's length.`;
      }
    }

    return currentNode.data;
  };

  const pop = () => {
    if (headNode === null) {
      return null;
    }

    const poppedValue = tailNode.data;

    if (headNode.nextNode === null) {
      headNode = null;
      tailNode = null;
      return `${poppedValue} removed.`;
    }

    let currentNode = headNode;
    while (currentNode.nextNode !== tailNode) {
      currentNode = currentNode.nextNode;
    }

    currentNode.nextNode = null;
    tailNode = currentNode;
    return `${poppedValue} removed.`
  };

  const contains = (value) => {
    if (headNode === null) {
      return false;
    }

    let currentNode = headNode;

    while (currentNode !== null) {
      if (currentNode.data === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }

    return false;
  };

  const find = (value) => {
    if (headNode === null) {
      return null;
    }

    let currentNode = headNode;
    let index = 0;

    while (currentNode !== null) {
      if (currentNode.data === value) {
        return index;
      }
      index += 1;
      currentNode = currentNode.nextNode;
    }

    return null;
  };

  const toString = () => {
    let currentNode = headNode;
    let result = '';

    while (currentNode !== null) {
      result += `( ${currentNode.data} ) -> `;
      currentNode = currentNode.nextNode;
    }

    result += 'null';
    return result;
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    nodeAtIndex,
    pop,
    contains,
    find,
    toString,
  }
}

let myList = linkedList();

myList.append(10);
myList.append(20);
myList.append(30);
myList.append(40);

let size = myList.size();
let head = myList.head();
let tail = myList.tail();
let nodeAtIndex = myList.nodeAtIndex(3);
let pop = myList.pop();
let string = myList.toString();
let contains = myList.contains(20);
let find = myList.find(40);

console.log(size);
console.log(head);
console.log(tail);
console.log(nodeAtIndex);
console.log(string);
console.log(pop);
console.log(contains);
console.log(find);
