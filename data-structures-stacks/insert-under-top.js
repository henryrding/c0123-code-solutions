export default function insertUnderTop(stack, value) {
  if (stack.peek() !== undefined) {
    const temp = stack.pop();
    stack.push(value);
    stack.push(temp);
  }
}
