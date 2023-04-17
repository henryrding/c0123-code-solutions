export default function swapFront(list) {
  if (list.next !== null) {
    const restOfList = list.next.next;
    const newHeadlist = list.next;
    newHeadlist.next = list;
    list.next = restOfList;
    return newHeadlist;
  }
  return list;
}
