module.exports = app => {
    'use strict';
    require('dotenv').config();
    const mailer = require('nodemailer');

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: `${process.env.EMAIL_ADDRESS}`,
            pass: `${process.env.EMAIL_PASSWORD}`
        }
    });
    const emailRecipient = `${process.env.EMAIL_ADDRESS}`
    // route to contact email recipient
    app.post('/mail/contact', (request, response) => {
        const userName = request.body.name;
        const userEmail = request.body.email;
        const subject = request.body.subject;
        const message = request.body.message;

        const messageDefined = {
            from: {
                name: userName,
                address: userEmail
            },
            to: `${emailRecipient}`,
            subject: `Portfolio Express ~ ${subject}`,
            text: message
        }
        console.log(messageDefined);
        // using sendMail per nodemailer documentation
        transporter.sendMail(messageDefined, (error, response) => {
            if (!error) {
                console.log(`response delivered: ${response}`)
                response
                    .status(200)
                    .json('successfully sent')
            }
            else {
                console.error(`error occurred: ${error}`)
            }
        })
    })
};

/** Sends an email using the preselected transport object */
// sendMail(mailOptions: Mail.Options, callback: (err: Error | null, info: SentMessageInfo) => void): void;
// sendMail(mailOptions: Mail.Options): Promise<SentMessageInfo>;