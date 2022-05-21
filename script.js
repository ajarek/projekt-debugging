(function(){
const mainContainer = document.querySelector(".root");
let sum = 0;
const creatInput = (classContainer, type, classInput, placeholder) => {
  const container = document.createElement("div");
  container.className = classContainer;
  const input = document.createElement("input");
  input.type = type;
  input.className = classInput;
  input.placeholder = placeholder;
  container.appendChild(input);
  return container;
};
const creatButton = (onChange, classContainer, classButton, text) => {
  const container = document.createElement("div");
  container.className = classContainer;
  const button = document.createElement("button");
  button.className = classButton;
  button.textContent = text;
  button.addEventListener("click", onChange);
  container.appendChild(button);
  return container;
};

const creatResult = (classResult) => {
  const container = document.createElement("div");
  container.className =classResult ;
  const h1 = document.createElement("h1");
  container.appendChild(h1);
  return container;
};
const clear=()=>{
    numbers=document.querySelectorAll("input")
  for(let i=0;i<numbers.length;i++){
     numbers[i].value = ""
  
  }
}
const addNumbers = () => {
    sum=0
  numbers=document.querySelectorAll("input")
  for(let i=0;i<numbers.length;i++){
     sum = sum+Number(numbers[i].value)
     //While debugging it turned out that instead of adding numbers, strings are concatenated,to fix this the "Numbers" method was used.
  
  }
  let result = document.querySelector(".containerResult>h1")
  result.innerHTML = 'Result: '+ sum;
 clear()
};
mainContainer.append(
  creatInput("container", "number", "input", "Enter number 1"),
  creatInput("container", "number", "input", "Enter number 2"),
  creatInput("container", "number", "input", "Enter number 3"),
  creatButton(addNumbers, "container", "button", "Add the numbers"),
  creatResult("containerResult")
);
})()