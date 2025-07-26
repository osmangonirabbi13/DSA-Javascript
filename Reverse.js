// Reverse with  extra space

let arr = [1, 2, 3, 4, 5];
let copy = new Array(arr.length);

for (let i = 0; i < arr.length; i++) {
  copy[i] = arr[arr.length - 1 - i];
}
console.log(copy);

// Reverse without  extra space

let arr = [1, 2, 3, 4, 5];

let i = 0;
let j = arr.length - 1;

while (i < j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

  i++;
  j--;
}

console.log(arr);
