/* 

//Напишіть функцію min(a, b), яка повертає
//менше з чисел a, b
//Потрібно додати перевірку, що функція отримує числа

*/
/*
function min(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Один з аргументів не є числом";
  }

  return a > b ? b : a;
  //   return Math.min(a, b);
}

console.log(min(5, "3"));
console.log(min(5, 3));
*/
// Task Зарано
//Напиши функцію findLongestWord(string)
//яка приймає довільний рядок
//що складається лише з розділених слів
//пробілом (параметр string)
//і повертає найдовше слово у цьому рядку

// const string = "Nunc sed turpis a felis in nunc fringilla"

// Task 2
//Напишіть функцію makeInvetedString(), яка замінює регістр кожного символу
//У сторіччі на протилежний
//Наприклад 'JavaScript' повинен повернути 'jAVAsCRIPT'
/*
function makeInvetedString(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toLowerCase()) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }

  return newStr;
}

console.log(makeInvetedString("jAVAsCRIPT"));
*/
// Task 3

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.
/*
function myFunction(num) {
  switch (num) {
    case 1:
      return "зима";
    case 2:
      return "весна";
    case 3:
      return "літо";
    case 4:
      return "осінь";
    default:
      return "?";
  }
}

console.log(myFunction(3));
*/
// Task 4

//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max
/*
function writeMaxMin(max, min) {
  let sum = 0;
  for (let i = max; i >= min; i--) {
    console.log(i);
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(`result: ${writeMaxMin(3, 1)}`);
*/
// Task 5
// / У змінній min лежить число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число(у першу, другу, третю чи четверту).
/*
function timeInterval(min) {
  if (min >= 0 && min <= 15) {
    return "first part";
  }
  if (min >= 16 && min <= 30) {
    return "second part";
  }
  if (min >= 31 && min <= 45) {
    return "third part";
  }
  if (min >= 46 && min <= 59) {
    return "forth part";
  }
  return "invalid value";
}
*/
//  console.log(timeInterval(15));

//Task 6

// Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
// Інакше вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
//інакше виводити рядок "Невірний пароль!"
/*
const userRule = prompt("Введіть логін");

if (userRule === "Адмін") {
  const password = prompt("Введіть пароль");
  if (!password) {
    console.log("Скасовано");
  } else if (password === "Я головний") {
    console.log("Добрий день!");
  } else {
    console.log("Невірний пароль!");
  }
} else {
  console.log("Я вас не знаю");
}*/
//!======================================== Угруповання об‘єктів студентів по курсам  =================================================================================================================
//
// Створіть масив об‘єктів, що являють собою різних студентів. Кожен об‘єкт повинен містити властивості ім‘я, вік та курс.
// Використовуйте цикл for...of, щоб згрупувати студентів за курсами.
// Результатом буде об‘єкт, де ключами будуть назви курсів, а значення - масиви об’єктів студентів, що належать до відповідного курсу.
// Очікуванний результат:
// const groupedStudents = {
//   Java: [
//     { name: “Алиса“, age: 20, course: “Java” },
//     { name: “Карл“, age: 21, course: “Java” },
//   ],
//   Python: [{ name: “Боб“, age: 22, course: “Python” }],
//   JavaScript: [{ name: “Джон“, age: 23, course: “JavaScript” }],
// };

const students = [
  { name: "Алиса", age: 20, course: "Java" },
  { name: "Боб", age: 22, course: "Python" },
  { name: "Карл", age: 21, course: "Java" },
  { name: "Джон", age: 23, course: "JavaScript" },
];
//console.log(students.course);
function groupStudentsCourse() {
  const groupedStudentsCourse = {};
  for (const student of students) {
    const course = student.course;
    //  console.log(student);

    if (!groupedStudentsCourse[course]) {
      groupedStudentsCourse[course] = [];
    }
    groupedStudentsCourse[course].push(student);
  }

  return groupedStudentsCourse;
}

//groupStudents();

console.log(groupStudentsCourse());
