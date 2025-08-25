function checkAgeN(age) {
  if (age >= 18) {
    result = "You are an adult";
  } else {
    result = "You are a minor";
  }

  return result;
}

function checkAge(age) {
  if (age >= 18) {
    return "You are an adult";
  }
}

console.log(checkAgeN(16));
console.log(checkAge(17));

/////////////////////////////////////////////////////////

function checkStorage(available, ordered) {
  if (ordered > available) {
    return "Not enough goods in stock!";
  } else {
    return "Order is processed, our manager will contact you";
  }
}

console.log(checkStorage(34, 67));

//////////////////////////////////////////////////////////////////

function checkStorage(available, ordered) {
  if (ordered === 0) {
    return "There are no products in the order!";
  } else if (ordered > available) {
    return "Your order is too large, there are not enough items in stock!";
  } else {
    return "The order is accepted, our manager will contact you";
  }
}

console.log(checkStorage(56, 0));

////////////////////////////////////////////////////////////////////////

function checkPassword(password) {
  const correctPassword = "jqueryismyjam";

  return password === correctPassword
    ? "Access granted"
    : "Access denied, wrong password!";
}

console.log(checkPassword("tytr"));

/////////////////////////////////////////////////////////////

function getSubscriptionPrice(type) {
  switch (type) {
    case "starter":
      return "ціна передплати 0 кредитів";
      //return console.log("ціна передплати 0 кредитів");
      break;
    case "professional":
      return console.log("ціна передплати 20 кредитів");
      break;
    case "organization":
      return console.log("ціна передплати 50 кредитів");
      break;
    default:
      return console.log("Invalid subscription type!");
  }
}

console.log(getSubscriptionPrice("starter"));

////////////////////////////////////////////

function getSubscriptionPrice(type) {
  switch (type) {
    case "starter":
      return "0";

      break;
    case "professional":
      return "20";
      break;
    case "organization":
      return "50";
      break;
    default:
      return `Invalid subscription type!`;
  }
}

console.log(getSubscriptionPrice("professional"));
