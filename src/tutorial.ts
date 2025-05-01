export function Tutorial() {
   
let str:string = 'ranuj';
str = str + 'ranuj';
// console.log(str); // Output: ranujranuj

let age = 34
age = 34.5; // TypeScript allows this, but it's not a good practice
// console.log(age); // Output: 34.5
age = age - 34; // TypeScript will throw an error here because 'age' is expected to be a number

let isActive = true; // boolean
isActive = false; // boolean    
isActive = 1; // TypeScript will throw an error here because 'isActive' is expected to be a boolean
isActive = 'true'; // TypeScript will throw an error here because 'isActive' is expected to be a boolean    
isActive = 1; // TypeScript will throw an error here because 'isActive' is expected to be a boolean

// console.log(isActive); // Output: false

  }
  

  // ## Array Challenge

// - Create an array temperatures of type number[] and assign it some values. Then, try to add a string value to it.
// - Create an array colors of type string[] and assign it some values. Then, try to add a boolean value to it.
// - Create an array mixedArray of type (number | string)[] and assign it some values. Then, try to add a boolean value to it.
const temperature: number[] = [30, 32, 35, 28, 31];
temperature.push(33); // Valid
temperature[0] ='34'; // not valid
temperature.push(45);

const colors: (string | boolean | number)[] = ['red' , 'blue' , 'black']
colors.push('white')
colors.push(false)
colors.push(5)


// ## Object Challenge

// - 1) Create an object bike of type { brand: string, year: number } and assign it some values. Then, try to assign a string to the year property.
// - 2) Create an object laptop of type { brand: string, year: number } and try to assign an object with missing year property to it.
// - 3) Create an array products of type { title: string, price?: number }[] and assign it some values. Then, try to add an object with a price property of type string to it.

// - 1)
const bike:{ brand: string, year: number } = {brand: 'yamaha' , year: 1991}
bike.year = 1994;

// - 2)
const laptop: {brand: string, year?: number} = {brand:'tvs'}
laptop.year = 1991;
// laptop.car = 'tata punch' // throw error but will assign car property to the object
// console.log(laptop)

// - 3)
const yamaha = {name: 'cbz' , year: 2025}
const tvs = {name: 'apache' , year: 2021}
const royalEnfield = {name: 'bullet' , year: 2023, color: "red"}

const bikes: {name: string, year: number}[] = [{name: 'apache' , year: 2021}, 
  {name: 'cbz' , year: 2025}, {name: 'bullet' , year: 2023, color: "red"}] // throw error

  // ### function Challenge

// Your task is to create a function named processInput that accepts a parameter of a union type
//  string | number. The function should behave as follows:

// - If the input is of type number, the function should multiply the number by 2 and log the result 
// to the console.
// - If the input is of type string, the function should convert the string to uppercase and log
//  the result to the console.

function processInput(number: string | number):number|string{
  if(typeof number === 'number'){
   return number * 2;   
  } else {
   return number.toUpperCase()
  }
  
}
processInput('ranuj choudhary')

// ## Challenge

// Your task is to create a function named processData that accepts two parameters:

// - The first parameter, input, should be a union type that can be either a string or a number.
// - The second parameter, config, should be an object with a reverse property of type boolean, 
// by default it "reverse" should be false

// The function should behave as follows:

// - If input is of type number, the function should return the square of the number.
// - If input is of type string, the function should return the string in uppercase.
// - If the reverse property on the config object is true, and input is a string, the function
//  should return the reversed string in uppercase.

function processData(firstPara:string | number, secondPara:{reverse:boolean} = {reverse: false}):(string | number){
  if(typeof firstPara === 'number'){
    return firstPara * firstPara;
  } else {
    return secondPara.reverse ? firstPara.split('').reverse().join('').toUpperCase() : 
    firstPara.toUpperCase()
  }
}
// console.log(processData(0))
// console.log(processData(4, {reverse: true}))
// console.log(processData('ranuj choudhary', {reverse: true}))
// console.log(processData('ranuj choudhary'))
// console.log(processData()) error accured firstPara not provided

// ## Challenge

// - Define the Employee type: Create a type Employee with properties id (number), name (string), and department (string).

// - Define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee).

// - Create a Union Type: Define a type Staff that is a union of Employee and Manager.

//  Also create a Manager object named bob who manages alice and steve.

// - Test the function: Call the printStaffDetails function with alice and bob as arguments and verify the output.
type Employee = {
  id: number,
  name: string,
  department: string,
  role:'employee'
}
type Manager = {
  id: number,
  name: string,
  employees: Employee[],
  role: 'manager'
}

type Staff = Employee | Manager;

const EmployeeOne:Employee = {
  id: 1,
  name: 'ranuj',
  department: 'IT Team',
  role:'employee'
}
const EmployeeTwo:Employee = {
  id: 2,
  name: 'raneesh choudhary',
  department: 'QA Team',
  role:'employee'
}

const BankManagerFirst:Manager = {
  id:1,
  name:'Amisha Tomer',
  employees: [EmployeeOne, EmployeeTwo],
  role: 'manager'
}
const BankManagerSecond:Manager = {
  id:1,
  name:'Rajat Tomer',
  employees: [EmployeeOne, EmployeeTwo],
  role: 'manager'
}

// - Create the printStaffDetails function: This function should accept a parameter of type Staff. 
// Inside the function, use a type guard to check if the 'employees' property exists in the passed object.
//  If it does, print a message indicating that the person is a manager and the number of employees they manage. 
// If it doesn't, print a message indicating that the person is an employee and the department they belong to.

// - Create Employee and Manager objects: Create two Employee objects. One named alice and second named steve.
// 
function printStaffDetails(staff:Staff):string{
  
 if("employees" in staff){
  return ` Person is an ${staff.role} who's name is ${staff.name.toUpperCase()}. He Manages ${staff.employees.length} number of employees.`
 } else {
  return `Person is an ${staff.role}  who's name is ${staff.name.toUpperCase()}. He belogs to department ${staff.department}`
 }
}
// console.log(printStaffDetails(BankManagerSecond))
// console.log(printStaffDetails(EmployeeOne))
// console.log(printStaffDetails(EmployeeTwo))



// ## Challenge

// - Start by defining an interface Computer using the interface keyword. This will serve as a blueprint for
      //  objects that will be of this type.
// - Inside the interface, define the properties that the object should have. In this case, we have id, brand, 
      // ram, and storage.
// - Use the readonly keyword before the id property to indicate that it cannot be changed once it's set.
// - Use the ? after the storage property to indicate that this property is optional and may not exist on 
      // all objects of this type.
// - Also inside the interface, define any methods that the object should have. In this case, we have upgradeRam,
//  which is a function that takes a number and returns a number.
// - Now that we have our interface, we can create an object that adheres to this interface. This object should
      //  have all the properties defined in the interface (except for optional ones, which are... optional), and the
      //  methods should be implemented.
// - Finally, we can use our object. We can call its upgradeRam method to increase its RAM.

type unit = "MB" | "GB" | "TB"

interface Resource {
  value: number,
  unit: unit
}

interface Computer {
  readonly id: number,
  brand: string,
  ram:Resource,
  storage:Resource
  upgradeRam(value: number):string
  upgradeStorage(value: number):string
  currentRam():string
}

const computer:Computer = {
  id: 111,
  brand: 'Dell',
  ram: {value: 8, unit: 'GB'},
  storage:  {value: 500, unit: 'GB'},
  upgradeRam(value){
    if(typeof value === 'number'){
    this.ram.value += value;
    return `Ram is upgraded from ${this.ram.value - value}${this.ram.unit} to ${this.ram.value}${this.ram.unit}` ;
    } else {
       return 'Error: value can only be type of number!'
    }
  },
  upgradeStorage(value){
    if(typeof value === 'number'){
      if(value < 50) return 'value cannot be less than 50GB'
      this.storage.value += value;
      return `Storage is upgraded from ${this.storage.value - value}${this.storage.unit} to ${this.storage.value}${this.storage.unit}` ;
    } else {
      return 'Error: value can only be type of number!'
    }
 },
  currentRam(){
    return `Your current system ram is ${this.ram.value}${this.ram.unit}`;
  }
}

// console.log(computer.currentRam())
// console.log(computer.upgradeRam(8))
// console.log(computer)
// console.log(computer.upgradeStorage(500))
// console.log(computer.upgradeStorage('500'))


