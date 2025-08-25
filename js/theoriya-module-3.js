// Оголоси змінну fruits. Надай змінній fruits наступне значення: масив фруктів - рядків "apple", "plum", "pear" і "orange".
/*
const fruits;

fruits = ["apple", "plum", "pear", "orange"];

const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];

console.log(lastElement);
*/

// Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana".
/*
const fruits = ["apple", "plum", "pear", "orange"];

fruits[1] = "peach";

fruits[3] = "banana";

console.log(fruits); */

/*
function getOrderQuantity(order) {
  const orderClients = order;

  return orderClients.length;
}

getOrderQuantity(["apple", "banana"]);

*/
/*
function getLastElementMeta(array) {
  let LastElement = array[array.length - 1];
  let LastIndex = array.length - 1;

  const newArray = [LastIndex, LastElement];
  //console.log(newArray);
  return newArray;
}

getLastElementMeta(["apple", "peach", "pear", "banana"]);
getLastElementMeta(["apple"]);
*/
/*
function getExtremeElements(array) {
  let firstElement = array[0];
  let LastElement = array[array.length - 1];

  const newArray = [firstElement, LastElement];
  //console.log(newArray);
  return newArray;
}

getExtremeElements(["apple", "peach", "pear", "banana"]);
*/

/*
Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

firstTwoEls - масив із перших двох елементів
nonExtremeEls - масив з усіх елементів, крім першого та останнього
lastThreeEls - масив із трьох останніх елементів
*/
/*const fruits = ["apple", "plum", "pear", "orange", "banana"];

const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, -1);
const lastThreeEls = fruits.slice(-3);

*/
/*
Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає першим параметром рядок, що складається зі слів, розділених лише пробілами (параметр message) та другим параметром - число, що містить ціну гравірування за одне слово (параметр pricePerWord).

Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

function calculateEngravingPrice(message, pricePerWord) {
  messageArray=message.split(" ");
  let totalWordArray = messageArray.length;

  return totalWordArray*pricePerWord;
}



*/

/*
Функція getLength(array) очікує один параметр array - масив довільних значень. Доповни код функції так,
 щоб вона перетворювала масив у рядок, без роздільників, і повертала кількість символів в отриманому рядку.

function getLength(array) {
  let txt = array.join("");
  return txt.length;
}


*/

/*
Оголоси змінну allClients та доповни код таким чином, щоб її значенням було посилання на масив, що складається з усіх елементів масивів oldClients і newClients. Спочатку мають іти елементи з масива oldClients, а потім з newClients.
const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Peach", "Houston"];
const allClients = oldClients.concat(newClients);
*/

/*
Функція getSlice(array, value) приймає два параметра:

array - масив довільних елементів
value - значення елемента масиву для пошуку
Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:

порожній масив, якщо в array немає елемента зі значенням value
підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array
*/

/*
function getSlice(array, value) {
  const index = array.indexOf(value);

  if (index === -1) {
    let emptyArray = [];
    return emptyArray;
  }

  return array.slice(0, index + 1);
}

console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));
console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));

*/

/*
Функція createArrayOfNumbers(min, max) приймає два параметра:

min - ціле число, з якого починаються обчислення
max - ціле число, до якого включно триватимуть обчислення
Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max включно.
*/
/*
function createArrayOfNumbers(min, max) {
  const array = [];
  for (let i = min; i <= max; i++) {
    array.push(i);
  }
  return array;
}

console.log(createArrayOfNumbers(14, 17));
*/
/*
Функція calculateTotalPrice(order) приймає один параметр order - масив чисел. Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.*/
/*function calculateTotalPrice(order) {
  let sumArray = 0;
  orderLength = order.length;

  for (let i = 0; i <= orderLength - 1; i++) {
    console.log(order[i]);
    sumArray += order[i];
  }

  return sumArray;
}

//console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116
console.log(calculateTotalPrice([1, 2, 3, 4, 5])); // 15
*/
/*
function fillArray(min, max) {
  let arr = [];
  for (let i = min; i <= max; i += 2) {
    // console.log(i);
    arr.push(i);
  }
  return arr;
}

console.log(fillArray(2, 10)); */

/* Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами.
 Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end. 
 Якщо жодного парного числа немає, то масив має бути пустим.
 Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for.

 */
/*
function getEvenNumbers(start, end) {
  let arr = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(getEvenNumbers(3, 11));
console.log(getEvenNumbers(7, 7));

*/

/*Функція checkStorage(storage, item) приймає два параметри:

storage - масив рядків, що описує доступні товари на складі
item - рядок з назвою товара, наявність якого потрібно перевірити
Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:

рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].

*/
/*
function checkStorage(storage, item) {
  let itemLower = item.toLowerCase();
  if (storage.includes(itemLower)) {
    return `${itemLower} is available to order!`;
  } else {
    return "Sorry! We are out of stock!";
  }
}

console.log(checkStorage(["apple", "plum", "pear"], "pear"));
console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));
console.log(checkStorage(["apple", "plum", "pear"], "orange"));
*/

/*Перед розв'язанням цієї задачі варто зазначити, що таке спільні елементи. Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вхідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2) довільної довжини в якості параметрів.

Доповни код функції:

Створи порожній масив для зберігання нового масиву.
Використай цикл for для ітерації кожного елемента у array1.
У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
Якщо він існує, то додай елемент до нового масиву.
Поверни наповнений масив спільних елементів як результат роботи функції.

*/
/*
function getCommonElements(array1, array2) {
  let arr = [];
  array1.Length = array1.length;
  for (let i = 0; i < array1.Length; i += 1) {
    console.log(array1[i]);

    if (array2.includes(array1[i])) {
      arr.push(array1[i]);
    }
  }
  return arr;
}

console.log(getCommonElements([1, 2, 3], [2, 4])); // повертає [2]
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // повертає [1, 2]
*/
/*Доповни код функції calculateTotalPrice(order) так, щоб вона повертала загальну суму чисел в масиві order. Використай цикл for...of для перебору масиву.

*/
/*
function calculateTotalPrice(order) {
  let sumOrder = 0;
  for (const orderItems of order) {
    console.log(orderItems);

    sumOrder = sumOrder + orderItems;
  }
  return sumOrder;
}

console.log(calculateTotalPrice([12, 85, 37, 4])); // повертає 138
*/
/*
function sum(a, b) {
  console.log(arguments);
  return a + b;
}

console.log(sum(2, 5));*/

//////////////////////////////////////////////////////// Псевдомасив ////////////////////////

//console.log([]); // Що вміє масив?

/*function foo() {
  console.log(arguments);
}
foo(); // // Що вміє псевдомасив? */
/*
function foo() {
  // У змінній args буде повноцінний масив з усіх аргументів
  const args = Array.from(arguments);
  //return args.join("-");
  return args;
}
console.log(foo(1, 2, 3));

foo(1, 2, 3); */

/* Функція createReversedArray() може приймати довільну кількість аргументів.
 Доповни код функції так, щоб вона повертала масив усіх аргументів, 
 але в масиві вони повинні йти у зворотному порядку. 
 
 Тобто, при виклику createReversedArray(1, 2, 3), функція має повернути масив [3, 2, 1]. 
 Використовуй цикл або метод масиву toReversed(), який застосовується до масиву 
 і результатом роботи повертає новий масив з елементами у зворотньому порядку.

 */
/*
function createReversedArray() {
  const args = Array.from(arguments);
  return args.toReversed();
}

console.log(createReversedArray(12, 85, 37, 4)); */

/* Функція calculateTax(amount, taxRate) оголошує два параметри:

amount - число, сума від якої потрібно обчислити податок. Обов'язковий параметр.
taxRate - число, податкова ставка. Необов'язковий параметр. За замовчуванням його значення має бути 0.2.
Доповни код функції так, щоб вона повертала суму податку - результат множення суми на податкову ставку.

*/

function calculateTax(amount, taxRate = 0.2) {
  const res = amount * taxRate;
  return res;
}

console.log(calculateTax(100, 0.1));
