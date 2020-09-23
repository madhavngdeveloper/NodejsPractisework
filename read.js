files=require("fs")
files.appendFile("abc.txt","this new conten added to file",function(err){
	if(err){
		console.log(err)
	}
	else{
		console.log("added some data to file")
	}
	
	
})