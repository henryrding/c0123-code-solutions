var bookshelf = [
  {
    isbn: '978-1491929483',
    title: 'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett'
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson'
  },
  {
    isbn: '978-0692232699',
    title: 'Build APIs You Won\'t Hate: Everyone and their dog wants an API, so you should probably learn how to build them',
    author: 'Phil Sturgeon & Laura Bohill'
  }
];

console.log('bookshelf array:', bookshelf);
console.log('typeof bookshelf:', typeof bookshelf);

var bookshelfJSON = JSON.stringify(bookshelf);
console.log('bookshelfJSON:', bookshelfJSON);
console.log('typeof bookshelfJSON:', typeof bookshelfJSON);

var studentJSON = '[{"id":"272409","name":"Henry Ding"}]';
console.log('studentJSON:', studentJSON);
console.log('typeof studentJSON', typeof studentJSON);

var student = JSON.parse(studentJSON);
console.log('student:', student);
console.log('typeof student:', typeof student);
