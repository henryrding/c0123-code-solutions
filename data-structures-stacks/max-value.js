export default function maxValue(stack) {
  let maxValue = -Infinity;
  while (stack.peek() !== undefined) {
    const currentValue = stack.pop();
    maxValue = currentValue > maxValue ? currentValue : maxValue;
  }
  return maxValue;
}
