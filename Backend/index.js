const express = require('express')
const nodemailer = require("nodemailer")
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin,Accept,X-Requested-With, Content-Type,authorisation');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})


app.post('/message', (req, res) => {

    const data = req.body

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'uvyadav2230@gmail.com',
            pass: 'obgs tqog ccil fzrz'
        }
    });

    var mailOptions = {
        from: 'uvyadav2230@gmail.com',
        to: "dineshnirban01@gmail.com",
        subject: 'New message from client',
        text: `${data.name} with email ${data.email} and mobile ${data.mobile} sent you a message \n${data.message}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.json({ success: false, message: "Something went wrong" })
            console.log(error);
        } else {
            res.json({ success: true, message: "password sent on your registered email id" })
            console.log('Email sent: ' + info.response);
        }
    });

})

app.listen(8080, () => {
    console.log("listening on port")
})