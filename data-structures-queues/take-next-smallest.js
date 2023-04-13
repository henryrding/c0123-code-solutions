export default function takeNextSmallest(numberQueue) {
  if (numberQueue.peek() !== undefined) {
    let first = numberQueue.dequeue();
    if (numberQueue.peek() !== undefined) {
      let second = numberQueue.peek();
      while (first > second) {
        numberQueue.enqueue(first);
        first = numberQueue.dequeue();
        second = numberQueue.peek();
      }
    }
    return first;
  }
}
