mongodb=require("mongodb").MongoClient
url="mongodb://localhost:27017"
mongodb.connect(url,(err,clientobj)=>{
    dbobj=clientobj.db("abcd")
    dbobj.collection("").insert("durga",(err,res)=>{

    })
    if(err){
        console.log(err)
    }
    else{
        console.log('table created')
    }
})




