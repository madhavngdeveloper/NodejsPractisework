mysql=require("mysql")
connection=mysql.createConnection({
host:"localhost",
user:"root",
password:"root",
database:"nodejs"

})
connection.connect((err)=>{
    if(err)
    console.log(err)
    else
    connection.query("select * from products",(err,res)=>{
        if(err)
        console.log(err)
        else 
        data=res
        console.log(data[0].p_id
            )
    })

})
