const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim);

}

const pairs = (str) => {
  // write code for strings.pairs
  let pair = [];
  for (let i = 0; i < str.length; i+=2){
    pair.push(str[i] + str[i+1]);

  }
  return pair;
}

const reverse = (str) => {
  // write code for strings.reverse
  let splitWord;
  let rever;
  let reversedStr;

  splitWord = str.split('');
  rever = splitWord.reverse();
  reversedStr = rever.join('');
  return reversedStr;
} 


module.exports = {
  split,
  pairs,
  reverse
}