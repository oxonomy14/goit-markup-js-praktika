const a = "It is a string";

console.log(Number.isNaN(a));

let b;

const c = null;

const d = {};

const f = [];

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof f);
console.log(Array.isArray(f));


console.log("Оператор &&:", false && 5);
console.log("Оператор &&:", true && undefined);

let arr =[1,2,3,4,5];

let list;

let arr2 ={item:[1,2,3,4,5], list};



console.log("Це масив:", Array.isArray(arr2));
function test () {
    let localVar="Hello";
    console.log("Функція EEFI:",localVar);
    
}

test ();
