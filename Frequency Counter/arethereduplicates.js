// Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
// and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter 
// pattern OR the multiple pointers pattern.

function areThereDuplicates() {
  let obj = {};
  for (let i = 0; i < arguments.length; i++) {
    let key = arguments[i];
    if (key in obj) {
      return true;
    } else {
      obj[key] = 1;
    }
  }
  return false;
}
