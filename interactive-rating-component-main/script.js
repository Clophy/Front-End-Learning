let aDOM = document.querySelectorAll("a");
let submitDOM = document.querySelector(".submit");
let titleDOM = document.querySelector(".card-title");
let cardDOM = document.querySelector(".card");
let contentDOM = document.querySelector(".card-content");
let imgDOM = document.querySelector("img");
let ulDOM = document.querySelector("ul");
let starDOM = document.querySelector(".star");
let resultDOM = document.querySelector(".result");

aDOM.forEach((element) => element.addEventListener("click", active));

function active() {
  aDOM.forEach((e) => (e.classList == "active" ? (e.classList = "") : ""));
  this.classList = "active";
}

submitDOM.addEventListener("click", changeIt);
let activeA = "";
function changeIt() {
  aDOM.forEach((element) => {
    if (element.classList.value === "active") {
      activeA = element.innerHTML;
      titleDOM.innerHTML = "Thank you";
      contentDOM.innerHTML = `We appreciate you taking the 
      time to give a rating. If you ever need more support, 
        don't hesitate to get in touch!`;

        imgDOM.src="./images/illustration-thank-you.svg"
        starDOM.style="margin:auto;background-color:transparent;"
        resultDOM.innerHTML=`You selected ${activeA} out of 5`
        resultDOM.style.display="block"
        ulDOM.style.display="none"
        titleDOM.style.textAlign="center"
        contentDOM.style.textAlign="center"
    }
  });
}
