const add = function(a,b) {
  const result = a+b

  return result
	
};

const subtract = function(a,b) {
  const result = a - b
	return result
};

const sum = function(arr) {
  const result = arr.reduce((total, number) => {
    return total + number;}, 0);
	return result
};

const multiply = function(arr) {
const result = arr.reduce((total, number) => {
    return total * number;}, 1);
	return result
};

const power = function(b,e) {
  const result = b ** e
  return result
	
};

const factorial = function(num) {
  let result = 1
	for (let i = 1; i <= num; i++) {
   result = result * i;
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
