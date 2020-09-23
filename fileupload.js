exp=require("express")
app=exp()
app.listen(8080)
fob=require("express-fileupload")
app.use(fob())
app.post("/met",(req,res)=>{
    fdata=req.files.f1
    fname=req.files.f1.name
    console.log(fdata)
    console.log(fname)

fdata.mv("images/"+fname)

})

exp=require("express")
app=exp()
app.listen(8080)
fob=require('express-fileupload')
app.use(fob())
app.post('/met',(req,res)=>{

    filedata=req.files.f1
    console.log(filedata)
})
