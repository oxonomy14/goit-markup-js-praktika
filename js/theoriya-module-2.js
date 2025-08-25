/*
function isNumberInRange(start, end, number) {
  if (start >= number && number <= end) {
    return "true";
  } else {
    return "false";
  }
}

//console.log(isNumberInRange(start, end, number));

console.log(isNumberInRange(4, 78, 12));



function checkAccess(subType) {
  return subType === "pro" || subType === "vip";
}

function toggleModalVisibility(isVisible) {
  return !isVisible;
}

function normalizeInput(input, to) {
  if (to === "upper") {
    return "input.toUpperCase()";
  } else {
    return "input.toLowerCase()";
  }
}

function checkForName(fullName, firstName) {
  const fullNameLowerCase = fullName.toLowerCase();
  const firstNameLowerCase = firstName.toLowerCase();

  const checkName = fullNameLowerCase.includes(firstNameLowerCase);

  return checkName;
}

*/
/*
function checkFileExtension(fileName, ext) {
  if (fileName.endsWith(ext)) {
    return "File extension matches";
  } else {
    return "File extension does not match";
  }
}
console.log(checkFileExtension("app.js", ".js"));
*/

/*function getFileName(file) {
  if (file.indexOf(".") > 1) {
    const extIndex = file.indexOf(".");

    return `${file.slice(0, extIndex)}`;
  } else {
    return `${file}`;
  }
}

console.log(getFileName("index.js"));
console.log(getFileName("styles")); */

/*function createFileName(name, ext) {
  const newName = name.trim() + "." + ext;
  return `${newName}`;
}

console.log(createFileName(" order ", "txt"));*/

/* Функція calculateTotal(number) приймає ціле число (параметр number). 
Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. 
Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6. */

/*function calculateTotal(number) {
  let count = 0;
  while (count <= number) {
    console.log(`Count: ${count}`);
    count += 1;
  }

  return (number * (number + 1)) / 2;
}

console.log(calculateTotal(300));*/

/*function calculateTotal(number) {
  let count = 0;
  let sum = 0;
  while (count <= number) {
    sum = sum + count;
    console.log(`Count: ${sum}`);
    count += 1;
  }

  return sum;
}

console.log(calculateTotal(24));*/

/*let firstName = null;
let nickName = "Суперкодер";

console.log(firstName ?? nickName ?? "Анонім"); */

/* Функція calculateTotal(number) приймає ціле число(параметр number) Використовуючи цикл for, доповни код функції так,
  щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно.Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6. */

/*function calculateTotal(number) {
  let sum = 0;

  for (let count = 0; count <= number; count += 1) {
    console.log(`Count: ${count}`);

    sum = sum + count;
  }
  return sum;
}

console.log(calculateTotal(3)); */

/* Функція calculateEvenTotal(number) приймає ціле число (параметр number). 
Доповни код функції так, щоб вона повертала суму всіх парних цілих чисел від одиниці до цього числа включно. Парні числа — це ті, 
що можна поділити на 2 без остачі (як це зробити розглядалося у темі Арифметичні операції у модулі 1). 
Наприклад, якщо number дорівнює 6, то сума - це 2 + 4 + 6, тобто 12. */

/*function calculateEvenTotal(number) {
  let sum = 0;

  for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      sum = sum + i;
    }
  }

  return sum;
}

console.log(calculateEvenTotal(18)); */

/*console.log(10 % 2);
console.log(10 % 3);
console.log(10 % 5);*/

/* Доповни код таким чином, щоб у змінну number записувалося перше число у проміжку від start до end, яке ділиться на 5 без остачі. */
const start = 6;
const end = 17;
let number;

for (let i = start; start >= i <= end; i++) {
  if (i % 5 === 0) {
    number = i;
    console.log(
      `перше число у проміжку від start до end, яке ділиться на 5 без остачі - ${i}`
    );
    break;
  }
}

/* Функція findNumber(start, end, divisor) приймає три параметра, які є цілими числами.

Доповни код функції таким чином, щоб вона:

повертала перше число у діапазоні від start до end включно, яке ділиться на divisor без остачі
не використовуй оператор break */

function findNumber(start, end, divisor) {
  //let number;
  for (let i = start; start >= i <= end; i++) {
    if (i % divisor === 0) {
      number = i;
      return `перше число у проміжку від ${start} до ${end}, яке ділиться на ${divisor} без остачі - ${i}`;
    }
  }
}

console.log(findNumber(2, 6, 5));
console.log(findNumber(8, 17, 3));
