export default function countValues(stack) {
  let number = 0;
  while (stack.pop() !== undefined) {
    number++;
  }
  return number;
}
