export default function postpone(queue) {
  // if (queue.peek() !== undefined) {
  //   const temp = queue.dequeue();
  //   queue.enqueue(temp);
  // }
  queue.peek() !== undefined && queue.enqueue(queue.dequeue());
}
