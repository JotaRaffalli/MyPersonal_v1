//config/email.js
var nodemailer = require('nodemailer');
module.exports.email = {
    service: "Mailgun",
    auth: {
    user: "postmaster@sandboxab7bfb0629b54aa28917b4c90cf1f121.mailgun.org", 
    pass: "0a5a626bb7fefff8a1a45871095e0717"
    },
    transporter: {
        tls: {
            rejectUnauthorized: false
        }
    }
    ,
    templateDir: "api/emailTemplates",
    from: "postmaster@sandboxab7bfb0629b54aa28917b4c90cf1f121.mailgun.org",
    testMode: false,
    ssl: true,
   }