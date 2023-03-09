const stringFrequency = (strings) => {
  let frequencyObj = {};
  for (let i = 0; i < strings.length; i++) {
    let key = strings[i];
    if (key in frequencyObj) {
      frequencyObj[key] += 1;
    } else {
      frequencyObj[key] = 0;
    }
  }
  return frequencyObj;
};

console.log(stringFrequency(["abc", "pqr", "pqr", "abc", "abc", "abc"]));
