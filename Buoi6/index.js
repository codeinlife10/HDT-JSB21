// let input = [1,-8,5,7,2,-100,10]
// let sum = 0


// for(let i = 0;i<input.length;i++) {
//     sum += input[i]
// }

var n = parseInt(prompt('nhập số phần tử muốn thêm vào:'));
var arr =[1,2];

for(var k=0;k<n;k++){
 add = prompt('nhập phần tử muốn thêm:');
  arr.push(add);
}

console.log(arr);