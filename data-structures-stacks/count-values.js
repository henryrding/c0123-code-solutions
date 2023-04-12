export default function countValues(stack) {
  let number = 0;
  while (stack.peek() !== undefined) {
    stack.pop();
    number++;
  }
  return number;
}
