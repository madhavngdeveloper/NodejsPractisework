/*
function fun1(x){
    return new Promise(function(resolve,reject){
        if(isNaN(x))
        return reject("error")
        else
        return resolve(++x)
    });
}
function fun2(y){
    return new Promise((resolve,reject)=>{
        if(isNaN(y))
        return reject("error")
        else
        return resolve(++y)
    });
}
function fun3(z){
    return new Promise((resolve,reject)=>{
        if(isNaN(z))
        return reject("error")
        else
        return resolve(++z)
    });
}
fun1(10).then((rv)=>{
    console.log(rv)
    fun2(200).then((rvv)=>{
        console.log(rvv)
        fun3(300).then((result)=>{
            console.log(result)
        },(error)=>{
            console.log("error in function3")
        })
    },(error)=>{
        console.log("eroor in function 2")
    })
},(error)=>{
    console.log("error infunction1")
})
*/
function fun1(a){
    return new Promise(function(resolve,reject){
        if(isNaN(a))
        return reject('error')
        return resolve(++a)
    })
}
function fun2(b){
    return new Promise(function(resolve,reject){
        if(isNaN(b))
        return reject("error")
        return resolve(++z)

    })
}
function fun3(c){
    return new Promise(function(resolve,reject){
        if(isNaN(c))
        return reject('error')
        return resolve(++c)
    })
}
fun1(20).then((rv)=>{
    console.log(rv)
    fun2(20).then((rvv)=>{
        console.log(rvv)
        fun3(30).then((result)=>{
            console.log(result)
        },(err)=>{
            console.log("error in function 3")
        })
    },(err)=>{
        console.log("error in function3")
    })
    
},(err)=>{
    console.log("error in function 1")
})
























