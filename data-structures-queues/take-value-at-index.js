export default function takeValueAtIndex(queue, index) {
  // if (queue.peek() === undefined) {
  //   return undefined;
  // } else {
  //   let i = 0;
  //   while (i < index) {
  //     queue.enqueue(queue.dequeue());
  //     i++;
  //   }
  //   return queue.dequeue();
  // }
  if (queue.peek() !== undefined) {
    for (let i = 0; i < index; i++) {
      queue.enqueue(queue.dequeue());
    }
    return queue.dequeue();
  }
}
