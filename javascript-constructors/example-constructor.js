function ExampleConstructor() {

}

console.log('value of ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var aFunction = new ExampleConstructor();
console.log('value of aFunction:', aFunction);
var instanceofaFunction = aFunction instanceof ExampleConstructor;
console.log('aFunction instanceof ExampleConstructor:', instanceofaFunction);
