files=require("fs")
files.unlink("abc.txt",function(err){
	if(err){
		console.log(err)
	}
	else{
		console.log("file deleted")
	}
	
	
})


