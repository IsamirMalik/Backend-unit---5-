const nodemailer = require("nodemailer");
const express = require("express");
const PORT = 3030;
const EMAIL = 'samirmalik591@gmail.com';
const APP_PASS = 'yuit qvgi uiga ruch' ;
const app = express();
require("dotenv").config();

app.use(express.json());

app.get("/test", (req, res) => {
  res.send("Test route is working");
});


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: EMAIL,
    pass: APP_PASS,
  },
});

// Wrap in an async IIFE so we can use await.
app.get('/sendmail' ,async (req, res) => {
  const info = await transporter.sendMail({
    from: '"Sameer Malik" <samirmalik591@gmail.com>',
    to: "venugopal.burli@masaischool.com , isamirmalik@gmail.com",
    subject: "Test ✔",
    text: "This is a testing Email , no need to reply", // plain‑text body
    html: "<b>Hello Sir!</b>", // HTML body
  });

  console.log("Message sent:", info.messageId);
  res.status(200).json({ message: "Email sent successfully" });
});

app.use((req, res) => {
  res.status(404).json({ error: "404 : Route Not found" });
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:3030`);
});