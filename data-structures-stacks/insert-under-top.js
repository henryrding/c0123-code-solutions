export default function insertUnderTop(stack, value) {
  let temp;
  if (stack.peek() !== undefined) {
    temp = stack.pop();
    stack.push(value);
    stack.push(temp);
  }
}
