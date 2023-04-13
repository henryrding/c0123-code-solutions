export default function includes(list, value) {
  let currentList = list;
  while (currentList.data !== value) {
    if (currentList.next === null) {
      return false;
    } else {
      currentList = currentList.next;
    }
  }
  return true;
}
