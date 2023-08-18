const botones = document.querySelectorAll(".btn");
const inputBill = document.querySelector("#bill");
const numberPeople = document.querySelector("#people");
const totalAmount = document.querySelectorAll(".number-amount");
const textcond = document.querySelectorAll(".text-condition");
const btnReset = document.querySelector("#reset");
const btnCustom = document.querySelector(".custom");

let valorBoton = 0;
let valorInput = 0;
let valorInputPersonas = 0;
let tipAmount = 0;
let Total = 0;
botones.forEach(function (boton) {
  boton.addEventListener("click", function (e) {
    valorBoton = e.target.value;
    if (valorBoton > 0 && valorInput > 0 && valorInputPersonas > 0) {
      Calc();
    }
  });
});

botones[5].addEventListener("input", function () {
  valorBoton = botones[5].value / 100;
  console.log(valorBoton);
  if (valorBoton > 0 && valorInput > 0 && valorInputPersonas > 0) {
    Calc();
  }
});

inputBill.addEventListener("input", () => {
  valorInput = inputBill.value;
  if (valorInput > 0 && valorInputPersonas > 0 && valorBoton > 0) {
    Calc();
  }
});

numberPeople.addEventListener("input", () => {
  valorInputPersonas = numberPeople.value;
  if (valorInput > 0 && valorInputPersonas > 0 && valorBoton > 0) {
    Calc();
  }
  changeColorError();
});

function changeColorError() {
  if (valorInputPersonas <= 0) {
    textcond[1].innerHTML = "Can't be Zero";
    textcond[1].style.color = "red";
    numberPeople.style.outline = "3px solid red";
  } else {
    textcond[1].innerHTML = "";
    textcond[1].style.color = "none";
    numberPeople.style.outline = "3px solid #26c0ab";
  }
}
function Calc() {
  tipAmount = (valorInput * valorBoton) / valorInputPersonas;
  let tipAmountdecimal = tipAmount.toFixed(2);
  totalAmount[0].innerHTML = `$${tipAmountdecimal}`;

  Total = tipAmount + valorInput / valorInputPersonas;
  let TotalDecimal = Total.toFixed(2);
  totalAmount[1].innerHTML = `$${TotalDecimal}`;

  resetStyle();
}

btnReset.addEventListener("click", () => {
  inputBill.value = 0;
  numberPeople.value = 0;
  valorInput = 0;
  valorInputPersonas = 0;
  tipAmount = 0;
  Total = 0;
  valorBoton = 0;
  totalAmount[0].innerHTML = "$0.00";
  totalAmount[1].innerHTML = "$0.00";
  btnReset.style.opacity = 0.3;
  botones[5].value=0

  numberPeople.style.outline= "none"
});

function resetStyle() {
  if (
    totalAmount[0].textContent != "$0.00" ||
    totalAmount[1].textContent != "$0.00"
  ) {
    btnReset.style.opacity = 1;
  }
}
