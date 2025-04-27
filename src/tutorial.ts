export function Tutorial() {
   
let str:string = 'ranuj';
str = str + 'ranuj';
console.log(str); // Output: ranujranuj

let age = 34
age = 34.5; // TypeScript allows this, but it's not a good practice
console.log(age); // Output: 34.5
age = age - 34; // TypeScript will throw an error here because 'age' is expected to be a number

let isActive = true; // boolean
isActive = false; // boolean    
isActive = 1; // TypeScript will throw an error here because 'isActive' is expected to be a boolean
isActive = 'true'; // TypeScript will throw an error here because 'isActive' is expected to be a boolean    
isActive = 1; // TypeScript will throw an error here because 'isActive' is expected to be a boolean

console.log(isActive); // Output: false

  }
  
