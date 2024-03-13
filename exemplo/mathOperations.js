const add = (a, b) => {
	return a + b
}

const subtration = (a, b) => {
	return a - b
}

const division  = (a,b) => {
	return a / b
}

const multi = (a,b) =>{
	return a * b
}

console.log(add(4, 6))

var num1 = 10
var num2 = 20
var soma = add(num1, num2)

console.log(`resultado da soma entre ${num1} e ${num2} e ${soma}`)

console.log(add(num1, num2))
console.log(subtration(num1, num2))
console.log(division(num1, num2))
console.log(multi(num1, num2))