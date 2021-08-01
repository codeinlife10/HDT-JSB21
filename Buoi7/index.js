let arr = [];

for (let i = 0; i < 100; i++) {
  arr.push(false);
}

for (let i = 1; i <= 100; i++) {
  for (let j = i; j <= 100; j += i) {
    arr[j-1] = arr[j-1] ? false  : true;
  }
}

console.log(arr);

