export default function get2ndFromTop(stack) {
  let temp;
  let secondFromTop;
  if (stack.peek() !== undefined) {
    temp = stack.pop();
    secondFromTop = stack.peek();
    stack.push(temp);
  }
  return secondFromTop;
}
