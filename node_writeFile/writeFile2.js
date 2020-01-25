//流式文件写入
let fs=require('fs');

let ws=fs.createWriteStream('./demo1.text');

ws.on('open',()=>{
    console.log('写入流1打开了');
});
ws.on('close',()=>{
    console.log('写入流1关闭了');
});
ws.write('ヾ(◍°∇°◍)ﾉﾞ\n');
ws.write('必须要改变自己！');
ws.close();//v8版本以后可以使用
// ws.end(); //稳定关闭



let fs2=require('fs');
let ws2=fs2.createWriteStream('./demo2.txt',{
    start:10
});

ws2.on('open',()=>{
    console.log('写入流2打开了');
});
ws2.on('close',()=>{
    console.log('写入流2关闭了');
});

ws2.write('明天会更好\n');
ws2.write('加油\n');

ws2.end();


let fs3=require('fs');

let ws3=fs3.createWriteStream('./demo3.txt',{
    start:20
});

ws3.on('open',()=>{
    console.log('写入流3打开了');
});
ws3.on('close',()=>{
    console.log('写入流3关闭了');
});
ws3.write('啦啦啦\n');
ws3.write('demo3');
ws3.close();