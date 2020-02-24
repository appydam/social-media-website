const nodemailer = require('../config/nodemailer');


// this is another way of exporting a method
exports.newComment = (comment)=>{
    console.log('inside newComment mailer');

    nodemailer.transporter.sendMail({
        from:'appydam@gmail.com',
        to: comment.user.email,
        subject:"new comment publish",
        html:<h1>Yup !! your comment is now published</h1>

    }, (err,info)=>{
        if(err){
            console.log("error is sending mail",err);
        }
       
        console.log('message sent',info);
        return;
    });
}