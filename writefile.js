fs=require("fs")
/*fs.readFile("abc.txt",(err,res)=>{
    if(err)
    console.log(err)
    console.log(res.toString())
})*/
fs.writeFile("abc.txt","welcome",(err,data)=>{
    console.log(data)
})




