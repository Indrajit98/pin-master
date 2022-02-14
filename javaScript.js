//Random Number..............

const inputGenerator = document.getElementById("input-generator");
const generatorBtn = document.getElementById("generator-btn");
generatorBtn.addEventListener("click", function () {
  let x = Math.random() * 10000;
  x = Math.floor(x);
  inputGenerator.value = x;
});

//Calculator.....................
const calculatorInput=document.getElementById('calculatorInput');
const calculatorNumber=document.getElementById('keyPad');
calculatorNumber.addEventListener('click',function(event){
  const numbers = event.target.innerText;
  calculatorInput.value += numbers;
  if(isNaN(numbers)){
    if(numbers=='C'){
      calculatorInput.value =''
    }
  }
  
})

