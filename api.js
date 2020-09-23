exp=require("express");
app=exp()
extr=require("./pro")
app.listen(8080);
/*app.get("/data",(req,res)=>{
	res.send("welcome by get method")
})

app.post("/data1",(req,res)=>{
	
res.send("welcome by post method")})*/

app.use("/router",extr)