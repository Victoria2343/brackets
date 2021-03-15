module.exports = function check(str, bracketsConfig) {
  let stack = [];
  for (let i=0; i < str.length; i++) {
    let b = str[i];
    if (b === '(' || b === '[' || b === '{' || b === '|') {
      stack.push(b);
    } else if (b === ')' && (stack[stack.length - 1] === '(')) {
      stack.pop();
    } else if (b === ']' && (stack[stack.length - 1] === '[')) {
      stack.pop();
    } else if (b === '}' && (stack[stack.length - 1] === '{')) {
      stack.pop();
    } else if (b === '|' && (stack[stack.length - 1] === '|')) {
      stack.pop();
    } 
    else if ((b === ')' || b === ']' || b === '}' || b === '|') && (stack.length == 0)) {
      return false;
    }
    else if ((stack.length == 0) && (b === '(' || b === '[' || b === '{' || b === '|') ) {
      return false;
    }  else {
      return false;
    }
   
  }
  return true;
}