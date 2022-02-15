//Random Number..............

const inputGenerator = document.getElementById("input-generator");
const generatorBtn = document.getElementById("generator-btn");
generatorBtn.addEventListener("click", function () {
  let x = Math.random() * 10000;
  x = Math.floor(x);
  inputGenerator.value = x;
});

//Calculator.....................
const calculatorInput = document.getElementById("calculatorInput");
const calculatorNumber = document.getElementById("keyPad");
calculatorNumber.addEventListener("click", function (event) {
  const numbers = event.target.innerText;
  calculatorInput.value += numbers;
  if (isNaN(numbers)) {
    if (numbers == "C") {
      calculatorInput.value = "";
    }
  }
});

//Submit button........................

const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function () {
  const input = document.getElementById("input-generator").value;
  const calculator = document.getElementById("calculatorInput").value;
  const notifyFail = document.getElementById("notify-fail");
  const notifySuccess = document.getElementById('notify-success');

  if(calculator == ''){
    notifyFail.style.display= 'none'
     notifySuccess.style.display= 'none'
  }
  else if (calculator == input) {
     notifyFail.style.display= 'none'
     notifySuccess.style.display= 'block'
  }
  else{
    notifyFail.style.display= 'block'
     notifySuccess.style.display= 'none'
  }
});
