class Stack {
  #list = [];

  //methods
  push(item) {
    this.#list.push(item);
  }

  pop(item) {
    const poppedItem = this.#list.pop(item);

    if (!poppedItem) {
      return null;
    } else {
      return poppedItem;
    }
  }
  
  peek(item) {
    return this.#list[this.#list.length - 1];
  }
}

const stack = new Stack();
stack.push('fox');
stack.push('goose');
stack.push('lizard');
console.log(stack.pop()); // 'lizard'
console.log(stack.peek()); // 'goose'
console.log(stack.pop()); // 'goose'
stack.push('llama');
console.log(stack.pop()); // 'llama'
console.log(stack.peek()); // 'fox'
console.log(stack.pop()); // 'fox'
console.log(stack.pop()); // null

class Queue {}

module.exports = { Stack, Queue };
