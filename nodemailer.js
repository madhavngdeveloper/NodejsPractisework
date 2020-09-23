
mail=require('nodemailer')
transport=mail.createTransport({
    service:'gmail',
    auth:{
        user:'xyz@gmail.com',

        pass:'*********'
    }
})

transport.sendMail({
    to:'madhav.narwade99@gmail.com',
    subject:'testmail',
    from:'senduser94@gmail.com',
    html:"welcome in node mialer"},
function(err,result){
    if(err){
        console.log(err)
    }

    else{
        console.log('send succesfully')
    }

})