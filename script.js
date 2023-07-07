console.log('connecté !');
//https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/05_Day_Arrays/05_day_arrays.md
// Exercice II

// II.1 Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

import { countries } from "./countries.js";
import { webTechs } from "./web_tech.js";

console.log(countries)
console.log(webTechs)

// II.2 First remove all the punctuations and change the string to array and count the number of words in the array
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text)

let textClean = text.replace(/[.,]/g,'')
console.log(textClean)

let textArray = textClean.split(' ')
console.log(textArray)
console.log(textArray.length)

/*II.3 add 'Meat' in the beginning of your shopping cart
add Sugar at the end of you shopping cart 
remove 'Honey' 
modify Tea to 'Green Tea'
*/
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift('Meat')
console.log(shoppingCart)

shoppingCart.push('Sugar')
console.log(shoppingCart)

const updatedShoppingCart = shoppingCart.filter((item)=>{
  return !item.includes('Honey')
})
console.log(updatedShoppingCart)

updatedShoppingCart.splice(updatedShoppingCart.indexOf('Tea'),1, 'GreenTea')
console.log(updatedShoppingCart)

// II.4 In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

function checker(array, word){
  if(!array.includes(word)){
    array.push(word)  
  }
}

checker(countries, 'Ethiopia')
console.log(countries)


// II.5 Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

//II.6 Sort the array ascendantly and find the min and max age

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort((a,b)=>a-b)//When a - b is less than 0, it means that a should be sorted before b, resulting in an ascending order. Conversely, when a - b is greater than 0, it means that b should be sorted before a, resulting in a descending order. When a - b equals 0, it means that a and b are equal and their relative order doesn't change.
console.log(ages)

//II.7 Slice the first three from the age array
const firstTen = ages.slice(0, 3)
console.log(firstTen)