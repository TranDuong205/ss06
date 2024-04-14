let numbers:number[]=[1,2,3,4];

let students:string[]=["hoa","hung","hue"]

let obj={
    name: "minh thu",
    address: "hn",
    id:1
}

let obj1:{
    name:string,
    address:string,
    id:number
}={
    name: "minh thu",
    address: "hcm",
    id:15,
}
function test1(a:unknown) {
    console.log(111111,typeof(a));
    if(typeof(a)==="string"){
        console.log(a.toUpperCase());
        
    }
}
test1("text")