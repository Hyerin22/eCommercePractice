export function goToPage(p = 1, books = [], num = 10) {
  const lists = books.slice((p - 1) * num, p * num);

  // console.log(lists);
  return lists;
}
