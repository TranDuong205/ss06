function showMessage(): void {
    console.log("Hello, world!");
}
  
showMessage();  // In ra: "Hello, world!"
  
let result: void = showMessage();  // Không có lỗi biên dịch
console.log(result);  // In ra: "undefined"

function throwError(message: string): never {
    throw new Error(message);
}
  
function infiniteLoop(): never {
    while (true) {
        console.log("Hello, world!");
    }
}
  
  throwError("Something went wrong!");  // Ném ra một ngoại lệ
  
  infiniteLoop();  // Vòng lặp vô hạn, không bao giờ kết thúc