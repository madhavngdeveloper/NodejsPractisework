files=require("fs")
files.writeFile("abc.txt","welcome to fs",function(err){
	if(err){
		console.log(err)
	}
	else{
		console.log('file is created')
	}
	
	
})