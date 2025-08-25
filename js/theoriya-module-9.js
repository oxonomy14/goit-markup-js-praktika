const dog = {
  name: "Mango",
  age: 3,
  isGoodBoy: true,
};

const json = JSON.stringify(dog);
console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'
console.log(typeof json);

try {
  const data = JSON.parse("Well, this is awkward");
} catch (error) {
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // Unexpected token W in JSON at position 0
  console.log(error.stack);
}
