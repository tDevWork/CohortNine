console.log("I am linked");

const button = document.getElementById("button");

console.log(button);

button.addEventListener("click", changeColor);
const container = document.getElementById("container");

function changeColor() {
  container.style.backgroundColor = "red";
}

container.addEventListener("click", () => {
  container.style.backgroundColor = "blue";
});

const input = document.getElementById("email");

input.addEventListener("input", () => {
  console.log(input.value);
});

const number = document.getElementById("number");

number.addEventListener("change", () => {
  console.log(number.value);
});

let add = document.getElementById("add");

add.addEventListener("click", () => {
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;

  //console.log( typeof num1)

  let total = parseInt(num1) + parseInt(num2);

  console.log(total);

  const result = document.getElementById("result");

  return (result.innerText = total);
});


const minus = document.getElementById('minus')

minus.addEventListener("click", () => {
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
  
    //console.log( typeof num1)
  
    let total = parseInt(num1) - parseInt(num2);
  
    console.log(total);
  
    const result = document.getElementById("result");
  
    return (result.innerText = total);
  });















function adder(num1, num2) {
    
  return num1 + num2;
}

function getAdd() {
  let total = adder(10, 20);

  console.log(total);
}

getAdd()