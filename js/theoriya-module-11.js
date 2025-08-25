// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     // Response handling
//   })
//   .then((data) => {
//     // Data handling
//   })
//   .catch((error) => {
//     // Error handling
//   });
// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then((users) => {
//       const markup = users
//         .map((user) => {
//           return `<li>
// 	          <p><b>Name</b>: ${user.name}</p>
// 	          <p><b>Email</b>: ${user.email}</p>
// 	          <p><b>Company</b>: ${user.company.name}</p>
// 	        </li>`;
//         })
//         .join("");

//       userList.insertAdjacentHTML("beforeend", markup);
//     })
//     .catch((error) => console.log(error));
// });

//!//////////////////////////////////////////////////////////////////////////////////////////////

// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//   fetchUsers()
//     .then((users) => renderUsers(users))
//     .catch((error) => console.log(error));
// });

// function fetchUsers() {
//   return fetch("https://jsonplaceholder.typicode.com/users").then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }

// function renderUsers(users) {
//   const markup = users
//     .map((user) => {
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//     })
//     .join("");
//   userList.insertAdjacentHTML("beforeend", markup);
// }

//!

function fetchData(statusCode) {
  return fetch(`https://httpstat.us/${statusCode}`).then((response) => {
    if (response.ok) {
      return response;
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  });
}

fetchData(200)
  .then((result) => console.log("OK", result))
  .catch((error) => console.log(error.message));
fetchData(404)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));
fetchData(500)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));
