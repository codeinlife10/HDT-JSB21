// _ Hãy tạo 1 trang html(web) có 2 ô input cho phép nhập vào 2 số
// _ Trên trang html đó có 4 button mỗi button thực hiện 1 chức năng
// (function) như sau:
//     + 1 nút tính tổng và alert ra giá trị đó
//     + 1 nút tính trung bình cộng và in ra màn hình console
//     + 1 nút tính (hiệu 2 số) và alert (hiệu đó) có phải số nguyên
//     tố hay không (Có/Không)

//     ##########  Advanced #########
//     + 1 nút in ra các (giá trị của mảng) với điều kiện các giá trị
//     đó chia hết cho 1 trong 2 số được người dùng nhập vào
//     * Với mảng được tạo sẵn tùy ý
//     * In ra giá trị đó trong 1 thẻ của html

let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
function sum() {
  let num1 = Number(number1.value);
  let num2 = Number(number2.value);
  alert(num1 + num2);
}

function average() {
  let num1 = Number(number1.value);
  let num2 = Number(number2.value);
  console.log((num1 + num2) / 2);
}
