/* eslint-disable no-unused-vars */
import LinkedList from './lib/linked-list.js';

export default function append(list, value) {
  const node = new LinkedList(value);
  let currentList = list.next;
  while (currentList.next !== null) {
    currentList = currentList.next;
  }
  currentList.next = node;
}
