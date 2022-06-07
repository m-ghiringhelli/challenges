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
const queue = new Queue();
queue.enqueue('fox');
queue.enqueue('goose');
queue.enqueue('lizard');
console.log(queue.dequeue()); // 'fox'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'goose'
queue.enqueue('llama');
console.log(queue.dequeue()); // 'lizard'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'llama'
console.log(queue.hasNext()); // false
console.log(queue.dequeue()); // null
module.exports = { Stack, Queue };



