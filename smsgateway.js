// @ts-nocheck
exp=require('express')
app=exp()
app.listen(8080)
bp=require('body-parser')
require=require('express')
requ=require("request")
app.use(bp.json())
app.post('/met',(req,res)=>{
        num=req.body.number
        msg=req.body.message
        console.log(num)
        console.log(msg)
        str=" paste url provided by sms service",

requ({uri:"str",method:"get"},function(err,res){
    if(err)
    res.send(err)
    else
    res.send('message sent')
})
})