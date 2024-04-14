"use strict";
let numbers = [1, 2, 3, 4];
let students = ["hoa", "hung", "hue"];
let obj = {
    name: "minh thu",
    address: "hn",
    id: 1
};
let obj1 = {
    name: "minh thu",
    address: "hcm",
    id: 15,
};
function test1(a) {
    console.log(111111, typeof (a));
    if (typeof (a) === "string") {
        console.log(a.toUpperCase());
    }
}
test1("text");
