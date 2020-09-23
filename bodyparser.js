expr=require("express")
app=expr()
app.listen(8080)
bp=require('body-parser')
app.use(bp.json());
app.post('/meth',(req,res)=>{
	console.log(req.body)
	res.send('progrma run successefully')
})