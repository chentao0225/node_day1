let fs=require('fs');

//简单文件写入

fs.writeFile('./test1.txt','新年第一天，加油！',(err)=>{
   if(!err){
       console.log('文件1写入成功');
   } else{
       console.log(err);
   }
});

let fs2=require('fs');
fs2.writeFile('./test2.text','不能看低自己！',(err)=>{
    if(!err){
        console.log('文件2写入成功');
    }else{
        console.log(err);
    }
});

let fs3=require('fs');
fs3.writeFile('./test3.txt','自信点！',(err)=>{
    if(!err){
        console.log('文件3写入成功');
    }else{
        console.log(err);
    }
});