let inputValue = 'sachin';
console.log(inputValue.split('').reverse().join(''));

let jsClass = 'This is javascript class';
console.log(jsClass.split(' ').reverse().join(' '));

let nonRepeat = 'entertainment';

for(let char of nonRepeat) {
    if(nonRepeat.indexOf(char) == nonRepeat.lastIndexOf(char)) {
        console.log("RESULT", char);
        break;
    } 
}

let titleCaseInput = "this is javascript class";
let arrValues = titleCaseInput.split(' ');
console.log("title", titleCaseInput.split(' '));
for(let char of arrValues) {
    console.log(char.toUpperCase());
}


// let inputSymbols = "hello@#hi&";
// let arr = [];
// for(let item of inputSymbols) {
//     if(!isalpha(item)) {
//         arr.push(item);
//     }
// }



// var isAlpha = function(ch){
//     return /^[A-Z]$/i.test(ch);
//   }
  var isAlpha = function(ch){
    return typeof ch === "string" && ch.length === 1
           && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");
  }

  console.log(isAlpha('A'));


let x =  "listen"

