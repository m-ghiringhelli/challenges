const { Stack, Queue, reverse } = require("./index.js");
describe("Stack Class", () => {
  it("#push should add a new item to the stack ", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });
  // add more tests here...
  it('#pop should return the last item in the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();
    expect(stack.peek()).toEqual(1);
  })
});

describe("Que Class", () => {
  it("enqueue should add a new item to the queue ", () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue[0]).toEqual(1);
  });
  // add more tests here...
  // it('#pop should return the last item in the stack', () => {
  //   const stack = new Queue();
  //   stack.push(1);
  //   stack.push(2);
  //   stack.pop();
  //   expect(stack.peek()).toEqual(1);
  // })
});

describe("#reverse", () => {
  it("should reverse an array", () => {
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
  });
});