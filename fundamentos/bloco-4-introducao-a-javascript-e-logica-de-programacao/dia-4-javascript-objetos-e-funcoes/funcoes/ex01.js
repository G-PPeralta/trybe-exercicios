let newString = "";

function reverseString(str) {
  for (let i = str.length - 1; i >= 0; i -= 1) {
      newString += str[i];
  }
  if(newString === str) {
    return true;
  } else {
    return false
  }
}

console.log(reverseString("arara"))