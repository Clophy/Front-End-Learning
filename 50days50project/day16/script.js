let inBottle = document.querySelectorAll(".in-little-bottle");
let outBottle = document.querySelectorAll(".little-bottle");
let hey = document.querySelector(".display");
outBottle.forEach((e) => e.addEventListener("click", fill));

function fill() {
  let outnum = this.id[this.id.length - 1];

  if (this.classList.value === "little-bottle") {
    for (i = 0; i < outnum; i++) {
      outBottle[i].classList.add("fill");
      inBottle[i].classList.add("fill");
    }
  } else if (this.classList.value === "little-bottle fill") {
    for (i = 7; i > outnum-2; i--) {
      outBottle[i].classList.remove("fill");
      inBottle[i].classList.remove("fill");
      
    }
  }
}

outBottle.forEach((e) => e.addEventListener("click", bottle));

sayi = 0;
function bottle() {
  hey.classList.remove("display");
  let span = document.querySelector("span");
  inBottle.forEach((a) => {
    if (a.classList.value === "in-little-bottle fill") {
      sayi += 0.25;
    }
  });
  span.innerHTML = 2 - sayi;

  sayi = 0;
}
