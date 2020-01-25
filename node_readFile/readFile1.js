//简单文件读取
// let {readFile,writeFile}=require('fs');
// readFile('./cat.jpg',(err,data)=>{
//     if(!err){
//         // console.log(data);
//         writeFile('./cat1.jpg',data,(err)=>{
//             if(!err)console.log('文件写入成功');
//             else console.log(err);
//         })
//     }else {
//         console.log(err);
//     }
// });

let {readFile,writeFile}=require('fs');
readFile('./cat.jpg',(err,data)=>{
    if(!err){
        writeFile('./cat2.jpg',data,(err)=>{
            if(!err) console.log('文件2写入成功');
            else console.log(err);
        })
    }else{
        console.log(err);
    }
});

let fs3=require('fs');
fs3.readFile('./cat.jpg',(err,data)=>{
    if(!err){
        fs3.writeFile('./cat3.jpg',data,(err)=>{
            if(!err)console.log('文件3写入成功');
            else console.log(err);
        })
    }else{
        console.log(err);
    }
})