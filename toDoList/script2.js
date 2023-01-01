const input = document.querySelector("#mission");
const ul = document.querySelector("ul");

let getStorage = JSON.parse(localStorage.getItem("taskList"));

if(getStorage){
    taskList = getStorage

    getStorage.forEach((item) => {
        let newLi = document.createElement("li");
        newLi.innerHTML = `
              <p>${item}</p><span>
                     <i id="${getStorage.indexOf(item)}" onClick="del(this)" class="delete fa-solid fa-trash-can"></i>
                     <i onClick="important(this)"class="important fa-solid fa-triangle-exclamation"></i>
                     <i onClick="visible(this)"class="visible fa-regular fa-eye-slash"></i>
                   </span>`;
        ul.insertAdjacentElement("afterbegin", newLi);
      });
}else{
     taskList = []
}


input.addEventListener("keyup", create);

function create(event) {
  if (event.key === "Enter") {
    if (input.value !== "") {
      taskList.push(input.value);
      localStorage.setItem("taskList", JSON.stringify(taskList));

      let newLi = document.createElement("li");
      newLi.innerHTML = `
        <p>${taskList[taskList.length - 1]}</p><span>
               <i id="${taskList.length - 1}" onClick="del(this)" class="delete fa-solid fa-trash-can"></i>
               <i onClick="important(this)"class="important fa-solid fa-triangle-exclamation"></i>
               <i onClick="visible(this)"class="visible fa-regular fa-eye-slash"></i>
             </span>`;
      ul.insertAdjacentElement("afterbegin", newLi);
      input.value = "";
    }
  }
}


async function del(a) {
    a.parentElement.parentElement.remove();
    let index = a.id
   await getStorage.splice(index,1)
    localStorage.setItem("taskList", JSON.stringify(taskList));
    location.reload()
    
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
  