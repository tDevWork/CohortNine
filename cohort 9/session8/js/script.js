const mySubmitButton = document.getElementById("submit")
console.log('linked', mySubmitButton)

mySubmitButton.addEventListener('click' , (e)=>{
    e.preventDefault()

console.log('the user clicked')
/**normal text fields */
const name = document.getElementById("name").value
const email = document.getElementById("email").value
/**select option field */
const petSelect = document.getElementById("pet-select").value
/** radio buttons */
const drones = document.querySelectorAll("input[name=drone]")

console.log(name, email, petSelect, drones)
console.log(petSelect.value)

drones.forEach((option)=> {

  if(option.checked === true) {
    console.log(option.value)
  }
})
let output = document.getElementById('output')
 let MyOutPutString =
    `<h5> you booked a table for ${petSelect}</h5>  `


    output.innerHTML = MyOutPutString

})
/*
if () {}
for () {}
function nameHere () {}


 addEventListener( 'click', ()=>{}  )
 forEach(  (options)=>{}     )

*/