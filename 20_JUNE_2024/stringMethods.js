//Match method
let str = "the rain is reason for main STRAIN"
console.log(str.match(/ain/gi));

//replace and replaceAll
let str2 = "replaces is with or another is and is and is";
console.log(str2.replace('is', 'or'));
console.log(str2.replaceAll('is', 'or'));

let subEg = "this is for substring";
console.log("subEg",subEg.substring('for'));