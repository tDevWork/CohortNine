console.log(" am linked");

/* all this is hidden */
// this text is hidden

/** this function gets  my HTML element  and adds some text */
function addText() {
  const third = document.getElementById("third");

  third.style.backgroundColor = "red";
 
}

addText();

/*console.log(myFruit)
//  alters the initial array
myFruit.pop()

console.log(myFruit)

myFruit.push('kiwi')
console.log(myFruit)

myFruit.shift()

myFruit.unshift('pineapple')
console.log(myFruit)

// don't alter initial array make new value

let newArray =  myFruit.slice(1, 2)
console.log(myFruit, 'myFruit')
console.log(newArray, 'new array')

let myIndexNumber = myFruit.indexOf('pear')

console.log(myIndexNumber)*/








//index               0        1       2        3

//length              1        2      3         4
const myFruit =[ "apple", "pear", "banana", "orange"];

function filterArray() {
  for (let i = 0; i < myFruit.length ; i++) {
    console.log("i", i);

    console.log(myFruit[i]);
  }

myFruit.map( (fruit,i)  => {
    console.log(fruit, i)
    const third = document.getElementById("third");
    let ul = document.createElement('ul')
    let li = document.createElement('li')
    li.textContent = fruit 

    ul.append(li)
    third.append(ul)

})


 let a = 5
 let b = '5'
 console.log(typeof a , typeof b)
 if(a !== b ) {
    console.log('no match')
 } else (
    console.log('match')
 )

}

filterArray();












/*function fillSomeText() {
  let Second = document.getElementById("third");

  Second.textContent = " I just wrote a javaScript function ";

  /* innerHTML textContent innerText 
  //console.log(Second)

  console.log(carpetArea(5, 5));*/
/*}

fillSomeText();

function carpetArea(numberOne, numberTwo) {
  // this is using my id in my html to get the element
  let Second = document.getElementById("third");
  // this declares a new variable  and then  uses  the  2 parameters to times their numbers
  let Times = numberOne * numberTwo;

  let adding = numberOne + numberTwo; // maths function

  //   15 / 6  = 2 remainder  3
  let unknown = numberOne % numberTwo;
  //adding = adding + 3
  // adding += 3

  Second.textContent = " the total is " + Times + " " + adding; //concatenation
  console.log(unknown);
}
carpetArea(15, 6);*/

/** Write your own  math function  it will have
 *   2 parameters 
 * 
 * inside the function  
 * get hold of a html element using maths signs
 * *  /  -  +  % 
 * output the results into your html
 * don't forget to invoke call your functions
 
*/

/*function checkIfMatches() {
  let x = 45;
  let y = 45;
  //if (condition to check ) { do this}
  if (x === y || x < y) {
    console.log("x is the same or less than y", x + y);
    return x + y;
  } else if (x > y) {
    console.log("x is greater than y");
    return x - y;
  } else {
    console.log("does not match", x, y);
  }
}

checkIfMatches();
//  >   <
function checkIfMatchesTwo() {
  let x = "third word";
  let y = "fourth word";
  //if (condition to check ) { do this}
  console.log("this is x", x.length, "this is  y", y.length);
  if (x === y || x.length > y.length) {
    console.log("x is the same or less than y");
  } else if (x.length < y.length) {
    console.log("x is less than y");
  } else {
    console.log("does not match");
  }
}

checkIfMatchesTwo();

 function looper() {
//  length           1  2  3   4   5   6
//   index num       0  1  2   3   4   5
  let numberArray = [1, 4, 6, 32, 38, 39];
  console.log(numberArray.length)

  for (let i = 0; i < numberArray.length; i++) {
    console.log("index i is at ", i);
    console.log(" my number array is at", numberArray[i]);
  }
}
looper(); 
*/
