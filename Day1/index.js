// Khai báo biến
const pi = 3.14 // khai báo biến không thể thay đổi sau này
var name = "John" // khai báo biến cục bộ
let age = 20 // khai báo biến toàn cục


// Vòng lặp, ví dụ để in ra các số từ 0 đến 10
// Vòng lặp for
// for (let i = 0; i <= 10; i++){
//     console.log(i)
// }

// Vòng lặp while
// let i = 0;
// while (i <= 10){
//     console.log(i);
//     i++;
// }

// Câu điều kiện
// let score = 85;
// if (score > 80 && score <= 100){
//     console.log("Exellent")
// }
// else if (score > 65 && score <= 80){
//     console.log("Great")
// }
// else if (score > 40 && score <= 65){
//     console.log("Good")
// }
// else {
//     console.log("Bad")
// }

// Hãy tính tổng các số chia hết cho 3 và
// tích các số chia hết cho 10 trong khoảng từ 1 đến 50

// let sum = 0;
// let product = 1;
// for (let i = 1; i <= 50; i++){
//     if (i % 3 == 0){
//         sum += i;
//     }
//     else if (i % 10 == 0){
//         product *= i;
//     }
// }
// console.log(sum);
// console.log(product);

// DOM
const heading_1 = document.getElementById("heading")
const heading_2 = document.getElementsByClassName("heading")

// API
fetch ("url of api")
    .then(response => response.json()) // chuyển dữ liệu api thành dạng json
    .then(data => console.log(data)) // xử lý dữ liệu
    .catch(error => console.log("error")) // thông báo lỗi