//流式文件读取
let fs=require('fs');

let rs=fs.createReadStream('./cat.jpg');
let ws=fs.createWriteStream('./test1.jpg');
rs.on('open',()=>{
    console.log('读取open1');
});
rs.on('close',()=>{
    console.log('读取close1');
    ws.end();
});
ws.on('open',()=>{
    console.log('写入open1');
});
ws.on('close',()=>{
    console.log('写入close1');
});
rs.on('data',(data)=>{
    ws.write(data);
});


let fs2=require('fs');

let rs2=fs2.createReadStream('./cat.jpg');

let ws2=fs2.createWriteStream('./test2.jpg');

rs2.on('open',()=>{
    console.log('读取open2');
});
rs2.on('close',()=>{
    console.log('读取close2');
    ws2.close();
});
ws2.on('open',()=>{
    console.log('写入open2');
});
ws2.on('close',()=>{
    console.log('写入close2');
});

rs2.on('data',(data)=>{
    ws2.write(data);
});


let fs3=require('fs');
let rs3=fs3.createReadStream('./cat.jpg');
let ws3=fs3.createWriteStream('./test3.jpg');

rs3.on('open',()=>{
    console.log('读取open3');
});
rs3.on('close',()=>{
    console.log('读取close3');
    ws3.close();
});
ws3.on('open',()=>{
    console.log('写入open3');
});
ws3.on('close',()=>{
    console.log('写入close3');
});
rs3.on('data',(data)=>{
    ws3.write(data);
});
