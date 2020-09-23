router=exp.Router();
router.get("/data",(req,res)=>{
	res.send("welcomy by external get method")
})
router.post("/data1",(req,res)=>{
	res.sendFile({"name":"madhav"})
})

module.exports=router