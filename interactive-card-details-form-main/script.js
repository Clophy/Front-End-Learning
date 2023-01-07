let cardNameInput = document.querySelector("#card-name");
let cardNumberInput = document.querySelector("#card-number");
let cardExpDateInput = document.querySelector("#exp-date");
let cardExpDate2Input = document.querySelector("#exp-date2");
let cardCvcInput = document.querySelector("#cvc");
let frontNumber = document.querySelector(".front-num");
let frontName = document.querySelector(".front-name");
let frontDate = document.querySelector(".front-exp-date");
let frontDate2 = document.querySelector(".front-exp-date2");
let backCvc = document.querySelector(".back-num");
let button = document.querySelector("button")
let form = document.querySelector("form")
let rightSide = document.querySelector(".right-side")

cardNumberInput.addEventListener("keyup", getNumber);
cardNumberInput.addEventListener("keydown", getNumber);

function getNumber() {
  for (i = 18; i > cardNumberInput.value.length; i--) {
    if (
      cardNumberInput.value.length === 4 ||
      cardNumberInput.value.length === 9 ||
      cardNumberInput.value.length === 14
    ) {
      cardNumberInput.value = cardNumberInput.value + " ";
    }
  }

  frontNumber.innerHTML = cardNumberInput.value;
}

cardNameInput.addEventListener("keyup", getName);
cardNameInput.addEventListener("keydown", getName);

function getName() {
    cardNameInput.value = cardNameInput.value.toUpperCase()
  frontName.innerHTML = cardNameInput.value;

}
cardExpDateInput.addEventListener("keyup", getExpDate);
cardExpDateInput.addEventListener("keydown", getExpDate);

function getExpDate() {
  frontDate.innerHTML = cardExpDateInput.value;

}
cardExpDate2Input.addEventListener("keyup", getExpDate2);
cardExpDate2Input.addEventListener("keydown", getExpDate2);

function getExpDate2() {
  frontDate2.innerHTML = cardExpDate2Input.value;

}

cardCvcInput.addEventListener("keyup", getCvc);
cardCvcInput.addEventListener("keydown", getCvc);

function getCvc() {
    backCvc.innerHTML = cardCvcInput.value;

}

button.addEventListener("click",complete)

function complete(e){
   if(button.innerHTML==="Confirm"){
    e.preventDefault()
    form.remove()
    let thanks= document.createElement("div")
    thanks.innerHTML=`
    <div class="thanks">
          <div class="img"><img src="./images/icon-complete.svg" alt=""></div>
          <h3>THANK YOU!</h3>
          <p>We've added your card details</p>
          <button onClick="location.reload()">Continue</button>
        </div>`

    rightSide.appendChild(thanks)
   }
}

