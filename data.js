import { users } from "./db.js";

const tbodyEl = document.getElementById("tbody-data");

//  users.map(function (
//   { userId, id, title, completed },
//   index
// ) {
//   let tr = document.createElement("tr");
//   tr.setAttribute("class", "row-style");

//   tbodyEl.appendChild(tr);

//   let td1 = tr.appendChild(document.createElement("td"));
//   let td2 = tr.appendChild(document.createElement("td"));
//   let td3 = tr.appendChild(document.createElement("td"));
//   let td4 = tr.appendChild(document.createElement("td"));

//   td1.textContent = userId;
//   td2.textContent = id;
//   td3.textContent = title;
//   td4.textContent = completed;
// });

// Search Options

const inputEl = document.getElementById("search-input");

function renderUsers(users) {
  tbodyEl.innerHTML = "";
  users.map((user) => {
    let tr = document.createElement("tr");
    tr.setAttribute("class", "row-style");
    tbodyEl.appendChild(tr);

    let td1 = tr.appendChild(document.createElement("td"));
    let td2 = tr.appendChild(document.createElement("td"));
    let td3 = tr.appendChild(document.createElement("td"));
    let td4 = tr.appendChild(document.createElement("td"));

    td1.textContent = user.userId;
    td2.textContent = user.id;
    td3.textContent = user.title;
    td4.textContent = user.completed;
  });
}

function searchUsers(query) {
  return users.filter((user) => {
    return (
      user.userId.toString().includes(query) ||
      user.id.toString().includes(query) ||
      user.title.toString().includes(query)
    );
  });
}

inputEl.addEventListener("input", function (event) {
  const query = event.target.value.trim();
  if (query === "") {
    renderUsers(users);
  } else {
    const filteredUsers = searchUsers(query);
    renderUsers(filteredUsers);
  }
});
renderUsers(users);