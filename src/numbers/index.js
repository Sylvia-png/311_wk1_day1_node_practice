const isEven = (num) => {
  // write code for numbers.isEven
return num % 2 === 0 ? true : false;
}

const sum = (arr) => {
  // write code for numbers.sum
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return arr.reduce(reducer);
}



const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const arrSum = arr.reduce(reducer);
  if (arrSum === sum) {
    return true;
  } else {
    return false;
  }
} 



module.exports = {
  isEven,
  sum,
  comboSum
}