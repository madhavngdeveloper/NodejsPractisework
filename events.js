eve=require("events")
emiter= new eve.EventEmitter()
emiter.on("myevents",fun)
function fun(){
    console.log("heee")

}
emiter.emit("myevents")


