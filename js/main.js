const inputName = document.querySelector(".form__input-name");
const inputAge = document.querySelector(".form__input-age");
const inputstd = document.querySelector(".form__input-std");
const inputemail = document.querySelector(".form__input-email");
const form = document.querySelector(".form");
const tbody = document.querySelector(".card");
const btn0 = document.querySelector(".btn0");
const btnd = document.querySelector(".btn-danger");
const foy = document.querySelector(".cards");
const DATA = [
  {
    name: "Abbos",
    email: "abbosqodirov04@gmail.com",
    id: new Date().getTime(),
    age: 20,
    std: "Najot talim",
  },
];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let newUser = {
    id: `id-${new Date().getTime()}`,
    name: inputName.value,
    age: +inputAge.value,
    std: inputstd.value,
  };
  DATA.push(newUser);
  console.log(DATA);
  createTable(DATA);
  inputName.value = "";
  inputAge.value = "";
  inputstd.value = "";
});

function createTable(data) {
  foy.innerHTML = "";
  while (tbody.firstChild) {
    tbody.firstChild.remove();
  }
  data.forEach((user, index) => {
    let tr = document.createElement("card");
    tr.innerHTML = `
    <div class="card">
    <div class= "social"></div>
    <div class="rasm"> <img src="./img/d72541a1dbbcb37aca5ff77aa7b58e58.png" width="40px" alt=""></div>
        
        <td>${user.name}</td>
        <br></br>
        <td>${user.email} email</td>
        <br></br>
        <td>${user.age} age</td>
        <br></br>
        <td>${user.std} study</td>
        <br></br>
        <button onclick="deleteUser(${index})" class="btn-danger">
        Delete
      </button>
      
      <div class="avatar"><img src="./img/instagram-fill.png"  alt="" width="40px"><a href="https://www.instagram.com/abboskadirov04/">@abboskadirov04</a></div>
      </div>
        `;
    console.log(tr);
    foy.appendChild(tr);
  });
}

createTable(DATA);

function deleteUser(index) {
  DATA.splice(index, 1);
  createTable(DATA);
}
