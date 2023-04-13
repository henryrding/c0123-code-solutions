export default function postpone(queue) {
  if (queue.peek() !== undefined) {
    queue.enqueue(queue.dequeue());
  }
  // queue.peek() !== undefined && queue.enqueue(queue.dequeue());
}
