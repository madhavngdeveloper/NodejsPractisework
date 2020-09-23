
jwt=require("jsonwebtoken")
var payload={
    name:"madhav@123",
    city:"hyde"
}
token=jwt.sign(payload,"@$%^^&&",{expiresIn:'1hr'})
console.log(token)
console.log(jwt.decode(token))