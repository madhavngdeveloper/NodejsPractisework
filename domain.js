domain=require("domain").create()
fs=require("fs")
domain.run( function(){
    fs.readFile("new.txt",function(err,res){
        if(err)
        throw err
    })
})
domain.run(function (){
    fs.writeFile("abc.txt",function(err,res){
        if(err)
        throw err;
        console.log(res)

    })
})
domain.on('error',function (error){
    console.log(error)
})