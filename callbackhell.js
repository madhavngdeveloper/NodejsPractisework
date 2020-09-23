fs=require('fs')
fs.readFile("abc.txt",(err,data)=>{
    if(err)
    throw err
    fs.writeFile("new.txt",data.toString(),(err,res)=>{
        if(err)
        throw err
        fs.unlink("abc.txt",(err,res)=>{
            if(err)
            throw err
            console.log("file deleted")
        })
    })
})