export default function removeTail(list) {
  let currentList = list;
  while (currentList.next !== null) {
    if (currentList.next.next === null) {
      currentList.next = null;
    } else {
      currentList = currentList.next;
    }
  }
}
