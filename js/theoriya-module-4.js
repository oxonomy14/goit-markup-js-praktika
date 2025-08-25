/*const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = [];
const values = [];

for (const key in apartment) {
  //if (apartment.hasOwnProperty(key)) {
  keys.push(key); // Додаємо ключ у масив keys
  values.push(apartment[key]); // Додаємо значення у масив values
  // }
}

console.log(keys);
console.log(values);

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  console.log(key); // Ключ
  console.log(book[key]); // Значення властивості з таким ключем
}*/

/*
Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. 
Запиши у змінну keys масив ключів властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.
*/
/*
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
const keys = Object.keys(apartment);

for (const key of keys) {
  values.push(apartment[key]);
}

console.log(keys); // Ключ
console.log(values);

*/

/* 
Виконай рефакторинг функції countProps(object), замінивши перебір ключів за допомогою циклу for…in на метод Object.keys() для отримання масиву властивостей.
Функція має повернути кількість властивостей в об'єкті object.

*/
/*
function countProps(object) {
  let propCount = 0;

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }

  //return propCount;

  const keys = Object.keys(object);

  return keys.length;
}

console.log(countProps({ name: "Mango", age: 2 }));

const password = "true";
const myKey = password;

const obj = {
  [myKey]: false,
};

console.log(obj);
*/

/*
Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries) в якості параметра.
Кожна властивість об'єкта salaries — це ключ, що містить ім'я співробітника, та значення - його відповідна зарплатня.

Доповни код функції countTotalSalary(salaries) так, щоб вона повертала загальну суму зарплат всіх співробітників.

Поради:

Ініціалізуй змінну totalSalary зі значенням 0, яка буде відповідати за загальну суму зарплат усіх співробітників
Використай метод Object.values() для отримання значень (зарплат) з об'єкта salaries
Пройдись по отриманих значеннях за допомогою циклу та додай кожне значення до змінної totalSalary.
Поверни totalSalary як результат

*/
/*
function countTotalSalary(salaries) {
  let totalSalary = 0;

  const user = Object.keys(salaries);
  const salary = Object.values(salaries);

  for (const key of salary) {
    totalSalary = totalSalary + key;
  }

  return totalSalary;
}

console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // повертає 330
*/
/*
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for (const key of colors) {
  console.log(key);
  hexColors.push(key["hex"]);
  rgbColors.push(key.rgb);
}

console.log(hexColors);
console.log(rgbColors);
*/

/* 
Функція getProductPrice(productName) приймає один параметр productName - назва продукту.
Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.

Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям (властивість name) в масиві products і повертала його ціну (властивість price). 
Якщо продукт з такою назвою не знайдений, функція повинна повертати null.*/
/*
function getProductPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  let productNamePrice = null;
  const productNameToSearchFor = productName;

  for (const key of products) {
    if (key.name === productNameToSearchFor) {
      productNamePrice = key.price;
    }
  }

  return productNamePrice;
}

console.log(getProductPrice("radar"));
console.log(getProductPrice("Radar"));
*/

/*

Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. 
Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. 
Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

*/
/*
function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  const arrPropName = [];

  for (const key of products) {
    if (key[propName]) {
      // console.log(key);
      arrPropName.push(key[propName]);
    }
  }

  return arrPropName;
}

console.log(getAllPropValues("quantity"));
console.log(getAllPropValues("name"));
console.log(getAllPropValues("price"));
console.log(getAllPropValues("test"));
*/

/* Функція calculateTotalPrice(productName) приймає один параметр productName- назва товару. 
Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.

Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.

Якщо продукту з такою назвою немає, то функція повинна повертати рядок "Product <productName> not found!" , де <productName> — це ім'я товару.

*/
/*
function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  for (const key of products) {
    if (key.name === productName) {
      console.log(key);
      totalPrice = key.price * key.quantity;
      return totalPrice;
    }
  }
  return `Product ${productName} not found!`;
}

//console.log(calculateTotalPrice("Radar"));
console.log(calculateTotalPrice("Droid"));
//console.log(calculateTotalPrice("Grip"));
//console.log(calculateTotalPrice("test"));
*/
//!==========================================
/*До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення інвентарю. Програма має додавати, видаляти, шукати та оновлювати зілля.

Оголоси об'єкт atTheOldToad з наступними властивостями:

potions — масив, де будуть зберігатися зілля. Нехай зараз він буде порожнім
getPotions() — метод, який повертає рядок "List of all available potions"
addPotion(potionName) — метод, який повертає рядок "Adding <potionName>", де potionName — це значення параметра potionName

*/
/*
const atTheOldToad = {
  potions: [],
  getPotions() {
    return "List of all available potions";
  },
  addPotion(potionName) {
    return `Adding ${potionName}`;
  },
};

console.log(atTheOldToad.getPotions());

console.log(atTheOldToad.addPotion("Invisibility"));
*/

/* 
Об'єкт atTheOldToad має наступні властивості:

potions — масив рядків, з назвами зілль
getPotions() — метод, який повертає рядок "List of all available potions"
Зміни код метода об'єкта getPotions() так, щоб він повертав значення властивості potions
*/
/*
const atTheOldToad = {
  potions: ["Speed potion", "Stone skin"],
  getPotions() {
    //return "List of all available potions";

    return this.potions;
  },
};

console.log(atTheOldToad.getPotions());
*/

/* Об'єкт atTheOldToad має наступні властивості:

potions — масив рядків, з назвами зілль
getPotions() — метод, який повертає значення властивості potions
addPotion() — метод, який приймає параметр рядок з назвою зілля potionName
Зміни код методу addPotion(potionName) так, щоб він додавав зілля potionName в кінець масиву у властивості potions.

*/
/*
const atTheOldToad = {
  potions: ["Speed potion", "Stone skin"],
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    this.potions.push(potionName);
  },
};

console.log(atTheOldToad.getPotions());
atTheOldToad.addPotion("Дыня");
console.log(atTheOldToad.getPotions());
*/

//!

/* Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною. Тому зараз у властивості potions буде зберігатися масив об'єктів з властивостями name та price.

Об'єкт atTheOldToad має наступні властивості:

potions — масив рядків, з назвами зілль
getPotions() — метод, який повертає значення властивості potions
addPotion() — метод, який приймає параметр об'єкт нового зілля newPotion і додає його в кінець масиву у властивості potions.
Додай метод getTotalPrice(), який має повертати загальну вартість усіх зілль з властивості potions.
*/
/*
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    this.potions.push(newPotion);
  },
  getTotalPrice() {
    let totalPrice = 0;

    for (const potion of this.potions) {
      totalPrice += potion.price;
    }
    return totalPrice;
  },
};

atTheOldToad.getTotalPrice();
console.log(atTheOldToad.getTotalPrice());
*/
/*
Об'єкт atTheOldToad має наступні властивості:

potions — масив об'єктів зілль
getPotions() — метод, який повертає значення властивості potions
updatePotionName() — метод, який приймає два параметра рядків oldName і newName
Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.
*/

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName;
      }
    }
  },
};

atTheOldToad.updatePotionName("Stone skin", "Invisibility");
console.log(atTheOldToad.getPotions());
//! ==========================================================================================
