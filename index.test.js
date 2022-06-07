const { Stack } = require("./index.js");
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
