export default function getTail(list) {
  let currentList = list;
  while (currentList.next !== null) {
    currentList = currentList.next;
  }
  return currentList.data;
}
