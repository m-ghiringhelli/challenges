class Stack {
  #list = [];

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
module.exports = { Stack, Queue };



