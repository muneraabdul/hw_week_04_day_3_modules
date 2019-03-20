const sayHello = (name) => {
    console.log(`Hi, ${name}!`)
}

const getOlder = (age) =>{
    console.log(age+50) ;
}

// Debug


const multiply = (num1, num2) => console.log(num1 * num2); 

const subtractFive = num => {
	const diff = 5 - num; 
    console.log(diff);
}


const printName = (names) => console.log(names) ;

// exporting 
module.exports = {
    sayHello: sayHello,
    getOlder: getOlder,
    multiply: multiply,
    subtractFive: subtractFive,
    printName: printName
  };
