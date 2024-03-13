const add = (a, b) => {
	return a + b
}

const subtration = (a, b) => {
	return a - b
}

const division  = (a,b) => {
	return a / b
}

const multiplication = (a,b) =>{
	return a * b
}



var num1 = 10
var num2 = 20
var soma = add(num1, num2)
var sub = subtration(num1, num2)
var div = division(num1, num2)
var multi =  multiplication(num1,num2)

console.log(`resultado da soma entre ${num1} e ${num2} e ${soma}`)
console.log(`resultado da subtraçao entre ${num1} e ${num2} e ${sub}`)
console.log(`resultado da divisao entre ${num1} e ${num2} e ${div}`)
console.log(`resultado da multiplicacao entre ${num1} e ${num2} e ${multi}`)


