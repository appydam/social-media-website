const nodemailer = require("nodemailer");
const ejs = require('ejs');
const path = require('path')

// this is the path which sends emails that how this communication is going to take place
let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'appydam',
        pass: 'arpit.737'
    }
});

// it defines that whenever we r sending the emails then where the file is going to place
let renderTemplate = (data, relativePath) => {
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname, '../views/mailers', relativePath),
        data,
        function(err, template){
         if (err){console.log('error in rendering template'); return}
         
         mailHTML = template;
        }
    )

    return mailHTML;
}

// we r going to use these where we r sending the emails
module.exports = {
    transporter: transporter,
    renderTemplate: renderTemplate
}