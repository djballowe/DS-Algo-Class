// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  let product = 1;

  const helper = (input) => {
    if (!input.length) {
      return;
    }
    product = product * input[0];
    helper(input.slice(1));
  };
  helper(arr);
  return product;
}

productOfArray([1, 2, 3, 10]);
