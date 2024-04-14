"use strict";
function showMessage() {
    console.log("Hello, world!");
}
showMessage(); // In ra: "Hello, world!"
let result = showMessage(); // Không có lỗi biên dịch
console.log(result); // In ra: "undefined"
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
        console.log("Hello, world!");
    }
}
throwError("Something went wrong!"); // Ném ra một ngoại lệ
infiniteLoop(); // Vòng lặp vô hạn, không bao giờ kết thúc
