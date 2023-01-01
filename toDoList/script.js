const input = document.querySelector("#mission");
const listDOM = document.querySelector("ul");

input.addEventListener("keyup", getLi);

function getLi(event) {
  if (event.key === "Enter") {
    if (input.value !== "") {
      mission = input.value;
      let job = document.createElement("li");
      job.innerHTML = `
   <p>${mission}</p><span>
          <i onClick="del(this)" class="delete fa-solid fa-trash-can"></i>
          <i onClick="important(this)"class="important fa-solid fa-triangle-exclamation"></i>
          <i onClick="visible(this)"class="visible fa-regular fa-eye-slash"></i>
        </span>`;
      listDOM.insertAdjacentElement("afterbegin", job);
      input.value = "";
    }
  }
}

function del(a) {
  a.parentElement.parentElement.remove();
}
function important(a) {
  a.parentElement.parentElement.style.backgroundColor !== "orange"
    ? (a.parentElement.parentElement.style.backgroundColor = "orange")
    : (a.parentElement.parentElement.style.backgroundColor = "white");
}
function visible(a) {
  if (a.classList.value === "visible fa-regular fa-eye-slash") {
    a.parentElement.previousSibling.style.opacity = "0";
    a.classList = "visible fa-regular fa-eye";
  } else {
    a.classList = "visible fa-regular fa-eye-slash";
    a.parentElement.previousSibling.style.opacity = "1";
  }
}
