let nums = document.querySelectorAll(".num");
let operations = document.querySelectorAll(".operation");
let result = document.querySelector(".result");
let equal = document.querySelector("#equal");
let delet = document.querySelector("#delete");
let deletAll = document.querySelector("#deleteAll");

nums.forEach((e) => e.addEventListener("click", num));

function num() {
  result.innerHTML += this.innerHTML;
}

operations.forEach((e) => e.addEventListener("click", operation));

function operation(first) {
  result.innerHTML += this.innerHTML;
}

equal.addEventListener("click", topla);

function topla() {
  if (result.innerHTML.indexOf("+") !== -1) {
    box = result.innerHTML.split("+");
    let toplam = 0;
    for (i = 0; i < box.length; i++) {
      toplam = Number(toplam) + Number(box[i]);
    }
    result.innerHTML = toplam;
  }
  if (result.innerHTML.indexOf("-") !== -1) {
    box = result.innerHTML.split("-");
    let toplam = box[0];
    for (i = 1; i < box.length; i++) {
      toplam = toplam - box[i];
    }
    result.innerHTML = toplam;
  }
  if (result.innerHTML.indexOf("*") !== -1) {
    box = result.innerHTML.split("*");
    let toplam = 1;
    for (i = 0; i < box.length; i++) {
      toplam = Number(toplam) * Number(box[i]);
    }
    result.innerHTML = toplam;
  }

  if (result.innerHTML.indexOf("/") !== -1) {
    box = result.innerHTML.split("/");
    let toplam = box[0];
    for (i = 1; i < box.length; i++) {
      toplam = Number(toplam) / Number(box[i]);
    }
    result.innerHTML = toplam;
  }
}

delet.addEventListener("click", deleta);

function deleta() {
  let box = result.innerHTML.slice(0, -1);
  result.innerHTML = box;
}

deletAll.addEventListener("click", deletAl);

function deletAl() {
  result.innerHTML = "";
}

window.addEventListener("keydown", keys);

function keys(event) {
  console.log(event.code);
  if (
    event.code == `Digit${event.code[event.code.length - 1]}` ||
    event.code == `Numpad${event.code[event.code.length - 1]}`
  ) {
    nums.forEach((e) =>
      e.innerHTML === event.code[event.code.length - 1]
        ? (result.innerHTML =
            result.innerHTML + event.code[event.code.length - 1])
        : console.log("değil")
    );
  }

  if (event.code === "NumpadAdd") {
    result.innerHTML = result.innerHTML + "+"
  }
  if (event.code === "NumpadSubtract") {
    result.innerHTML = result.innerHTML + "-"
  }
  if (event.code === "NumpadMultiply") {
    result.innerHTML = result.innerHTML + "*"
  }
  if (event.code === "NumpadDivide") {
    result.innerHTML = result.innerHTML + "/"
  }
  if (event.code === "NumpadEnter" || event.code === "Enter" ) {
        topla()
  }
  if (event.code === "Backspace" || event.code === "Delete" ) {
    deleta()
}
}
