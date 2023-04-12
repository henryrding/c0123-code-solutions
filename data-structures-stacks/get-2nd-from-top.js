export default function get2ndFromTop(stack) {
  let secondFromTop;
  if (stack.peek() !== undefined) {
    const temp = stack.pop();
    secondFromTop = stack.peek();
    stack.push(temp);
  }
  return secondFromTop;
}
