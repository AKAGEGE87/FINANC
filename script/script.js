const amount = document.querySelector("#amount");
const bill = document.querySelector("#bill");
const num = document.querySelector("#num");
const total = document.querySelector("#total");

function func5(a) {
  let y = bill.value;
  let x = (y * a) / 100;
  let z = num.value;
  amount.innerText = x;
  total.innerText = x * z;
}


function reset() {
  amount.innerText = 0.0;
  total.innerText = 0.0;
  bill.value = "";
  num.value = "";
}
