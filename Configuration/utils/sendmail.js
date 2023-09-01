const nodemailer = require("nodemailer");

const email = async (subject, message, send_to, sent_from, reply_to) => {
    const transporter =nodemailer.createTransport({
        host:process.env.EMAIL_HOST,
        port:"587",
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS
        },
        tls:{
            rejectUnauthorized:false,
        }
    })
}; 

const options={
    from:send_to,
    replyTo:reply_to,
    html:message
}

transporter.sendMail(options, function(err,info){
    if(err){
        console.log(err);
    }
    else{
        console.log(info);
}
});