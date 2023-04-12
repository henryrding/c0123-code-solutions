export default function maxValue(stack) {
  let maxValue = -Infinity;
  let currentValue;
  while (stack.peek() !== undefined) {
    currentValue = stack.pop();
    maxValue = currentValue > maxValue ? currentValue : maxValue;
  }
  return maxValue;
}
