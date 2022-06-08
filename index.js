class Stack {
  #list = [];
  constructor(initialList) {
    if (initialList) {
      this.#list = initialList;
    }
  }
  //methods
  push(item) {
    this.#list.push(item);
  }

  pop(item) {
    const poppedItem = this.#list.pop(item);

    return !poppedItem ? null : poppedItem;
  }
  
  peek(item) {
    return this.#list[this.#list.length - 1];
  }

  get readableList() {
    return this.#list;
  }
}

class Queue {
  #list = [];

  enqueue(item) {
    this.#list.push(item);
  }

  dequeue() {
    const dequeuedItem = this.#list.shift();

    return !dequeuedItem ? null : dequeuedItem;
  }


  hasNext() {
   
    return (this.#list.length === 0) ? false : true;
  }
}

const reverse = (stack1) => {
  const stack2 = new Stack();
  
  while (stack1.length > 0) {
    const item = stack1.pop();
    stack2.push(item);
  }
  return stack2.readableList;
}

const stack = new Stack([1, 2, 3]);
console.log(stack);

module.exports = { Stack, Queue, reverse };



