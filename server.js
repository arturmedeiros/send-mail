// Environment variables
require('dotenv').config();

// Server Configs
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const serverPort = process.env.SERVER_PORT ?? 3000;

// Mail Configs
const user = process.env.MAIL_USERNAME;
const pass = process.env.MAIL_PASSWORD;
const host = process.env.MAIL_HOST;
const mailPort = process.env.MAIL_PORT;

// Routes
/* Root */
app.get("/", (
    request,
    response) =>
    response.send('200')
)

/* Send Test Mail */
app.get("/send", (request, response) => {
    const transporter = nodemailer.createTransport({
        host: host,
        port: mailPort,
        auth: {user, pass}
    })

    transporter.sendMail({
        from: user,
        to: user,
        replyTo: "noreply@arjos.com.br",
        subject: "Send mail with Node.JS!",
        text: "This message sent by Node.JS server. It's amazing!"
    }).then(info => {
        response.send(info)
    }).catch(error => {
        response.send(error)
    })

})

// Start Server
app.listen(serverPort, () => console.log(`
    Server running on host: http://localhost:${serverPort}
`))