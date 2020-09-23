fs=require("fs")
function writefile(err,data,){
if(err)
throw err
fs.writeFile("new.txt",data.toString(),fileunlink)
}

function  fileunlink(){
    fs.unlink("new.txt",del)
}
function del(err,data){
if(err)
throw err
console.log("file deleted ")
}
fs.readFile("new.txt",writefile)