// Reverse  extra space

let arr = [1, 2, 3, 4, 5];
let copy = new Array(arr.length);

for (let i = 0; i < arr.length; i++) {
  copy[i] = arr[arr.length - 1 - i];
}
console.log(copy);
