/* eslint-disable no-unused-vars -- Remove me */
import LinkedList from './lib/linked-list';

export default function insertNext(list, value) {
  const node = new LinkedList(value);
  node.next = list.next;
  list.next = node;
}
