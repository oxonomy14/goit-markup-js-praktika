//document.body.textContent = "Hello World";
const btnElems = document.getElementsByTagName("button");
console.log(btnElems);
//console.dir(btnElems);

const myBtn = btnElems[0];

//console.dir(myBtn);

myBtn.textContent = "Dynamic text";

const el = document.getElementById("js-title");
//console.log(el);

const ell = document.getElementsByTagName("js-title");
//console.log(ell);

const elll = document.getElementsByClassName("js-title");
//console.log(elll);

const ulElem = document.querySelector(".list");
console.log(ulElem);

ulElem.children[0].textContent = "New text";
