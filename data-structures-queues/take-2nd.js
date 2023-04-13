export default function take2nd(queue) {
  if (queue.peek() !== undefined) {
    queue.enqueue(queue.dequeue());
    return queue.dequeue();
  }
}
