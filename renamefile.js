files=require("fs")
files.rename("abc.txt","newfile.txt",function(err){
	if(err){
		console.log(err)
	}
	else{
		console.log('fle rebamed')
	}
	
	
})