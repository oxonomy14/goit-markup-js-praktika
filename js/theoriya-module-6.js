// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// pizzaPalace.order("Big Mike"); // повертає рядок "Sorry, there is no pizza named «Big Mike»"

// console.log(pizzaPalace.order("Big Mike"));
// console.log(pizzaPalace.order("Smoked"));

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(child.age);

// Додай класу Car метод constructor, який приймає три параметри:

// brand - марка автомобіля
// model - модель автомобіля
// price - ціна автомобіля
// Клас Car повинен створювати об'єкт з одноіменними властивостями brand, model і price, які отримують свої значення з аргументів,
//  переданих при створенні нового екземпляра за допомогою оператора new.

// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// new Car("Audi", "Q3", 36000);
// console.log(new Car("Audi", "Q3", 36000));

// class Car {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     return (this.price = newPrice);
//   }
// }
// const car = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// console.log(car.getPrice());

// console.log(car.changePrice(10));

// class Car {
//   #brand;
//   constructor(params) {
//     this.#brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }

//   changeBrand(newBrand) {
//     return (this.#brand = newBrand);
//   }
// }

// const car = new Car({ brand: "Audi", model: "Q3", price: 36000 });

// console.log(car.changeBrand("Honda"));

// class Car {
//   #price;
//   static maxPrice = 50000;
//   constructor(params) {
//     this.#price = params.price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.maxPrice) {
//       this.#price = newPrice;
//     }
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000
//! Теория =============================================

//console.log(window.close());
//console.log(window);

//"use strict";
// function greeting(a, b) {
//   console.log(this);
// }

// greeting(5, 6);

// const user = {
//   tag: "Mango",

//   showTag() {
//     console.log("showTag->this", this);
//   },
// };

// user.showTag();

// const object = {
//   message: "Hello, World",
//   getMessage() {
//     const message = "Hello, Earth";
//     return this.message;
//   },
// };
// console.log(object.getMessage());
//! ================================================ call, apply, bind ================================

// const showThis = function (a, b, arr) {
//   console.log(a, b, arr);
//   console.log("ShowThis - > this", this);
// };

// //console.log(showThis);
// //console.dir(showThis);

// const objA = {
//   a: 5,
//   b: 10,
// };

// //showThis.call(objA, 5, 1, [100, 200, 300]);
// showThis.apply(objA, [5, 1, [100, 200, 300]]);

/**
 * -------------------------------
 */
// const counter = {
//   value: 0,
//   increment(value) {
//     console.log("increment -> this", this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log("decrement -> this", this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));
// console.log(counter);

//! ------------------------------------------------------------

// Додай класу Car публічний статичний метод checkPrice(price),
// що приймає ціну автомобіля. Метод повинен порівняти значення параметра price і приватної статичної властивості maxPrice.

// Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum".
// В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".
// Під оголошенням класу ми додали ініціалізацію екземпляра і виклики методів, щоб показати, як буде використовуватися метод checkPrice(price).

// class Car {
//   static #maxPrice = 50000;

//   constructor(params) {
//     this.price = params.price;
//   }

//   static checkPrice(price) {
//     if (price > Car.#maxPrice) {
//       return "Error! Price exceeds the maximum";
//     } else {
//       return "Success! Price is within acceptable limits";
//     }
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

//! --------------------- Наслідування класів

// У застосунку потрібен адміністратор з можливістю додавати пошти користувачів у чорний список.

// Оголоси клас Admin, який наслідує від класу User
// Додай класу Admin публічну статичну властивість role (рівень доступу), значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}
// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = { BASIC: "basic", SUPERUSER: "superuser" };
// }

//! --------------------- Конструктор дочірнього класу

// Додай класу Admin метод constructor, який приймає один параметр params - об'єкт налаштувань з двома властивостями email і access.
// Додай класу Admin публічну властивість access, значення якої буде передаватися під час виклику конструктора.

// Щоб показати, як буде використовуватися клас Admin, ми додали ініціалізацію екземпляра під оголошенням класу.
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

//! ----------------- Методи дочірнього класу
// Додай класу Admin наступні властивості і методи.

// Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів. Значення за замовчуванням — це порожній масив.
// Публічний метод blacklist(email) для додавання пошти у чорний список.
// Метод повинен додавати значення параметра email в масив, що зберігається у властивості blacklistedEmails.
// Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку.
//  Метод повинен перевіряти наявність значення параметра email в масиві, що зберігається у властивості blacklistedEmails, і повертати true або false.
// Після оголошення класу ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  static role = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };
  blacklistedEmails = [];
  constructor(params) {
    super(params.email);
    this.access = params.access;
  }
  // для додавання пошти у чорний список
  blacklist(email) {
    return this.blacklistedEmails.push(email);
  }
  // для перевірки пошти у чорному списку
  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }
}

const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
