export default function getLength(list) {
  let currentList = list;
  let length = 1;
  while (currentList.next !== null) {
    currentList = currentList.next;
    length++;
  }
  return length;
}
