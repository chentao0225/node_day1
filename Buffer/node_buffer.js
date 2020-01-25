
// let str = 'hello';
// let buf=Buffer.from(str);
// console.log(buf);
//
// //即将废弃 效率很低
// let buf2=new Buffer(10);
// console.log(buf2);
//
// //效率比上面的稍微高一些
// let buf3=Buffer.alloc(10);
// console.log(buf3);
//
// //效率最高 有一些安全性问题
// let buf4=Buffer.allocUnsafe(10);
// console.log(buf4);

// let str='hello';
// let buf=Buffer.from(str);
// console.log(buf);
//
// let buf2=new Buffer(10);
// console.log(buf2);
//
// let buf3=Buffer.alloc(10);
// console.log(buf3);
//
// let buf4=Buffer.allocUnsafe(10);
// console.log(buf4);


let str='hello';
let buf=Buffer.from(str);
console.log(buf);

let buf2=new Buffer(10);
console.log(buf2);

let buf3=Buffer.alloc(10);
console.log(buf3);

let buf4=Buffer.allocUnsafe(10);
console.log(buf4);

