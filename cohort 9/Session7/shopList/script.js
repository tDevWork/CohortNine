console.log("linkes");

// this is creating a new variable  and then going to my html and getting the element with the id of submit
const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  const item = document.getElementById("items").value;

  const list = document.getElementById("list");

  const ul = document.createElement("ul");
  const li = document.createElement("li");
  const buts = document.createElement("button");

  buts.innerText = "x";

  li.append(item);
  li.appendChild(buts);

  ul.append(li);

  list.append(ul);

  const listItems = document.querySelectorAll("li");
  console.log(listItems);

  listItems.forEach((content) => {
    buts.addEventListener("click", () => {
      buts.parentElement.parentElement.parentElement.removeChild(ul);
    });

    console.log(content);
  });
});

const mode = document.getElementById('mode')

mode.addEventListener('click', () => {
const body = document.querySelector('body')
console.log(body.classList)

 if(body.classList.contains( 'light') ) {
  
    body.classList.remove('light')
    body.classList.add('dark')

 } else if (body.classList.contains( 'dark') ) {
    body.classList.remove('dark')
    body.classList.add('light')
 }

}) 


const colours = document.getElementById('colours')


let colourArray = ['red','blue', 'green', 'grey','purple']

colours.addEventListener('click', () =>{
    const body = document.querySelector('body')
let pickedColour =  
 colourArray[ Math.floor( Math.random() * colourArray.length ) ]
//colourArray[4]
console.log(colourArray[2])
body.style.backgroundColor = pickedColour
})


/**
 * Math.floor  built in method that rounds any math function  
 * Math.random  built in method/ function  that will choose a given  number from  the  parameters set
 * Math.random()*100   0 -99
 * Math.random() *50   0-49
 * 
 */