var student = {
  firstName: 'Henry',
  lastName: 'Ding',
  age: 28
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'student';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Honda',
  model: 'Accord',
  year: 2013
};

vehicle['color'] = 'silver';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Aiko',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
