function nextGreatestElement(arr, n) {
  let stack = [];
  let top = -1,
    y;
  let res = new Array(n);

  arr.forEach((x, i) => {
    if (top === -1) {
      stack.push([x, i]);
      top++;
    } else {
      while (top !== -1 && x > stack[top][0]) {
        y = stack.pop();
        top--;
        res[y[1]] = x;
      }
      stack.push([x, i]);
      top++;
    }
    console.log(stack);
  });

  while (top !== -1) {
    y = stack.pop();
    top--;
    res[y[1]] = -1;
  }

  return res;
}

const arr = [1, 3, 2, 5],
  n = 4;

console.log(nextGreatestElement(arr, n));
