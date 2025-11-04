
const nodemailer = require("nodemailer");
const EMAIL = 'samirmalik591@gmail.com';
const APP_PASS = 'yuit qvgi uiga ruch' ;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: EMAIL,
    pass: APP_PASS,
  },
});

module.exports =  transporter ;